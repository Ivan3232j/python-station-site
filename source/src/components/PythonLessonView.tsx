import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Square,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Target,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Copy,
  Terminal,
  CornerDownLeft,
  Code2,
  Check,
  FolderOpen,
  Trash2,
  Mail,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { PythonLesson, getAllLessons } from "../data/pythonCurriculum";
import { PythonCodeEditor } from "./PythonCodeEditor";
import { PythonHandbook } from "./PythonHandbook";
import { playWinSound, playSnapSound, playBumpSound } from "../utils/audio";
import {
  runPython,
  validateLessonSolution,
  getStoredVirtualFiles,
  clearStoredVirtualFiles,
} from "../utils/pythonRunner";
import { VirtualFilesModal } from "./VirtualFilesModal";
import { TkPreview, extractTkinterState } from "./TkPreview";

interface PythonLessonViewProps {
  lesson: PythonLesson;
  isSolved: boolean;
  onSolveLesson: (lessonId: string) => void;
  onSelectLesson: (lessonId: string) => void;
  onBackToCourse: () => void;
  onOpenSandboxWithCode?: (code: string) => void;
}

export const PythonLessonView: React.FC<PythonLessonViewProps> = ({
  lesson,
  isSolved,
  onSolveLesson,
  onSelectLesson,
  onBackToCourse,
  onOpenSandboxWithCode,
}) => {
  const [code, setCode] = useState<string>(lesson.exercise.starterCode);
  const [terminalOutput, setTerminalOutput] = useState<string>("Готов к запуску кода.\n");
  const [running, setRunning] = useState(false);
  const [waitingInput, setWaitingInput] = useState<{ resolve: (val: string) => void } | null>(null);
  const [inputVal, setInputVal] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<{
    status: "none" | "success" | "error";
    message: string;
    hint?: string;
  }>({ status: "none", message: "" });
  const [showHandbookModal, setShowHandbookModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [vfsFileCount, setVfsFileCount] = useState<number>(() =>
    typeof window !== "undefined" ? Object.keys(getStoredVirtualFiles()).length : 0
  );

  const updateVfsCount = () => {
    setVfsFileCount(Object.keys(getStoredVirtualFiles()).length);
  };
  const [tkActive, setTkActive] = useState<boolean>(false);

  // Состояние сворачивания разделов: по умолчанию открыт только первый («Простыми словами»)
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    summary: true,
    steps: false,
    mistakes: false,
    quiz: false,
    cheatsheet: false,
    exercise: false,
  });

  // Состояние ответов на квиз: { [questionIndex]: selectedOptionIndex }
  const [quizAnswers, setQuizAnswers] = useState<{ [qIndex: number]: number }>({});

  // Выполнение примеров прямо в карточках шагов и ошибок
  const [inlineSnippetOutputs, setInlineSnippetOutputs] = useState<{
    [key: string]: { running: boolean; output: string };
  }>({});

  const runInlineSnippet = async (key: string, snippetCode: string) => {
    setInlineSnippetOutputs((prev) => ({
      ...prev,
      [key]: { running: true, output: "" },
    }));
    let buffer = "";
    try {
      const res = await runPython(snippetCode, {
        onOutput: (text) => {
          buffer += text;
          setInlineSnippetOutputs((prev) => ({
            ...prev,
            [key]: { running: true, output: buffer },
          }));
        },
      });
      setInlineSnippetOutputs((prev) => ({
        ...prev,
        [key]: {
          running: false,
          output: res.success
            ? res.output || buffer || "(программа выполнилась без вывода)"
            : `${res.output || buffer}${res.output || buffer ? "\n" : ""}❌ ${res.error}`,
        },
      }));
    } catch (err: any) {
      const errMsg = err?.message || String(err);
      setInlineSnippetOutputs((prev) => ({
        ...prev,
        [key]: {
          running: false,
          output: buffer ? `${buffer}\n${errMsg}` : errMsg,
        },
      }));
    }
  };

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleQuizSelect = (qIndex: number, optIndex: number, correctIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    if (optIndex === correctIndex) {
      playSnapSound();
    } else {
      playBumpSound();
    }
  };

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);
  const runningRef = useRef(false);

  // Буфер терминала: не вызывать setTerminalOutput на каждый print, обновлять не чаще 100 мс
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
      flushTimerRef.current = setTimeout(
        flushTerminal,
        Math.max(10, 100 - (now - lastFlushRef.current))
      );
    }
  };

  useEffect(() => {
    return () => {
      if (flushTimerRef.current) clearTimeout(flushTimerRef.current);
    };
  }, []);

  // When lesson changes, reset code to starterCode or localStorage if saved, and scroll page to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const saved = localStorage.getItem(`code_${lesson.id}`);
    setCode(saved !== null ? saved : lesson.exercise.starterCode);
    flushTerminal();
    outputBufferRef.current = "";
    setTerminalOutput("Готов к запуску кода.\n");
    setValidationResult({ status: "none", message: "" });
    setShowHint(false);
    setShowSolution(false);
    setTkActive(false);
    setOpenSections({
      summary: true,
      steps: false,
      mistakes: false,
      quiz: false,
      cheatsheet: false,
      exercise: false,
    });
    setQuizAnswers({});
    setInlineSnippetOutputs({});
  }, [lesson.id]);

  // Save current lesson code to localStorage
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem(`code_${lesson.id}`, newCode);
  };

  // Вставить код примера в редактор
  const insertCodeIntoEditor = (snippet: string) => {
    handleCodeChange(snippet);
    playSnapSound();
  };

  // Скопировать код
  const copySnippet = (key: string, snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedKey(key);
    playSnapSound();
    setTimeout(() => setCopiedKey(null), 1800);
  };

  // Scroll only the internal terminal container to bottom, never the page window
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [terminalOutput, waitingInput]);

  // Focus input when input() is called
  useEffect(() => {
    if (waitingInput) {
      setTimeout(() => inputFieldRef.current?.focus(), 50);
    }
  }, [waitingInput]);

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

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

  // Run code in terminal
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

  // Run code and check task requirements
  const checkSolution = async () => {
    if (running) stopExecution();
    setTkActive(false);

    playSnapSound();
    runningRef.current = true;
    setRunning(true);
    outputBufferRef.current = "";
    lastFlushRef.current = Date.now();
    setTerminalOutput("🔍 Проверка решения...\n");

    try {
      const result = await validateLessonSolution(lesson, code);

      if (result.passed) {
        setValidationResult({
          status: "success",
          message: result.message,
        });
        appendOutput("\n✅ " + result.message + "\n", true);
        playWinSound();
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
        });
        onSolveLesson(lesson.id);
      } else {
        setValidationResult({
          status: "error",
          message: result.message,
          hint: result.hint,
        });
        appendOutput(`\n❌ ${result.message}\n`, true);
        playBumpSound();
      }
    } catch (err: any) {
      const msg = err.toString ? err.toString() : String(err);
      appendOutput(`\n❌ Ошибка при проверке: ${msg}\n`, true);
      setValidationResult({
        status: "error",
        message: `Проверка завершилась с ошибкой: ${msg}`,
        hint: "Проверь синтаксис, закрывающие кавычки, двоеточия и отступы.",
      });
      playBumpSound();
    } finally {
      flushTerminal();
      runningRef.current = false;
      setRunning(false);
      setWaitingInput(null);
    }
  };

  const resetToStarter = () => {
    if (confirm("Сбросить код к начальному шаблону урока?")) {
      handleCodeChange(lesson.exercise.starterCode);
      setValidationResult({ status: "none", message: "" });
    }
  };

  // ---------- Лонгрид: оглавление и навигация ----------
  const practiceRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("intro");

  const hasSteps = !!lesson.theory.steps && lesson.theory.steps.length > 0;
  const hasSections = !hasSteps && !!lesson.theory.sections && lesson.theory.sections.length > 0;
  const hasMistakes =
    (!!lesson.theory.mistakes && lesson.theory.mistakes.length > 0) ||
    (!!lesson.theory.commonMistakes && lesson.theory.commonMistakes.length > 0);
  const hasQuiz = !!lesson.theory.quiz && lesson.theory.quiz.length > 0;
  const cheatLines =
    lesson.theory.cheatsheet && lesson.theory.cheatsheet.length > 0
      ? lesson.theory.cheatsheet
      : lesson.theory.tips || [];

  const toc: { id: string; label: string }[] = [
    ...(lesson.theory.story ? [{ id: "story", label: "Сюжет" }] : []),
    { id: "summary", label: "Простыми словами" },
    ...(hasSteps || hasSections ? [{ id: "steps", label: "Разбор по шагам" }] : []),
    ...(hasMistakes ? [{ id: "mistakes", label: "Частые ошибки" }] : []),
    ...(hasQuiz ? [{ id: "quiz", label: "Проверь себя" }] : []),
    ...(cheatLines.length > 0 ? [{ id: "cheatsheet", label: "Шпаргалка" }] : []),
    { id: "practice", label: "Практика" },
  ];

  useEffect(() => {
    const els = toc
      .map((t) => document.getElementById(`sec-${t.id}`))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id.replace("sec-", ""));
      },
      { rootMargin: "-90px 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  const scrollToSection = (id: string) => {
    document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Вставить пример в редактор практики и прокрутить к нему
  const sendToPractice = (snippet: string) => {
    insertCodeIntoEditor(snippet);
    setTimeout(() => {
      practiceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  };

  const hideInlineOutput = (key: string) =>
    setInlineSnippetOutputs((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });

  // Блок кода в стиле лонгрида: шапка с кнопками, подсветка, вывод под кодом
  const renderCodeBlock = (opts: {
    id: string;
    code: string;
    label?: string;
    tone?: "default" | "wrong" | "fixed";
    expected?: string;
    canInsert?: boolean;
  }) => {
    const { id, code: snippet, label, tone = "default", expected, canInsert = true } = opts;
    const run = inlineSnippetOutputs[id];
    const toneBorder =
      tone === "wrong"
        ? "border-[#D4126C]/60"
        : tone === "fixed"
        ? "border-[#0A7A50]/60"
        : "border-[#2C2C3A]";
    const toneLabel =
      tone === "wrong" ? "text-[#FF85A1]" : tone === "fixed" ? "text-[#4FF0A7]" : "text-[#8E8EA0]";

    return (
      <div className={`rounded-2xl overflow-hidden border ${toneBorder} bg-[#16161F] shadow-sm`}>
        <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-[#2C2C3A] bg-[#1C1C28]">
          <span className={`text-[12px] font-bold uppercase tracking-wider ${toneLabel}`}>
            {label || "Python"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => runInlineSnippet(id, snippet)}
              disabled={run?.running}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A7A50] hover:bg-[#0C9663] text-white text-[12px] font-bold transition-colors cursor-pointer disabled:opacity-50"
              title="Запустить этот пример прямо здесь"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{run?.running ? "Запуск..." : "Запустить"}</span>
            </button>
            {canInsert && (
              <button
                onClick={() => sendToPractice(snippet)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-bold transition-colors cursor-pointer"
                title="Вставить код в редактор практики"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
                <span>В редактор</span>
              </button>
            )}
            <button
              onClick={() => copySnippet(id, snippet)}
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-[#A6A6B8] hover:text-white hover:bg-white/10 text-[12px] font-bold transition-colors cursor-pointer"
              title="Скопировать код"
            >
              {copiedKey === id ? <Check className="w-3.5 h-3.5 text-[#4FF0A7]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <pre className="px-5 py-4 text-[14px] leading-[1.7] text-[#E3E3E9] overflow-x-auto whitespace-pre select-text">
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(snippet, Prism.languages.python, "python"),
            }}
          />
        </pre>

        {run ? (
          <div className="border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#4FF0A7] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Вывод
              </span>
              <button
                onClick={() => hideInlineOutput(id)}
                className="text-[#8E8EA0] hover:text-white normal-case tracking-normal cursor-pointer"
              >
                Скрыть
              </button>
            </div>
            <pre
              className={`text-[13.5px] leading-relaxed whitespace-pre-wrap select-text ${
                tone === "wrong" ? "text-[#FF85A1]" : "text-[#4FF0A7]"
              }`}
            >
              {run.output || "…"}
            </pre>
          </div>
        ) : expected ? (
          <div className="border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8E8EA0] mb-1.5">
              Результат
            </div>
            <pre className="text-[13.5px] leading-relaxed text-[#4FF0A7] whitespace-pre-wrap select-text">
              {expected}
            </pre>
          </div>
        ) : null}
      </div>
    );
  };

  const sectionTitle = (id: string, num: number, title: string, Icon: any, color: string) => (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}1A`, color }}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-[22px] md:text-[26px] font-black text-[#0B0B0F] leading-tight">
        <span className="text-[#A6A6B8] mr-2">{num}.</span>
        {title}
      </h2>
    </div>
  );

  let secNum = 0;

  return (
    <div className="font-mono">
      {/* Handbook Modal Dialog */}
      {showHandbookModal && (
        <PythonHandbook
          isModal
          onClose={() => setShowHandbookModal(false)}
          onInsertCode={(snippet) => {
            handleCodeChange(code + "\n" + snippet);
            setShowHandbookModal(false);
          }}
          onOpenInSandbox={onOpenSandboxWithCode}
        />
      )}

      <div className="max-w-[1240px] mx-auto px-4 md:px-6 pt-6 xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-10">
        {/* ---------- Оглавление (широкие экраны) ---------- */}
        <aside className="hidden xl:block">
          <nav className="sticky top-24 space-y-1">
            <button
              onClick={onBackToCourse}
              className="flex items-center gap-1.5 mb-4 text-[12.5px] font-bold text-[#63636E] hover:text-[#0A54C4] cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Все уроки
            </button>
            <div className="text-[11px] font-black uppercase tracking-wider text-[#A6A6B8] mb-2">
              В этом уроке
            </div>
            {toc.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollToSection(t.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-bold border-l-2 transition-all cursor-pointer ${
                  activeSection === t.id
                    ? "border-[#5636E0] bg-white text-[#0B0B0F] shadow-xs"
                    : "border-transparent text-[#63636E] hover:text-[#0B0B0F] hover:bg-white/60"
                } ${t.id === "practice" ? "mt-2 text-[#D4126C]" : ""}`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          {/* ---------- Шапка урока ---------- */}
          <header className="max-w-[820px] mx-auto pb-8 border-b border-[#E3E3E9]">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
              <button
                onClick={onBackToCourse}
                className="xl:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Все уроки
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setShowHandbookModal(true)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]"
                  title="Открыть справочник функций"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Справочник</span>
                </button>
                <button
                  disabled={!prevLesson}
                  onClick={() => prevLesson && onSelectLesson(prevLesson.id)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed"
                  title="Предыдущий урок"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  disabled={!nextLesson}
                  onClick={() => nextLesson && onSelectLesson(nextLesson.id)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed"
                  title="Следующий урок"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[12.5px] font-bold text-[#63636E]">
                Урок {currentIndex + 1} из {allLessons.length}
              </span>
              {isSolved && (
                <span className="inline-flex items-center gap-1 text-[11.5px] font-extrabold px-2 py-0.5 rounded-md bg-[#0A7A50]/15 text-[#0A7A50]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Пройден
                </span>
              )}
            </div>
            <h1 className="text-[28px] md:text-[38px] font-black text-[#0B0B0F] leading-[1.15]">
              {lesson.title}
            </h1>
            <button
              onClick={() => scrollToSection("practice")}
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#D4126C] hover:underline cursor-pointer"
            >
              <Target className="w-4 h-4" />
              Сразу к практике
              <ChevronDown className="w-4 h-4" />
            </button>
          </header>

          <div className="max-w-[820px] mx-auto">
            {/* ---------- Сюжет ---------- */}
            {lesson.theory.story && (
              <section id="sec-story" className="scroll-mt-24 pt-10">
                <div className="bg-gradient-to-br from-[#1C1C28] to-[#121218] text-white rounded-2xl p-5 md:p-7 border border-[#2D2D3D] shadow-md space-y-5">
                  {lesson.theory.story.letter && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-[#FED766]">
                        <Mail className="w-4 h-4" />
                        <span>Входящее сообщение: Заказчик</span>
                      </div>
                      <div className="text-[14.5px] leading-[1.75] text-[#E3E3E9] whitespace-pre-line border-l-2 border-[#FED766] pl-4">
                        {lesson.theory.story.letter}
                      </div>
                    </div>
                  )}

                  {lesson.theory.story.task && (
                    <div className="flex items-start gap-3 text-[14px] leading-relaxed text-[#C9C9D3] bg-[#1A1A26] p-4 rounded-xl border border-[#2E2E40]">
                      <Target className="w-5 h-5 text-[#4FF0A7] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white">Задача на день: </span>
                        {lesson.theory.story.task}
                      </div>
                    </div>
                  )}

                  {lesson.theory.story.quotes && lesson.theory.story.quotes.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-[11.5px] font-black uppercase tracking-wider text-[#8E8EA0] flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-[#A5B4FC]" />
                        <span>Реплики команды ProTeam</span>
                      </div>
                      {lesson.theory.story.quotes.map((q, idx) => (
                        <div key={idx} className="text-[14px] leading-relaxed">
                          <span className="font-bold text-[#A5B4FC]">{q.speaker}: </span>
                          <span className="text-[#E3E3E9] italic">«{q.text}»</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ---------- 1. Простыми словами ---------- */}
            <section id="sec-summary" className="scroll-mt-24 pt-12">
              {sectionTitle("summary", ++secNum, "Простыми словами", BookOpen, "#0A54C4")}
              <div className="space-y-5 text-[15.5px] leading-[1.8] text-[#22222B]">
                {lesson.theory.summary.split("\n\n").map((para, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>

              {lesson.theory.keyRule && (
                <div className="mt-7 bg-gradient-to-br from-[#0A54C4]/10 to-[#5636E0]/10 border-l-4 border-[#5636E0] rounded-r-2xl p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[12px] font-black uppercase tracking-wider text-[#5636E0]">
                    <Sparkles className="w-4 h-4" />
                    <span>Главное правило</span>
                  </div>
                  <div className="text-[15px] font-bold text-[#0B0B0F] leading-relaxed">
                    {lesson.theory.keyRule}
                  </div>
                </div>
              )}
            </section>

            {/* ---------- 2. Разбор по шагам ---------- */}
            {(hasSteps || hasSections) && (
              <section id="sec-steps" className="scroll-mt-24 pt-14">
                {sectionTitle("steps", ++secNum, "Разбор по шагам", Code2, "#0A7A50")}
                <div className="space-y-12">
                  {hasSteps &&
                    lesson.theory.steps!.map((st, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="flex items-center gap-2.5 text-[17px] font-black text-[#0B0B0F]">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0A7A50] text-white text-[13px]">
                            {idx + 1}
                          </span>
                          Шаг {idx + 1}
                        </h3>
                        <p className="text-[15.5px] leading-[1.8] text-[#22222B]">
                          {st.explanation.replace(/^\s*Шаг\s*\d+\s*[.:)]\s*/i, "")}
                        </p>
                        {renderCodeBlock({
                          id: `step_${idx}`,
                          code: st.code,
                          label: `Пример ${idx + 1}`,
                          expected: st.output,
                        })}
                      </div>
                    ))}

                  {hasSections &&
                    lesson.theory.sections.map((sec, i) => (
                      <div key={i} className="space-y-4">
                        <h3 className="text-[18px] font-black text-[#0B0B0F]">{sec.heading}</h3>
                        <p className="text-[15.5px] leading-[1.8] text-[#22222B] whitespace-pre-line">
                          {sec.text}
                        </p>
                        {sec.codeExample && (
                          <>
                            {renderCodeBlock({
                              id: `sec_${i}`,
                              code: sec.codeExample.code,
                              label: sec.codeExample.title,
                            })}
                            {sec.codeExample.explanation && (
                              <p className="text-[14.5px] leading-[1.75] text-[#44444F]">
                                {sec.codeExample.explanation}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </section>
            )}

            {/* ---------- 3. Частые ошибки ---------- */}
            {hasMistakes && (
              <section id="sec-mistakes" className="scroll-mt-24 pt-14">
                {sectionTitle("mistakes", ++secNum, "Частые ошибки", AlertTriangle, "#D4126C")}
                {lesson.theory.mistakes && lesson.theory.mistakes.length > 0 ? (
                  <div className="space-y-12">
                    {lesson.theory.mistakes.map((m, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-[17px] font-black text-[#0B0B0F]">Ошибка {idx + 1}</h3>
                        {renderCodeBlock({
                          id: `mistake_wrong_${idx}`,
                          code: m.wrongCode,
                          label: "❌ Код с ошибкой",
                          tone: "wrong",
                        })}
                        <div className="bg-[#1C0008] border border-[#D4126C]/50 rounded-xl px-5 py-3 text-[13.5px] leading-relaxed text-[#FF85A1]">
                          <span className="text-[#FFA3B9] font-bold block mb-1 text-[11px] uppercase tracking-wider">
                            Ошибка в консоли
                          </span>
                          <span className="whitespace-pre-wrap">{m.error}</span>
                        </div>
                        <p className="text-[15.5px] leading-[1.8] text-[#22222B]">{m.explanation}</p>
                        {renderCodeBlock({
                          id: `mistake_fixed_${idx}`,
                          code: m.fixedCode,
                          label: "✅ Как исправить",
                          tone: "fixed",
                        })}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {lesson.theory.commonMistakes!.map((err, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-[#22222B]"
                      >
                        <AlertTriangle className="w-4 h-4 text-[#D4126C] shrink-0 mt-1.5" />
                        <span>{err}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* ---------- 4. Проверь себя ---------- */}
            {hasQuiz && (
              <section id="sec-quiz" className="scroll-mt-24 pt-14">
                {sectionTitle("quiz", ++secNum, "Проверь себя", CheckCircle2, "#5636E0")}
                <div className="space-y-8">
                  {lesson.theory.quiz!.map((q, qIdx) => {
                    const selected = quizAnswers[qIdx];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === q.correct;

                    return (
                      <div
                        key={qIdx}
                        className="bg-white border border-[#E3E3E9] rounded-2xl p-5 md:p-6 space-y-4 shadow-xs"
                      >
                        <div className="flex items-center justify-between text-[12.5px] font-bold">
                          <span className="text-[#5636E0]">
                            Вопрос {qIdx + 1} из {lesson.theory.quiz!.length}
                          </span>
                          <span className="text-[#63636E]">Что выведет этот код?</span>
                        </div>

                        <pre className="bg-[#16161F] text-[#E3E3E9] px-5 py-4 rounded-xl text-[14px] leading-[1.7] overflow-x-auto whitespace-pre">
                          <code
                            dangerouslySetInnerHTML={{
                              __html: Prism.highlight(q.code, Prism.languages.python, "python"),
                            }}
                          />
                        </pre>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            let optClass =
                              "w-full text-left px-4 py-3 rounded-xl text-[14px] border-[1.5px] transition-all cursor-pointer flex items-center justify-between gap-2 whitespace-pre-wrap ";
                            if (!isAnswered) {
                              optClass +=
                                "bg-white hover:bg-[#F1F1F4] hover:border-[#5636E0]/50 border-[#E3E3E9] text-[#0B0B0F]";
                            } else if (optIdx === q.correct) {
                              optClass += "bg-[#0A7A50]/10 border-[#0A7A50] text-[#0A7A50] font-bold";
                            } else if (selected === optIdx && !isCorrect) {
                              optClass += "bg-[#D4126C]/10 border-[#D4126C] text-[#D4126C] font-bold";
                            } else {
                              optClass += "bg-white border-[#E3E3E9] opacity-50 text-[#8E8EA0]";
                            }
                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizSelect(qIdx, optIdx, q.correct)}
                                className={optClass}
                              >
                                <span>{opt}</span>
                                {isAnswered && optIdx === q.correct && (
                                  <Check className="w-4 h-4 shrink-0" />
                                )}
                                {isAnswered && selected === optIdx && !isCorrect && (
                                  <XCircle className="w-4 h-4 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div
                            className={`p-4 rounded-xl text-[14px] leading-relaxed border ${
                              isCorrect
                                ? "bg-[#F0FFF6] border-[#0A7A50]/30 text-[#0A5A3C]"
                                : "bg-[#FFF0F5] border-[#D4126C]/30 text-[#A00E52]"
                            }`}
                          >
                            <span className="font-bold block mb-1">
                              {isCorrect ? "🎉 Правильно!" : "Почти! Обрати внимание:"}
                            </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ---------- 5. Шпаргалка ---------- */}
            {cheatLines.length > 0 && (
              <section id="sec-cheatsheet" className="scroll-mt-24 pt-14">
                {sectionTitle("cheatsheet", ++secNum, "Шпаргалка", Lightbulb, "#B0700C")}
                <div className="bg-[#FFFBF0] border border-[#B0700C]/25 rounded-2xl p-5 md:p-6 space-y-3">
                  {cheatLines.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#22222B]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B0700C] mt-2.5 shrink-0" />
                      <span className="whitespace-pre-wrap">{line}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ---------- Практика (широкий блок) ---------- */}
          <section id="sec-practice" ref={practiceRef} className="scroll-mt-20 pt-16">
            <div className="max-w-[820px] mx-auto">
              {sectionTitle("practice", ++secNum, "Практика", Target, "#D4126C")}
            </div>

            <div className="space-y-5">
              {/* Условие */}
              <div>
                <div className="bg-white border-2 border-[#D4126C]/30 rounded-2xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xs">
                  <div>
                    <div className="text-[11.5px] font-black uppercase tracking-wider text-[#D4126C] mb-2">
                      Условие задачи
                    </div>
                    <div className="text-[14.5px] leading-[1.75] text-[#0B0B0F] whitespace-pre-line">
                      {lesson.exercise.task}
                    </div>
                  </div>

                  <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11.5px] font-black uppercase tracking-wider text-[#63636E]">
                      Критерии проверки
                    </div>
                    {lesson.exercise.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#0B0B0F]">
                        <div className="w-5 h-5 rounded-full border-[1.5px] border-[#0A54C4] text-[#0A54C4] flex items-center justify-center text-[10.5px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border border-[#E3E3E9] rounded-xl overflow-hidden">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7FA] hover:bg-[#E3E3E9] text-left text-[13px] font-bold text-[#0B0B0F] flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-[#B0700C]" />
                        Нужна подсказка?
                      </span>
                      <span className="text-[11.5px] text-[#63636E]">{showHint ? "Скрыть" : "Показать"}</span>
                    </button>
                    {showHint && (
                      <div className="p-3.5 bg-white text-[13.5px] leading-relaxed text-[#44444F] border-t border-[#E3E3E9] whitespace-pre-line">
                        💡 {lesson.exercise.hint}
                      </div>
                    )}
                  </div>

                  {isSolved && (
                    <div className="border border-[#0A7A50]/30 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setShowSolution(!showSolution)}
                        className="w-full px-3.5 py-2.5 bg-[#0A7A50]/10 hover:bg-[#0A7A50]/20 text-left text-[13px] font-bold text-[#0A7A50] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          Авторский вариант решения
                        </span>
                        <span className="text-[11.5px]">{showSolution ? "Скрыть" : "Показать"}</span>
                      </button>
                      {showSolution && (
                        <pre className="px-4 py-3 bg-[#16161F] text-[#E3E3E9] text-[13px] leading-relaxed border-t border-[#0A7A50]/30 overflow-x-auto whitespace-pre">
                          <code
                            dangerouslySetInnerHTML={{
                              __html: Prism.highlight(lesson.exercise.solution, Prism.languages.python, "python"),
                            }}
                          />
                        </pre>
                      )}
                    </div>
                  )}

                  <button
                    onClick={resetToStarter}
                    className="text-[12px] font-bold text-[#63636E] hover:text-[#D4126C] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Сбросить код к начальному
                  </button>
                  </div>
                </div>
              </div>

              {/* Редактор и терминал */}
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-5 items-start">
                <div className="bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#0A54C4]" />
                      <span>Редактор Python 3</span>
                    </div>
                    <div className="text-[11px] font-bold normal-case tracking-normal">
                      Запуск: <kbd className="px-1.5 py-0.5 rounded bg-[#F1F1F4] border border-[#E3E3E9]">Ctrl+Enter</kbd>
                    </div>
                  </div>

                  <PythonCodeEditor
                    value={code}
                    onChange={handleCodeChange}
                    onRun={runCode}
                    placeholder="# Напиши решение на Python 3..."
                    rows={16}
                  />

                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      onClick={runCode}
                      disabled={running && !waitingInput}
                      className="flex-1 min-w-[140px] bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold rounded-xl py-3 px-4 text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#E3E3E9]"
                    >
                      <Play className="w-4 h-4 fill-current text-[#0A54C4]" />
                      Запустить код
                    </button>
                    <button
                      onClick={checkSolution}
                      disabled={running}
                      className="flex-1 min-w-[180px] bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-5 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Проверить решение
                    </button>
                    {running && (
                      <button
                        onClick={stopExecution}
                        className="border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]"
                      >
                        <Square className="w-4 h-4 fill-current" />
                        Стоп
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4 min-w-0 lg:sticky lg:top-24">
                {validationResult.status === "success" && (
                  <div className="bg-[#0A7A50]/15 border-2 border-[#0A7A50] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-[#0A7A50] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-[15px] font-black text-[#0A7A50]">Задание решено верно!</h4>
                      <p className="text-[13.5px] text-[#0B0B0F] leading-relaxed">{validationResult.message}</p>
                    </div>
                  </div>
                )}

                {validationResult.status === "error" && (
                  <div className="bg-[#D4126C]/10 border-2 border-[#D4126C] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-[#D4126C] text-white flex items-center justify-center shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-[15px] font-black text-[#D4126C]">Пока не сошлось</h4>
                      <p className="text-[13.5px] text-[#0B0B0F] leading-relaxed">{validationResult.message}</p>
                      {validationResult.hint && (
                        <div className="text-[12.5px] text-[#44444F] bg-white p-3 rounded-lg border border-[#E3E3E9] mt-2 leading-relaxed">
                          💡 Подсказка: {validationResult.hint}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#0A7A50]" />
                      <span>Терминал</span>
                    </div>
                    <div className="flex items-center gap-2.5 normal-case tracking-normal">
                      <button
                        onClick={() => setShowFilesModal(true)}
                        className="text-[11.5px] text-[#0A54C4] hover:underline flex items-center gap-1 font-bold cursor-pointer"
                        title="Показать виртуальные файлы"
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        Файлы{vfsFileCount > 0 ? ` (${vfsFileCount})` : ""}
                      </button>
                      {vfsFileCount > 0 && (
                        <button
                          onClick={() => {
                            if (window.confirm("Очистить все виртуальные файлы?")) {
                              clearStoredVirtualFiles();
                              updateVfsCount();
                            }
                          }}
                          className="text-[11px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold"
                        >
                          <Trash2 className="w-3 h-3" />
                          Очистить файлы
                        </button>
                      )}
                      <button
                        onClick={() => setTerminalOutput("Терминал очищен.\n")}
                        className="text-[11px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer"
                      >
                        Очистить
                      </button>
                    </div>
                  </div>

                  <div
                    ref={terminalContainerRef}
                    className="bg-[#15151D] text-[#E3E3E9] p-4 rounded-xl border border-[#2C2C3A] min-h-[200px] max-h-[360px] overflow-y-auto text-[13px] leading-relaxed"
                  >
                    <div className="whitespace-pre-wrap break-words select-text">
                      {terminalOutput}
                      {waitingInput && (
                        <form onSubmit={handleInputSubmit} className="inline-flex items-center gap-2 mt-1">
                          <span className="text-[#0A7A50] font-bold select-none">&gt;&gt;&gt;</span>
                          <input
                            ref={inputFieldRef}
                            type="text"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            placeholder="Введи значение и нажми Enter..."
                            className="bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12.5px] min-w-[200px]"
                          />
                          <button
                            type="submit"
                            className="px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer"
                          >
                            <CornerDownLeft className="w-3 h-3" />
                            Enter
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                {tkActive && <TkPreview isAlive={tkActive} onStop={() => setTkActive(false)} />}
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Навигация между уроками ---------- */}
          <nav className="max-w-[820px] mx-auto mt-16 pt-8 border-t border-[#E3E3E9] grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prevLesson ? (
              <button
                onClick={() => onSelectLesson(prevLesson.id)}
                className="text-left bg-white border border-[#E3E3E9] hover:border-[#5636E0]/50 rounded-2xl p-4 transition-all cursor-pointer"
              >
                <div className="text-[11.5px] font-bold text-[#63636E] flex items-center gap-1 mb-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Предыдущий урок
                </div>
                <div className="text-[14px] font-black text-[#0B0B0F]">{prevLesson.title}</div>
              </button>
            ) : (
              <div />
            )}
            {nextLesson && (
              <button
                onClick={() => onSelectLesson(nextLesson.id)}
                className={`text-right rounded-2xl p-4 transition-all cursor-pointer border ${
                  isSolved
                    ? "bg-gradient-to-r from-[#0A54C4] to-[#5636E0] text-white border-transparent hover:brightness-110"
                    : "bg-white border-[#E3E3E9] hover:border-[#5636E0]/50"
                }`}
              >
                <div
                  className={`text-[11.5px] font-bold flex items-center justify-end gap-1 mb-1 ${
                    isSolved ? "text-white/80" : "text-[#63636E]"
                  }`}
                >
                  Следующий урок <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className={`text-[14px] font-black ${isSolved ? "text-white" : "text-[#0B0B0F]"}`}>
                  {nextLesson.title}
                </div>
              </button>
            )}
          </nav>
        </article>
      </div>

      <VirtualFilesModal
        isOpen={showFilesModal}
        onClose={() => setShowFilesModal(false)}
        onFilesChanged={updateVfsCount}
      />
    </div>
  );
};
