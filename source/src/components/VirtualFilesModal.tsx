import React, { useState, useEffect } from "react";
import {
  FolderOpen,
  Trash2,
  X,
  FileText,
  Copy,
  Check,
  Plus,
  RefreshCw,
} from "lucide-react";
import {
  getStoredVirtualFiles,
  saveStoredVirtualFiles,
  clearStoredVirtualFiles,
} from "../utils/pythonRunner";

interface VirtualFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilesChanged?: () => void;
}

export const VirtualFilesModal: React.FC<VirtualFilesModalProps> = ({
  isOpen,
  onClose,
  onFilesChanged,
}) => {
  const [files, setFiles] = useState<Record<string, string>>({});
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newFileName, setNewFileName] = useState("");

  const refreshFiles = () => {
    const stored = getStoredVirtualFiles();
    setFiles(stored);
    const keys = Object.keys(stored);
    if (keys.length > 0) {
      if (!selectedFile || !stored[selectedFile]) {
        setSelectedFile(keys[0]);
      }
    } else {
      setSelectedFile(null);
    }
  };

  useEffect(() => {
    if (isOpen) {
      refreshFiles();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const fileKeys = Object.keys(files);

  const handleClearAll = () => {
    if (window.confirm("Удалить все созданные виртуальные файлы?")) {
      clearStoredVirtualFiles();
      setFiles({});
      setSelectedFile(null);
      onFilesChanged?.();
    }
  };

  const handleDeleteFile = (fname: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...files };
    delete updated[fname];
    saveStoredVirtualFiles(updated);
    setFiles(updated);
    if (selectedFile === fname) {
      const remaining = Object.keys(updated);
      setSelectedFile(remaining.length > 0 ? remaining[0] : null);
    }
    onFilesChanged?.();
  };

  const handleCopyContent = () => {
    if (!selectedFile || files[selectedFile] === undefined) return;
    navigator.clipboard.writeText(files[selectedFile]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCreateNewFile = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newFileName.trim();
    if (!name) return;
    if (files[name] !== undefined) {
      alert("Файл с таким именем уже существует");
      return;
    }
    const updated = { ...files, [name]: "" };
    saveStoredVirtualFiles(updated);
    setFiles(updated);
    setSelectedFile(name);
    setNewFileName("");
    setIsCreating(false);
    onFilesChanged?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E3E3E9] bg-[#F7F7FA]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0A7A50]/15 text-[#0A7A50] flex items-center justify-center">
              <FolderOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[15px] font-black text-[#0B0B0F]">
                Виртуальные файлы программы
              </h3>
              <p className="text-[11px] text-[#63636E]">
                Файлы, созданные через <code className="text-[#0A54C4]">open(...)</code> в Python (сохраняются между запусками)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {fileKeys.length > 0 && (
              <button
                onClick={handleClearAll}
                className="px-2.5 py-1.5 rounded-lg border border-[#D4126C]/30 text-[#D4126C] hover:bg-[#D4126C]/10 text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Очистить все файлы"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Очистить все</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {fileKeys.length === 0 ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F1F1F4] text-[#63636E] flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-[13px] font-bold text-[#0B0B0F]">
              Пока нет созданных файлов
            </p>
            <p className="text-[12px] text-[#63636E] max-w-md mx-auto">
              Когда твоя программа выполнит код записи в файл, например:
            </p>
            <pre className="bg-[#15151D] text-[#4FF0A7] p-3 rounded-xl text-[12px] font-mono inline-block text-left max-w-md">
              {`with open("notes.txt", "w") as f:\n    f.write("Привет из Python!")`}
            </pre>
            <p className="text-[11.5px] text-[#63636E]">
              Файл автоматически появится здесь и сохранится даже после перезапуска!
            </p>
            {!isCreating ? (
              <div>
                <button
                  onClick={() => setIsCreating(true)}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A7A50] text-white text-[11.5px] font-bold rounded-lg hover:brightness-110 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Создать тестовый файл вручную</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateNewFile} className="flex items-center justify-center gap-2 mt-3">
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="Имя файла (напр. data.txt)"
                  className="px-3 py-1.5 text-[12px] border border-[#E3E3E9] rounded-lg outline-none font-mono"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#0A7A50] text-white text-[12px] font-bold rounded-lg cursor-pointer"
                >
                  Добавить
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-2.5 py-1.5 text-[12px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer"
                >
                  Отмена
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[300px]">
            {/* Sidebar with files */}
            <div className="md:col-span-4 border-r border-[#E3E3E9] p-2 space-y-1 overflow-y-auto bg-[#FAFAFC]">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#63636E]">
                <span>Файлы ({fileKeys.length})</span>
                <button
                  onClick={() => setIsCreating(true)}
                  className="text-[#0A7A50] hover:underline flex items-center gap-0.5 font-bold cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>Создать</span>
                </button>
              </div>

              {isCreating && (
                <form onSubmit={handleCreateNewFile} className="p-2 bg-white rounded-lg border border-[#0A7A50] space-y-1.5">
                  <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    placeholder="Имя файла..."
                    className="w-full px-2 py-1 text-[11px] border border-[#E3E3E9] rounded font-mono outline-none"
                    autoFocus
                  />
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => setIsCreating(false)}
                      className="px-2 py-0.5 text-[10px] text-[#63636E]"
                    >
                      Отмена
                    </button>
                    <button
                      type="submit"
                      className="px-2 py-0.5 text-[10px] bg-[#0A7A50] text-white rounded font-bold"
                    >
                      OK
                    </button>
                  </div>
                </form>
              )}

              {fileKeys.map((fname) => {
                const isSelected = selectedFile === fname;
                const content = files[fname] || "";
                const lineCount = content.split("\n").length;
                const byteSize = new Blob([content]).size;

                return (
                  <div
                    key={fname}
                    onClick={() => setSelectedFile(fname)}
                    className={`flex items-center justify-between p-2 rounded-xl text-[12px] font-mono cursor-pointer transition-colors group ${
                      isSelected
                        ? "bg-[#0A7A50]/15 text-[#0A7A50] font-bold border border-[#0A7A50]/30"
                        : "hover:bg-[#EAEAEF] text-[#0B0B0F]"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{fname}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] text-[#63636E]">
                        {byteSize} б
                      </span>
                      <button
                        onClick={(e) => handleDeleteFile(fname, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:text-[#D4126C] rounded transition-opacity"
                        title="Удалить файл"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Viewer / Editor */}
            <div className="md:col-span-8 flex flex-col bg-[#15151D] text-[#E3E3E9] overflow-hidden">
              {selectedFile ? (
                <>
                  <div className="flex items-center justify-between p-3 border-b border-[#2C2C3A] bg-[#1E1E28] text-[11px] font-mono">
                    <span className="text-[#4FF0A7] font-bold">
                      {selectedFile}
                    </span>
                    <button
                      onClick={handleCopyContent}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[#2C2C3A] hover:bg-[#38384A] text-white cursor-pointer transition-colors text-[10.5px]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-[#4FF0A7]" />
                          <span>Скопировано</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Копировать</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex-1 p-3 font-mono text-[12px] overflow-auto whitespace-pre leading-relaxed select-text">
                    {files[selectedFile] || (
                      <span className="text-[#8E8EA0] italic">
                        (файл пуст)
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-[#8E8EA0] text-[12px]">
                  Выберите файл слева для просмотра
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-3 border-t border-[#E3E3E9] bg-[#F7F7FA] flex items-center justify-between text-[11px] text-[#63636E]">
          <span>Всего файлов: {fileKeys.length}</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-[#0B0B0F] hover:bg-[#2C2C3A] text-white font-bold rounded-lg cursor-pointer transition-colors text-[11.5px]"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
