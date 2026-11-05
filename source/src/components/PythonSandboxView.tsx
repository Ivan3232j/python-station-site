import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Square,
  RotateCcw,
  Download,
  Upload,
  Terminal,
  Code2,
  Copy,
  Trash2,
  FileCode,
  BookOpen,
  CornerDownLeft,
  Package,
  Check,
  Search,
  FolderOpen,
} from "lucide-react";
import { playWinSound, playSnapSound } from "../utils/audio";
import { PythonCodeEditor } from "./PythonCodeEditor";
import {
  runPython,
  getStoredVirtualFiles,
  clearStoredVirtualFiles,
} from "../utils/pythonRunner";
import { VirtualFilesModal } from "./VirtualFilesModal";
import { TkPreview, extractTkinterState } from "./TkPreview";

interface PythonSandboxViewProps {
  initialCode?: string;
  onOpenHandbook?: () => void;
}

const TEMPLATES = [
  {
    id: "guess_game",
    title: "Игра «Угадай число» (random)",
    desc: "Подключение модуля random, цикл while и интерактивный input()",
    code: `import random

print("Я загадал число от 1 до 20. Попробуй угадать!")
secret = random.randint(1, 20)
attempts = 0

while True:
    guess = int(input("Твой вариант: "))
    attempts += 1
    
    if guess < secret:
        print("Загаданное число больше!")
    elif guess > secret:
        print("Загаданное число меньше!")
    else:
        print(f"Поздравляю! Ты угадал число {secret} за {attempts} попыток!")
        break
`,
  },
  {
    id: "calc",
    title: "Калькулятор (input и float)",
    desc: "Ввод двух чисел и выбор математического действия",
    code: `print("=== Калькулятор Python ===")
num1 = float(input("Введите первое число: "))
op = input("Выберите действие (+, -, *, /): ")
num2 = float(input("Введите второе число: "))

if op == "+":
    res = num1 + num2
elif op == "-":
    res = num1 - num2
elif op == "*":
    res = num1 * num2
elif op == "/":
    res = num1 / num2 if num2 != 0 else "Ошибка: деление на ноль"
else:
    res = "Неизвестная операция"

print(f"Результат: {res}")
`,
  },
  {
    id: "math_funcs",
    title: "Модуль math (математика)",
    desc: "Корни, тригонометрия, число Pi и округление",
    code: `import math

x = float(input("Введите число: "))
print(f"Квадратный корень sqrt({x}) = {math.sqrt(x) if x >= 0 else 'не существует в R'}")
print(f"Округление вверх: {math.ceil(x)}")
print(f"Округление вниз: {math.floor(x)}")
print(f"Число Пи = {math.pi}")
`,
  },
  {
    id: "list_analysis",
    title: "Анализ списка оценок",
    desc: "Работа со списками, min, max, sum и среднее арифметическое",
    code: `grades = [5, 4, 3, 5, 5, 4, 4, 5]
print("Все оценки:", grades)
print("Всего оценок:", len(grades))
print("Максимальная:", max(grades))
print("Минимальная:", min(grades))
avg = sum(grades) / len(grades)
print(f"Средний балл: {avg:.2f}")
`,
  },
  {
    id: "tkinter_gui",
    title: "Окно Tkinter (GUI)",
    desc: "Главное окно tk.Tk(), надпись Label, кнопка Button и поле ввода Entry. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    code: `import tkinter as tk

def on_click():
    name = entry.get()
    print(f"Привет из окна Tkinter, {name}!")
    lbl.config(text=f"Привет, {name}!", fg="green")

root = tk.Tk()
root.title("Мое первое GUI приложение")
root.geometry("380x250")

lbl_title = tk.Label(root, text="Приложение Tkinter", font=("Arial", 14, "bold"))
lbl_title.pack(pady=10)

lbl = tk.Label(root, text="Введите ваше имя:")
lbl.pack(pady=5)

entry = tk.Entry(root, width=25)
entry.pack(pady=5)

btn = tk.Button(root, text="Нажми меня", command=on_click)
btn.pack(pady=10)

root.mainloop()
print("Графический цикл mainloop завершен.")
`,
  },
];

const AVAILABLE_LIBRARIES = [
  { name: "random", desc: "Случайные числа (randint, choice, shuffle)", code: "import random\n" },
  { name: "math", desc: "Математика (sqrt, pi, ceil, floor, factorial)", code: "import math\n" },
  { name: "string", desc: "Наборы символов (ascii_letters, digits)", code: "import string\n" },
  { name: "tkinter", desc: "Графика GUI (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)", code: "import tkinter as tk\n" },
];

export const PythonSandboxView: React.FC<PythonSandboxViewProps> = ({
  initialCode,
  onOpenHandbook,
}) => {
  const [code, setCode] = useState(
    initialCode ||
      `# Добро пожаловать в Песочницу Python 3!\n# Здесь можно писать любые программы и запускать их\n\nname = input("Как тебя зовут? ")\nprint(f"Привет, {name}! Удачи в программировании на Python 3!")\n`
  );
  const [terminalOutput, setTerminalOutput] = useState<string>("Готов к запуску кода.\n");
  const [running, setRunning] = useState(false);
  const [waitingInput, setWaitingInput] = useState<{ resolve: (val: string) => void } | null>(null);
  const [inputVal, setInputVal] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [showFilesModal, setShowFilesModal] = useState<boolean>(false);
  const [vfsFileCount, setVfsFileCount] = useState<number>(() =>
    typeof window !== "undefined" ? Object.keys(getStoredVirtualFiles()).length : 0
  );

  const updateVfsCount = () => {
    setVfsFileCount(Object.keys(getStoredVirtualFiles()).length);
  };
  const [tkActive, setTkActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"editor" | "libraries" | "templates">("editor");

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [terminalOutput, waitingInput]);

  useEffect(() => {
    if (waitingInput) {
      setTimeout(() => inputFieldRef.current?.focus(), 50);
    }
  }, [waitingInput]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const outputBufferRef = useRef<string>("");
  const lastFlushRef = useRef<number>(0);
  const flushTimerRef = useRef<any>(null);

  const flushTerminal = () => {
    if (flushTimerRef.current) {
      clearTimeout(flushTimerRef.current);
      flushTimerRef.current = null;
    }
    if (outputBufferRef.current) {
      const chunk = outputBufferRef.current;
      outputBufferRef.current = "";
      setTerminalOutput((prev) => prev + chunk);
      lastFlushRef.current = Date.now();
    }
  };

  const appendOutput = (text: string, force = false) => {
    outputBufferRef.current += text;
    const now = Date.now();
    if (force || now - lastFlushRef.current >= 100) {
      flushTerminal();
    } else if (!flushTimerRef.current) {
      flushTimerRef.current = setTimeout(flushTerminal, Math.max(10, 100 - (now - lastFlushRef.current)));
    }
  };

  useEffect(() => {
    return () => {
      if (flushTimerRef.current) clearTimeout(flushTimerRef.current);
    };
  }, []);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitingInput?.resolve) {
      const val = inputVal;
      appendOutput(val + "\n", true);
      const resolveFn = waitingInput.resolve;
      setWaitingInput(null);
      setInputVal("");
      resolveFn(val);
    }
  };

  const stopExecution = () => {
    runningRef.current = false;
    if (waitingInput?.resolve) {
      waitingInput.resolve("");
    }
    setWaitingInput(null);
    setRunning(false);
    setTkActive(false);
    flushTerminal();
    appendOutput("\n🛑 Остановлено пользователем\n", true);
  };

  const runCode = async () => {
    if (running) {
      stopExecution();
      await new Promise((r) => setTimeout(r, 60));
    }

    setTkActive(false);
    runningRef.current = true;
    setRunning(true);
    playSnapSound();
    outputBufferRef.current = "";
    lastFlushRef.current = Date.now();
    setTerminalOutput("▶ Запуск программы...\n");

    try {
      const result = await runPython(code, {
        onOutput: (text) => appendOutput(text),
        onInput: (promptText) => {
          flushTerminal();
          return new Promise<string>((resolve) => {
            setWaitingInput({ resolve });
          });
        },
        onFilesChanged: () => {
          updateVfsCount();
        },
        isStopped: () => !runningRef.current,
      });

      if (result.success) {
        appendOutput("✨ Программа завершена\n", true);
        playWinSound();
        const tkState = extractTkinterState();
        if (tkState.hasTk) {
          setTkActive(true);
        }
      } else if (result.error) {
        appendOutput(`\n❌ ${result.error}\n`, true);
      }
    } catch (err: any) {
      const msg = err.toString ? err.toString() : String(err);
      appendOutput(`\n❌ ${msg}\n`, true);
    } finally {
      flushTerminal();
      runningRef.current = false;
      setRunning(false);
      setWaitingInput(null);
    }
  };

  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: "text/x-python" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.py";
    a.click();
    URL.revokeObjectURL(url);
    playWinSound();
    showToast("Файл сохранён как script.py");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setCode(content);
        playWinSound();
        showToast(`Файл ${file.name} загружен`);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-[1360px] mx-auto p-3 md:p-6 space-y-4 font-mono select-none">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A7A50] text-white px-4 py-2.5 rounded-xl shadow-lg font-bold text-[12.5px] flex items-center gap-2">
          <Check className="w-4 h-4" />
          {toast}
        </div>
      )}

      {/* Hidden File Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".py,.txt"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Header */}
      <header className="flex items-center justify-between gap-4 flex-wrap bg-white p-3 md:p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#0A7A50] flex items-center justify-center text-white shadow-xs">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-[17px] font-black text-[#0B0B0F]">
              Песочница Python 3
            </h1>
            <p className="text-[11.5px] text-[#63636E]">
              Свободное написание, тестирование и запуск любых программ
            </p>
          </div>
        </div>

        {/* Center Tabs: Editor / Libraries / Templates */}
        <div className="flex items-center gap-1.5 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]">
          <button
            onClick={() => setActiveTab("editor")}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${
              activeTab === "editor"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            💻 Код
          </button>

          <button
            onClick={() => setActiveTab("templates")}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "templates"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#0A54C4]" />
            Примеры ({TEMPLATES.length})
          </button>

          <button
            onClick={() => setActiveTab("libraries")}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "libraries"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            <Package className="w-3.5 h-3.5 text-[#0A7A50]" />
            Библиотеки
          </button>
        </div>

        {/* File & Handbook actions */}
        <div className="flex items-center gap-2">
          {onOpenHandbook && (
            <button
              onClick={onOpenHandbook}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]"
              title="Открыть справочник функций"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Справочник</span>
            </button>
          )}

          <button
            onClick={handleDownloadCode}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]"
            title="Скачать script.py"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Скачать .py</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]"
            title="Загрузить файл с компьютера"
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Загрузить</span>
          </button>
        </div>
      </header>

      {/* Tab: Templates */}
      {activeTab === "templates" && (
        <div className="bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="pb-3 border-b border-[#E3E3E9]">
            <h3 className="text-[16px] font-black text-[#0B0B0F]">Готовые примеры программ</h3>
            <p className="text-[12px] text-[#63636E]">
              Кликни на пример, чтобы загрузить его в редактор и запустить
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {TEMPLATES.map((tmpl) => (
              <div
                key={tmpl.id}
                onClick={() => {
                  setCode(tmpl.code);
                  setActiveTab("editor");
                  showToast(`Загружен пример: «${tmpl.title}»`);
                }}
                className="bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs"
              >
                <div>
                  <h4 className="font-black text-[13.5px] text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors mb-1.5">
                    {tmpl.title}
                  </h4>
                  <p className="text-[12px] text-[#63636E] leading-relaxed mb-3">
                    {tmpl.desc}
                  </p>
                </div>
                <span className="text-[11.5px] font-bold text-[#0A54C4] pt-2 border-t border-[#E3E3E9]">
                  Открыть код →
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Libraries */}
      {activeTab === "libraries" && (
        <div className="bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="pb-3 border-b border-[#E3E3E9]">
            <h3 className="text-[16px] font-black text-[#0B0B0F]">Библиотеки Python 3</h3>
            <p className="text-[12px] text-[#63636E]">
              Нажми на модуль, чтобы вставить команду import в начало программы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {AVAILABLE_LIBRARIES.map((lib) => (
              <div
                key={lib.name}
                onClick={() => {
                  if (!code.includes(lib.name)) {
                    setCode(lib.code + code);
                    showToast(`Импортирован модуль ${lib.name}`);
                  } else {
                    showToast(`Модуль ${lib.name} уже импортирован`);
                  }
                  setActiveTab("editor");
                }}
                className="bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A7A50] transition-all cursor-pointer group shadow-2xs hover:shadow-xs"
              >
                <div className="font-bold text-[#0A7A50] text-[14px] mb-1">
                  import {lib.name}
                </div>
                <div className="text-[12px] text-[#63636E] mb-2">{lib.desc}</div>
                <span className="text-[11.5px] font-bold text-[#0A7A50] group-hover:underline">
                  + Добавить в код
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Code Editor & Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Editor */}
        <div className="lg:col-span-7 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#0A54C4]" />
              <span>script.py</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  showToast("Код скопирован");
                }}
                className="p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] transition-colors cursor-pointer"
                title="Скопировать"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCode("")}
                className="p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer"
                title="Очистить код"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <PythonCodeEditor
            value={code}
            onChange={setCode}
            onRun={runCode}
            placeholder="# Напиши любой код на Python..."
            rows={15}
          />

          <div className="flex items-center gap-2.5">
            <button
              onClick={runCode}
              disabled={running && !waitingInput}
              className="flex-1 bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-6 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 disabled:opacity-50 transition-all cursor-pointer shadow-md"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{running ? "Выполняется..." : "Запустить код (Ctrl+Enter)"}</span>
            </button>

            {running && (
              <button
                onClick={stopExecution}
                className="border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Стоп</span>
              </button>
            )}
          </div>
        </div>

        {/* Terminal */}
        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#0A7A50]" />
              <span>Терминал вывода</span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setShowFilesModal(true)}
                className="text-[11px] text-[#0A54C4] hover:text-[#083E91] hover:underline flex items-center gap-1 font-bold cursor-pointer"
                title="Показать виртуальные файлы"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Файлы{vfsFileCount > 0 ? ` (${vfsFileCount})` : ""}</span>
              </button>
              {vfsFileCount > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm("Очистить все виртуальные файлы?")) {
                      clearStoredVirtualFiles();
                      updateVfsCount();
                      showToast("Файлы очищены");
                    }
                  }}
                  className="text-[10.5px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold"
                  title="Очистить файлы"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Очистить файлы</span>
                </button>
              )}
              <button
                onClick={() => setTerminalOutput("Терминал очищен.\n")}
                className="text-[10px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer"
              >
                Очистить
              </button>
            </div>
          </div>

          <div
            ref={terminalContainerRef}
            className="bg-[#15151D] text-[#E3E3E9] p-4 rounded-2xl border border-[#2C2C3A] min-h-[380px] max-h-[500px] overflow-y-auto font-mono text-[12.5px] leading-relaxed flex flex-col justify-between"
          >
            <div className="whitespace-pre-wrap break-words">
              {terminalOutput}

              {waitingInput && (
                <form onSubmit={handleInputSubmit} className="inline-flex items-center gap-2 mt-1">
                  <span className="text-[#0A7A50] font-bold select-none">&gt;&gt;&gt;</span>
                  <input
                    ref={inputFieldRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Введи ответ и нажми Enter..."
                    className="bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12px] font-mono shadow-inner min-w-[200px]"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer"
                  >
                    <CornerDownLeft className="w-3 h-3" />
                    <span>Enter</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Tkinter Window Preview */}
          {tkActive && (
            <TkPreview
              isAlive={tkActive}
              onStop={() => setTkActive(false)}
            />
          )}
        </div>
      </div>

      {/* Modal with Virtual Files */}
      <VirtualFilesModal
        isOpen={showFilesModal}
        onClose={() => setShowFilesModal(false)}
        onFilesChanged={updateVfsCount}
      />
    </div>
  );
};
