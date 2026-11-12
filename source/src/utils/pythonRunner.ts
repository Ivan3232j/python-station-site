import tkinterInitCode from "./pyStubs/tkinter_init.py?raw";
import tkinterMessageboxCode from "./pyStubs/tkinter_messagebox.py?raw";
import tkinterFiledialogCode from "./pyStubs/tkinter_filedialog.py?raw";
import pygameInitCode from "./pyStubs/pygame_init.py?raw";
import osStubCode from "./pyStubs/os_stub.py?raw";
import vfsCode from "./pyStubs/vfs.py?raw";
import jsonInitCode from "./pyStubs/json_init.py?raw";

declare global {
  interface Window {
    Sk: any;
  }
}

export interface PythonExecutionResult {
  success: boolean;
  output: string;
  logs: string[];
  error?: string;
  errorLine?: number;
  files?: Record<string, string>;
}

export interface TaskValidationResult {
  passed: boolean;
  message: string;
  hint?: string;
}

export interface RunPythonOptions {
  inputs?: string[];
  onOutput?: (text: string) => void;
  onInput?: (promptText: string) => Promise<string>;
  isStopped?: () => boolean;
  timeoutMs?: number;
  testCode?: string;
  virtualFiles?: Record<string, string>;
  persistFiles?: boolean;
  onFilesChanged?: (files: Record<string, string>) => void;
}

export const VFS_STORAGE_KEY = "python_virtual_files";

export function getStoredVirtualFiles(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(VFS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredVirtualFiles(files: Record<string, string>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(VFS_STORAGE_KEY, JSON.stringify(files));
  } catch {}
}

export function clearStoredVirtualFiles(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(VFS_STORAGE_KEY);
  } catch {}
}

// Ensure Skulpt CDN scripts are loaded
let skulptPromise: Promise<void> | null = null;

export function loadSkulpt(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Sk && window.Sk.importMainWithBody) {
    injectNativeSkulptModules();
    return Promise.resolve();
  }

  if (skulptPromise) return skulptPromise;

  skulptPromise = new Promise<void>((resolve, reject) => {
    const loadScript = (src: string) => {
      return new Promise<void>((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          res();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        // Скрипты должны выполняться строго по порядку: stdlib обращается к Sk из ядра
        s.async = false;
        s.onload = () => res();
        s.onerror = (e) => rej(e);
        document.head.appendChild(s);
      });
    };

    // Сначала ядро, потом стандартная библиотека: если stdlib выполнится раньше ядра,
    // он падает с "Sk is not defined" и пропадают модули (sys и др.)
    loadScript("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js")
      .then(() => loadScript("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js"))
      .then(() => {
        injectNativeSkulptModules();
        resolve();
      })
      .catch((err) => {
        console.warn("Failed loading Skulpt CDN", err);
        skulptPromise = null; // дать шанс повторной загрузке
        reject(err);
      });
  });

  return skulptPromise;
}

/**
 * Регистрация модулей в Skulpt:
 * - удалены старые заглушки math, random, string (используется stdlib)
 * - зарегистрированы tkinter, tkinter.messagebox, _vfs, json
 */
export function injectNativeSkulptModules() {
  const Sk = window.Sk;
  if (!Sk) return;
  if (!Sk.builtinFiles) Sk.builtinFiles = { files: {} };
  if (!Sk.builtinFiles.files) Sk.builtinFiles.files = {};

  // Удаляем старые JS/Python заглушки Skulpt
  delete Sk.builtinFiles.files["src/lib/tkinter.js"];
  delete Sk.builtinFiles.files["src/lib/tkinter/__init__.js"];
  delete Sk.builtinFiles.files["src/lib/json.js"];
  delete Sk.builtinFiles.files["src/lib/json/__init__.js"];
  delete Sk.builtinFiles.files["src/lib/os.py"];
  delete Sk.builtinFiles.files["src/lib/os.js"];
  delete Sk.builtinFiles.files["src/lib/os/__init__.js"];
  delete Sk.builtinFiles.files["src/lib/os/__init__.py"];

  // Устанавливаем чистые проверенные модули на Python
  Sk.builtinFiles.files["src/lib/tkinter/__init__.py"] = tkinterInitCode;
  Sk.builtinFiles.files["src/lib/tkinter/messagebox.py"] = tkinterMessageboxCode;
  Sk.builtinFiles.files["src/lib/tkinter/filedialog.py"] = tkinterFiledialogCode;
  Sk.builtinFiles.files["src/lib/_vfs.py"] = vfsCode;
  Sk.builtinFiles.files["src/lib/json/__init__.py"] = jsonInitCode;
  Sk.builtinFiles.files["src/lib/pygame/__init__.py"] = pygameInitCode;
  Sk.builtinFiles.files["src/lib/pygame.py"] = pygameInitCode;
  Sk.builtinFiles.files["src/lib/os.py"] = osStubCode;
  Sk.builtinFiles.files["src/lib/os/__init__.py"] = osStubCode;
}

const TIMEOUT_ERROR_MESSAGE =
  "Программа работает слишком долго. Похоже, цикл while никогда не заканчивается — проверь, меняется ли переменная в условии";

/**
 * 3. & 4. Единая функция запуска кода на Python 3
 */
export async function runPython(
  code: string,
  options: RunPythonOptions = {}
): Promise<PythonExecutionResult> {
  await loadSkulpt();
  const Sk = window.Sk;
  if (!Sk) {
    return {
      success: false,
      output: "Ошибка: Skulpt не загружен",
      logs: [],
      error: "Интерпретатор не готов",
    };
  }

  // 4. Защита от вечного цикла: yieldLimit = 100
  Sk.yieldLimit = 100;

  let outputText = "";
  let outputLineCount = 0;
  let exceededLineLimit = false;
  const MAX_OUTPUT_LINES = 1000;
  const TOO_MANY_LINES_MESSAGE =
    "Программа напечатала слишком много строк. Похоже, цикл не заканчивается — проверь, меняется ли переменная в условии";

  const logs: string[] = [];
  const inputQueue = options.inputs ? [...options.inputs] : undefined;
  const timeoutMs = options.timeoutMs ?? 5000;
  let executionStart = Date.now();

  // Единственный Sk.configure в проекте
  Sk.configure({
    output: (text: string) => {
      outputText += text;
      for (let i = 0; i < text.length; i++) {
        if (text[i] === "\n") {
          outputLineCount++;
        }
      }
      if (outputLineCount > MAX_OUTPUT_LINES) {
        exceededLineLimit = true;
        throw new Error(TOO_MANY_LINES_MESSAGE);
      }
      const trimmed = text.trim();
      if (trimmed) logs.push(trimmed);
      options.onOutput?.(text);
    },
    read: (file: string) => {
      if (Sk.builtinFiles && Sk.builtinFiles.files) {
        if (Sk.builtinFiles.files[file] !== undefined) {
          return Sk.builtinFiles.files[file];
        }
        const initJs = file.replace(/\.js$/, "/__init__.js");
        if (Sk.builtinFiles.files[initJs] !== undefined) {
          return Sk.builtinFiles.files[initJs];
        }
        const initPy = file.replace(/\.py$/, "/__init__.py");
        if (Sk.builtinFiles.files[initPy] !== undefined) {
          return Sk.builtinFiles.files[initPy];
        }
      }
      // При ненайденном файле ВСЕГДА бросаем ошибку
      throw new Error(`Модуль не найден: '${file}'`);
    },
    killableWhile: true,
    killableFor: true,
    inputfun: (promptText: string) => {
      if (promptText) {
        options.onOutput?.(promptText);
      }
      // Предопределенная очередь ввода для тестов
      if (inputQueue !== undefined) {
        const nextVal = inputQueue.length > 0 ? inputQueue.shift()! : "";
        options.onOutput?.(nextVal + "\n");
        executionStart = Date.now();
        return Promise.resolve(nextVal);
      }
      // Интерактивный ввод
      if (options.onInput) {
        return options.onInput(promptText).then((typed) => {
          executionStart = Date.now();
          return typed;
        });
      }
      return Promise.resolve("");
    },
    inputfunTakesPrompt: true,
    __future__: Sk.python3,
  });

  // 1. Инициализация VFS: open() и FileNotFoundError
  let vfsModule: any = null;
  try {
    vfsModule = await Sk.misceval.asyncToPromise(() =>
      Sk.importModule("_vfs", false, true)
    );
    Sk.builtins.open = vfsModule.$d.open;
    Sk.builtins.FileNotFoundError = vfsModule.$d.FileNotFoundError;

    // Загрузка виртуальных файлов в vfs.$d.FILES
    const initialFiles = options.virtualFiles ?? getStoredVirtualFiles();
    vfsModule.$d.FILES = new Sk.builtin.dict([]);
    for (const [fname, fcontent] of Object.entries(initialFiles)) {
      Sk.abstr.objectSetItem(
        vfsModule.$d.FILES,
        new Sk.builtin.str(fname),
        new Sk.builtin.str(fcontent)
      );
    }
  } catch (vfsErr) {
    console.warn("VFS init error:", vfsErr);
  }

  // 2. Сброс состояния виджетов Tkinter и очереди звуков Pygame перед каждым запуском
  try {
    const tkMod = Sk.sysmodules
      ? Sk.sysmodules.quick$lookup(new Sk.builtin.str("tkinter"))
      : null;
    if (tkMod && tkMod.$d) {
      tkMod.$d.WIDGETS = new Sk.builtin.list([]);
      tkMod.$d.LOG = new Sk.builtin.list([]);
      tkMod.$d.AFTER_QUEUE = new Sk.builtin.list([]);
    }
    const pgMod = Sk.sysmodules
      ? Sk.sysmodules.quick$lookup(new Sk.builtin.str("pygame"))
      : null;
    if (pgMod && pgMod.$d && pgMod.$d.mixer && pgMod.$d.mixer.$d) {
      pgMod.$d.mixer.$d._sound_queue = new Sk.builtin.list([]);
    }
  } catch {}

  const fullCode = options.testCode ? code + "\n" + options.testCode : code;

  const extractVirtualFiles = (): Record<string, string> => {
    let result: Record<string, string> = {};
    if (vfsModule && vfsModule.$d && vfsModule.$d.FILES) {
      try {
        const remapped = Sk.ffi.remapToJs(vfsModule.$d.FILES);
        if (remapped && typeof remapped === "object") {
          result = remapped;
          if (options.persistFiles !== false) {
            saveStoredVirtualFiles(result);
          }
          options.onFilesChanged?.(result);
        }
      } catch (remapErr) {
        console.warn("Remap VFS files warning:", remapErr);
      }
    }
    return result;
  };

  try {
    await Sk.misceval.asyncToPromise(
      () => Sk.importMainWithBody("<stdin>", false, fullCode, true),
      {
        "*": (susp: any) => {
          if (options.isStopped?.()) {
            throw new Error("🛑 Остановлено пользователем");
          }
          if (exceededLineLimit || outputLineCount > MAX_OUTPUT_LINES) {
            throw new Error(TOO_MANY_LINES_MESSAGE);
          }
          if (susp && susp.data && susp.data.type === "Sk.promise") {
            return;
          }
          if (Date.now() - executionStart > timeoutMs) {
            throw new Error(TIMEOUT_ERROR_MESSAGE);
          }
        },
      }
    );

    const files = extractVirtualFiles();

    return {
      success: true,
      output: outputText,
      logs,
      files,
    };
  } catch (err: any) {
    const files = extractVirtualFiles();
    let rawMsg = err.toString ? err.toString() : String(err);
    if (
      exceededLineLimit ||
      outputLineCount > MAX_OUTPUT_LINES ||
      rawMsg.includes("слишком много строк")
    ) {
      rawMsg = TOO_MANY_LINES_MESSAGE;
    }
    const lineMatch =
      rawMsg.match(/line\s+(\d+)/i) || rawMsg.match(/строка\s+(\d+)/i);
    const errorLine = lineMatch ? parseInt(lineMatch[1], 10) : undefined;
    return {
      success: false,
      output: outputText,
      logs,
      files,
      error: rawMsg,
      errorLine,
    };
  }
}

// Удаление комментариев и строк для анализа синтаксиса
export function stripCommentsAndStrings(pythonCode: string): string {
  let s = pythonCode
    .replace(/"""[\s\S]*?"""/g, '""')
    .replace(/'''[\s\S]*?'''/g, "''");
  s = s
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/'(?:\\.|[^'\\])*'/g, "''");
  s = s.replace(/#.*$/gm, "");
  return s;
}

// Нормализация вывода (построчно без пробелов в конце)
export function normalizeOutput(out: string): string {
  return out
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

/**
 * 6. Полная проверка решения урока:
 * - проверка совпадения со стартовым кодом
 * - проверка синтаксиса кода без комментариев и строк
 * - прогон всех тестов с inputs и сравнение с expected
 */
export async function validateLessonSolution(
  lesson: {
    exercise: {
      starterCode: string;
      tests: { inputs: string[]; expected: string }[];
      testCode?: string;
      codeCheck?: (
        cleanCode: string,
        rawCode: string
      ) => { passed: boolean; message: string; hint?: string } | null;
      hint: string;
    };
  },
  studentCode: string
): Promise<TaskValidationResult> {
  const trimmedCode = studentCode.trim();
  const trimmedStarter = lesson.exercise.starterCode.trim();

  // Если код совпадает со стартовым
  if (trimmedCode === trimmedStarter || trimmedCode === "") {
    return {
      passed: false,
      message: "Ты ещё ничего не изменил.",
      hint: "Напиши код решения задачи в редакторе.",
    };
  }

  // Проверка синтаксиса кода с удалением комментариев и строковых литералов
  const cleanCode = stripCommentsAndStrings(studentCode);
  if (lesson.exercise.codeCheck) {
    const checkRes = lesson.exercise.codeCheck(cleanCode, studentCode);
    if (checkRes && !checkRes.passed) {
      return checkRes;
    }
  }

  // Прогон всех тестов
  for (let idx = 0; idx < lesson.exercise.tests.length; idx++) {
    const test = lesson.exercise.tests[idx];
    const execResult = await runPython(studentCode, {
      inputs: test.inputs,
      testCode: lesson.exercise.testCode,
    });

    if (!execResult.success) {
      return {
        passed: false,
        message: `Ошибка при выполнении: ${execResult.error}`,
        hint: "Проверь правильность синтаксиса и отступов.",
      };
    }

    const actual = normalizeOutput(execResult.output);
    const expected = normalizeOutput(test.expected);

    if (actual !== expected) {
      const inputsStr =
        test.inputs.length > 0 ? test.inputs.join(", ") : "(нет ввода)";
      return {
        passed: false,
        message:
          `Тест ${idx + 1} не пройден.\n` +
          `Ввели: ${inputsStr}\n` +
          `Ждали:\n${expected}\n` +
          `Получилось:\n${actual}`,
        hint: lesson.exercise.hint,
      };
    }
  }

  return {
    passed: true,
    message: "Все тесты успешно пройдены!",
  };
}
