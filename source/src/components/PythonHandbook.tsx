import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  BookOpen,
  Copy,
  Check,
  Code2,
  Tag,
  ExternalLink,
  ChevronRight,
  X,
  Play,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  PYTHON_FUNCTIONS_DB,
  PYTHON_CATEGORIES,
  PythonFunctionItem,
} from "../data/pythonFunctions";
import { playSnapSound, playPopSound } from "../utils/audio";

interface PythonHandbookProps {
  onInsertCode?: (codeSnippet: string) => void;
  onOpenInSandbox?: (codeSnippet: string) => void;
  isModal?: boolean;
  onClose?: () => void;
}

export const PythonHandbook: React.FC<PythonHandbookProps> = ({
  onInsertCode,
  onOpenInSandbox,
  isModal = false,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFunc, setSelectedFunc] = useState<PythonFunctionItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search input
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Keyboard shortcut: '/' to focus search, Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Escape") {
        if (selectedFunc) {
          setSelectedFunc(null);
        } else if (isModal && onClose) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModal, onClose, selectedFunc]);

  const filteredFunctions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PYTHON_FUNCTIONS_DB.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      if (!matchCategory) return false;

      if (!q) return true;

      const inName = item.name.toLowerCase().includes(q);
      const inSyntax = item.syntax.toLowerCase().includes(q);
      const inShort = item.shortDesc.toLowerCase().includes(q);
      const inFull = item.fullDesc.toLowerCase().includes(q);
      const inTags = item.tags.some((t) => t.toLowerCase().includes(q));

      return inName || inSyntax || inShort || inFull || inTags;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    playSnapSound();
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className={`font-mono text-[#0B0B0F] ${
        isModal
          ? "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-6"
          : "max-w-[1360px] mx-auto p-3 md:p-6 space-y-5"
      }`}
    >
      <div
        className={`bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl shadow-xl flex flex-col overflow-hidden ${
          isModal ? "w-full max-w-5xl max-h-[90vh]" : "w-full min-h-[750px]"
        }`}
      >
        {/* Header Bar */}
        <div className="p-4 md:p-6 border-b border-[#E3E3E9] bg-gradient-to-r from-[#F7F7FA] to-white flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#5636E0] text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] md:text-[20px] font-black tracking-tight text-[#0B0B0F]">
                  Справочник и поиск по функциям Python
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3E3E9] text-[#63636E]">
                  {PYTHON_FUNCTIONS_DB.length} функций
                </span>
              </div>
              <p className="text-[12px] text-[#63636E]">
                Быстрый интерактивный поиск синтаксиса, параметров и примеров кода
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer"
                title="Закрыть (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-4 md:p-6 border-b border-[#E3E3E9] space-y-3 bg-[#FCFCFD]">
          {/* Big Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#63636E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или описанию (например: print, ввод, len, split, рандом)..."
              className="w-full bg-white border-2 border-[#E3E3E9] focus:border-[#0A54C4] rounded-xl pl-12 pr-10 py-3 text-[14px] font-mono outline-none shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#63636E] hover:text-[#0B0B0F] p-1 cursor-pointer"
                title="Очистить"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {PYTHON_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  playPopSound();
                }}
                className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#0A54C4] text-white shadow-xs"
                    : "bg-[#F1F1F4] text-[#63636E] hover:bg-[#E3E3E9] hover:text-[#0B0B0F]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-[11.5px] text-[#63636E] flex items-center justify-between">
            <span>
              Найдено: <strong>{filteredFunctions.length}</strong>
            </span>
            <span className="text-[10.5px] text-[#63636E]/70 hidden sm:inline">
              Нажмите <strong>/</strong> в любом месте для быстрого перехода к поиску
            </span>
          </div>
        </div>

        {/* Function Cards List / Detail Split */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFunctions.length === 0 ? (
            <div className="col-span-full py-16 text-center text-[#63636E] space-y-3">
              <Search className="w-10 h-10 mx-auto opacity-30" />
              <div className="text-[15px] font-bold">Ничего не найдено по запросу «{searchQuery}»</div>
              <p className="text-[12px] max-w-sm mx-auto">
                Попробуй ввести английское название функции (например: <code>range</code>, <code>append</code>) или ключевое слово (например: <code>длина</code>, <code>число</code>).
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] rounded-xl text-[12px] font-bold transition-all cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            filteredFunctions.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7F7FA] hover:bg-white rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] p-4.5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-sm group space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A54C4] bg-[#0A54C4]/10 px-2 py-0.5 rounded-md">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-[17px] font-black text-[#0B0B0F] mt-1 group-hover:text-[#0A54C4] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopy(item.id, item.example)}
                      className="p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer"
                      title="Скопировать пример"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-[#0A7A50]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Syntax Preview */}
                  <div className="bg-[#16161F] text-[#4FF0A7] px-2.5 py-1.5 rounded-lg text-[12px] font-mono overflow-x-auto">
                    <code>{item.syntax}</code>
                  </div>

                  {/* Short Description */}
                  <p className="text-[12px] text-[#63636E] leading-relaxed">
                    {item.shortDesc}
                  </p>

                  {/* Example Code Snippet */}
                  <div className="bg-white border border-[#E3E3E9] rounded-lg p-2.5 text-[11px] space-y-1 font-mono">
                    <div className="text-[10px] font-bold uppercase text-[#63636E]">Пример:</div>
                    <pre className="text-[#0B0B0F] overflow-x-auto whitespace-pre-wrap leading-tight">
                      {item.example}
                    </pre>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 border-t border-[#E3E3E9] flex items-center justify-between gap-2 text-[11.5px] font-bold">
                  {onInsertCode && (
                    <button
                      onClick={() => {
                        onInsertCode(item.example);
                        playSnapSound();
                      }}
                      className="text-[#0A54C4] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Вставить в код</span>
                    </button>
                  )}

                  {onOpenInSandbox && (
                    <button
                      onClick={() => {
                        onOpenInSandbox(item.example);
                        playSnapSound();
                      }}
                      className="text-[#5636E0] hover:underline flex items-center gap-1 cursor-pointer ml-auto"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Песочница</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
