import React, { useState, useEffect } from "react";
import {
  PYTHON_MODULES,
  findLessonById,
  getAllLessons,
} from "./data/pythonCurriculum";
import { PythonNavbar } from "./components/PythonNavbar";
import { PythonModulesList } from "./components/PythonModulesList";
import { PythonLessonView } from "./components/PythonLessonView";
import { PythonHandbook } from "./components/PythonHandbook";
import { PythonSandboxView } from "./components/PythonSandboxView";
import { toggleSound, isSoundEnabled, playPopSound } from "./utils/audio";
import { loadSkulpt } from "./utils/pythonRunner";

export default function App() {
  // Navigation: "lessons" | "handbook" | "sandbox"
  const [currentTab, setCurrentTab] = useState<"lessons" | "handbook" | "sandbox">("lessons");

  // Active Lesson (null means show Modules Roadmap)
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Local storage of solved lessons
  const [solvedLessons, setSolvedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("python_solved_lessons");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sound enabled
  const [soundOn, setSoundOn] = useState<boolean>(() => isSoundEnabled());

  // Sandbox initial code (for opening from Handbook)
  const [sandboxCode, setSandboxCode] = useState<string | undefined>(undefined);

  // Pre-load Skulpt in background so it's ready instantly
  useEffect(() => {
    loadSkulpt().catch(() => {});
  }, []);

  // Sync solved lessons to localStorage
  const handleSolveLesson = (lessonId: string) => {
    if (!solvedLessons.includes(lessonId)) {
      const updated = [...solvedLessons, lessonId];
      setSolvedLessons(updated);
      try {
        localStorage.setItem("python_solved_lessons", JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
    }
  };

  // Reset progress confirmation
  const handleResetProgress = () => {
    if (confirm("Вы уверены, что хотите сбросить отметки о пройденных уроках?")) {
      setSolvedLessons([]);
      localStorage.removeItem("python_solved_lessons");
      playPopSound();
    }
  };

  const handleToggleSound = () => {
    const newVal = toggleSound();
    setSoundOn(newVal);
  };

  const handleSelectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentTab("lessons");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleBackToCourse = () => {
    setActiveLessonId(null);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleOpenSandboxWithCode = (snippet: string) => {
    setSandboxCode(snippet);
    setCurrentTab("sandbox");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const allLessons = getAllLessons();
  const activeLesson = activeLessonId ? findLessonById(activeLessonId) : null;

  return (
    <div className="min-h-screen bg-[#F1F1F4] text-[#0B0B0F] font-mono flex flex-col">
      {/* Top Navigation Bar */}
      <PythonNavbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== "lessons") {
            // Keep activeLessonId for when returning to lessons, or switch to view
          }
        }}
        solvedCount={solvedLessons.length}
        totalCount={allLessons.length}
        soundEnabled={soundOn}
        onToggleSound={handleToggleSound}
        onResetProgress={handleResetProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-12">
        {/* TAB 1: LESSONS */}
        {currentTab === "lessons" && (
          <>
            {activeLesson ? (
              <PythonLessonView
                lesson={activeLesson}
                isSolved={solvedLessons.includes(activeLesson.id)}
                onSolveLesson={handleSolveLesson}
                onSelectLesson={handleSelectLesson}
                onBackToCourse={handleBackToCourse}
                onOpenSandboxWithCode={handleOpenSandboxWithCode}
              />
            ) : (
              <PythonModulesList
                solvedLessons={solvedLessons}
                onSelectLesson={handleSelectLesson}
                onOpenHandbook={() => setCurrentTab("handbook")}
                onOpenSandbox={() => setCurrentTab("sandbox")}
              />
            )}
          </>
        )}

        {/* TAB 2: PYTHON HANDBOOK & FUNCTIONS SEARCH */}
        {currentTab === "handbook" && (
          <PythonHandbook
            isModal={false}
            onOpenInSandbox={handleOpenSandboxWithCode}
          />
        )}

        {/* TAB 3: PYTHON SANDBOX */}
        {currentTab === "sandbox" && (
          <PythonSandboxView
            initialCode={sandboxCode}
            onOpenHandbook={() => setCurrentTab("handbook")}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E3E3E9] py-5 px-4 text-center text-[11.5px] text-[#63636E] bg-white">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Python Станция · Интерактивная среда обучения Python 3</span>
          <span>Задания и теория настраиваются напрямую в коде программы</span>
        </div>
      </footer>
    </div>
  );
}
