import React from "react";
import {
  Code2,
  BookOpen,
  Search,
  Volume2,
  VolumeX,
  RotateCcw,
  Trophy,
  Terminal,
} from "lucide-react";
import { playPopSound } from "../utils/audio";

interface PythonNavbarProps {
  currentTab: "lessons" | "handbook" | "sandbox";
  onSelectTab: (tab: "lessons" | "handbook" | "sandbox") => void;
  solvedCount: number;
  totalCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetProgress: () => void;
}

export const PythonNavbar: React.FC<PythonNavbarProps> = ({
  currentTab,
  onSelectTab,
  solvedCount,
  totalCount,
  soundEnabled,
  onToggleSound,
  onResetProgress,
}) => {
  return (
    <nav className="bg-white border-b border-[#E3E3E9] sticky top-0 z-40 px-3 md:px-6 py-3 font-mono select-none">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Brand Logo */}
        <div
          onClick={() => {
            playPopSound();
            onSelectTab("lessons");
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] via-[#5636E0] to-[#F5A800] p-0.5 shadow-xs">
            <div className="w-full h-full bg-[#12121A] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#4FF0A7] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-black tracking-tight text-[#0B0B0F]">
                Python
              </span>
              <span className="text-[16px] font-black tracking-tight text-[#0A54C4]">
                Станция
              </span>
            </div>
            <div className="text-[10px] font-bold text-[#63636E] uppercase tracking-wider">
              Курс и Справочник
            </div>
          </div>
        </div>

        {/* Center Tabs: Уроки, Справочник, Песочница */}
        <div className="flex items-center gap-1 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]">
          <button
            onClick={() => {
              playPopSound();
              onSelectTab("lessons");
            }}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === "lessons"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#0A54C4]" />
            <span>Уроки</span>
          </button>

          <button
            onClick={() => {
              playPopSound();
              onSelectTab("handbook");
            }}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === "handbook"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            <Search className="w-3.5 h-3.5 text-[#B0700C]" />
            <span>Справочник функций</span>
          </button>

          <button
            onClick={() => {
              playPopSound();
              onSelectTab("sandbox");
            }}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === "sandbox"
                ? "bg-white text-[#0B0B0F] shadow-xs"
                : "text-[#63636E] hover:text-[#0B0B0F]"
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#0A7A50]" />
            <span>Песочница</span>
          </button>
        </div>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-2">
          {/* Progress pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F1F1F4] border border-[#E3E3E9] text-[11.5px] font-bold text-[#63636E]">
            <Trophy className="w-3.5 h-3.5 text-[#F5A800]" />
            <span>
              Пройдено: <strong className="text-[#0B0B0F]">{solvedCount}/{totalCount}</strong>
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            title={soundEnabled ? "Выключить звук" : "Включить звук"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#0A7A50]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Reset Progress */}
          <button
            onClick={onResetProgress}
            className="p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer"
            title="Сбросить прогресс"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};
