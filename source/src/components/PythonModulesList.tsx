import React from "react";
import {
  CheckCircle2,
  Play,
  BookOpen,
  Code2,
  Terminal,
  Layers,
  Box,
  RotateCcw,
  Cpu,
  Keyboard,
  Hash,
  Calculator,
  GitBranch,
  ListFilter,
  ListOrdered,
  PlusCircle,
  Repeat,
  PlayCircle,
  Search,
  Sparkles,
  Trophy,
  AppWindow,
  Layout,
  MousePointerClick,
  Music,
} from "lucide-react";
import {
  PYTHON_MODULES,
  PythonLesson,
  getAllLessons,
} from "../data/pythonCurriculum";
import { playPopSound } from "../utils/audio";

interface PythonModulesListProps {
  solvedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onOpenHandbook: () => void;
  onOpenSandbox: () => void;
}

// Icon helper
const ICONS_MAP: Record<string, React.ElementType> = {
  Terminal,
  Layers,
  Box,
  RotateCcw,
  Cpu,
  Keyboard,
  Hash,
  Calculator,
  GitBranch,
  ListFilter,
  ListOrdered,
  PlusCircle,
  Repeat,
  PlayCircle,
  Code2,
  AppWindow,
  Layout,
  MousePointerClick,
  Music,
};

export const PythonModulesList: React.FC<PythonModulesListProps> = ({
  solvedLessons,
  onSelectLesson,
  onOpenHandbook,
  onOpenSandbox,
}) => {
  const allLessons = getAllLessons();
  const totalCount = allLessons.length;
  const solvedCount = solvedLessons.length;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  return (
    <div className="max-w-[1360px] mx-auto p-3 md:p-6 space-y-6 font-mono select-none">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-br from-[#0B0B14] via-[#161626] to-[#251A4A] text-white p-6 md:p-8 rounded-3xl border border-[#2C2C3A] shadow-lg relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5636E0]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#0A54C4]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold tracking-wide backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A800]" />
              <span>Интерактивная станция Python 3</span>
            </div>
            <h1 className="text-[24px] md:text-[32px] font-black tracking-tight leading-tight">
              Практический курс Python с нуля
            </h1>
            <p className="text-[13px] md:text-[14px] text-[#A0A0B2] leading-relaxed">
              Теория с живыми примерами и мгновенная проверка кода в браузере. Выполняй задания, получай подсказки и изучай встроенные функции.
            </p>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <button
                onClick={() => {
                  playPopSound();
                  const firstUnsolved = allLessons.find((l) => !solvedLessons.includes(l.id)) || allLessons[0];
                  if (firstUnsolved) onSelectLesson(firstUnsolved.id);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-black text-[13px] flex items-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>
                  {solvedCount === 0 ? "Начать первый урок" : "Продолжить обучение"}
                </span>
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  onOpenHandbook();
                }}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10"
              >
                <Search className="w-4 h-4 text-[#F5A800]" />
                <span>Поиск по функциям</span>
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  onOpenSandbox();
                }}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10"
              >
                <Code2 className="w-4 h-4 text-[#4FF0A7]" />
                <span>Песочница Python</span>
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="w-full md:w-72 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl space-y-3.5">
            <div className="flex items-center justify-between text-[12px] font-bold">
              <span className="flex items-center gap-1.5 text-white/90">
                <Trophy className="w-4 h-4 text-[#F5A800]" />
                <span>Твой прогресс</span>
              </span>
              <span className="text-[#4FF0A7] font-black">{progressPercent}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0A54C4] to-[#4FF0A7] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="text-[11.5px] text-white/70 flex items-center justify-between">
              <span>Решено заданий:</span>
              <strong className="text-white">
                {solvedCount} из {totalCount}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Roadmap Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-black text-[#0B0B0F]">
            Программа уроков
          </h2>
          <span className="text-[12px] font-bold text-[#63636E]">
            {PYTHON_MODULES.length} модулей · {totalCount} уроков с проверкой
          </span>
        </div>

        <div className="space-y-5">
          {PYTHON_MODULES.map((mod, modIdx) => {
            const modSolvedCount = mod.lessons.filter((l) =>
              solvedLessons.includes(l.id)
            ).length;
            const isModComplete = modSolvedCount === mod.lessons.length;

            return (
              <div
                key={mod.id}
                className="bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 md:p-6 shadow-xs space-y-4"
              >
                {/* Module Header */}
                <div className="flex items-center justify-between gap-3 flex-wrap border-b border-[#E3E3E9] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-black text-[15px] shadow-xs"
                      style={{ backgroundColor: mod.color }}
                    >
                      {modIdx + 1}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-black text-[#0B0B0F]">
                        {mod.title}
                      </h3>
                      <p className="text-[12px] text-[#63636E]">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11.5px] font-bold text-[#63636E] bg-[#F1F1F4] px-3 py-1 rounded-lg">
                      {modSolvedCount} / {mod.lessons.length} пройдено
                    </span>
                    {isModComplete && (
                      <span className="text-[11.5px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Завершен
                      </span>
                    )}
                  </div>
                </div>

                {/* Lessons Cards in Module */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mod.lessons.map((lesson) => {
                    const isSolved = solvedLessons.includes(lesson.id);
                    const LessonIcon = ICONS_MAP[lesson.icon] || Code2;

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          playPopSound();
                          onSelectLesson(lesson.id);
                        }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                          isSolved
                            ? "bg-[#F7FBF8] border-[#0A7A50]/30 hover:border-[#0A7A50]"
                            : "bg-[#F7F7FA] border-[#E3E3E9] hover:bg-white hover:border-[#0A54C4] hover:shadow-xs"
                        }`}
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-start justify-between gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#E3E3E9] flex items-center justify-center group-hover:border-[#0A54C4] transition-colors shadow-2xs">
                              <LessonIcon className="w-4 h-4 text-[#0A54C4]" />
                            </div>

                            {isSolved ? (
                              <span className="flex items-center gap-1 text-[11px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2 py-0.5 rounded-md">
                                <CheckCircle2 className="w-3 h-3" />
                                Решено
                              </span>
                            ) : (
                              <span className="text-[10.5px] font-bold text-[#63636E] bg-[#E3E3E9]/60 px-2 py-0.5 rounded-md">
                                Новое
                              </span>
                            )}
                          </div>

                          <div>
                            <h4 className="text-[14px] font-black text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors">
                              {lesson.title}
                            </h4>
                            <p className="text-[12px] text-[#63636E] leading-relaxed mt-1 line-clamp-2">
                              {lesson.shortDesc}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 mt-3 border-t border-[#E3E3E9]/80 flex items-center justify-between text-[11.5px] font-bold text-[#0A54C4] group-hover:underline">
                          <span>{isSolved ? "Повторить урок →" : "Открыть урок →"}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
