import React, { useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";

interface PythonCodeEditorProps {
  value: string;
  onChange: (val: string) => void;
  onRun?: () => void;
  placeholder?: string;
  activeLine?: number | null;
  errorLine?: number | null;
  rows?: number;
}

export const PythonCodeEditor: React.FC<PythonCodeEditorProps> = ({
  value,
  onChange,
  onRun,
  placeholder = "# Напиши код на Python 3...",
  activeLine = null,
  errorLine = null,
  rows = 15,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const lineGutterRef = useRef<HTMLDivElement>(null);

  const lines = value.split("\n");
  const lineCount = Math.max(lines.length, rows);

  // Synchronize scroll between textarea, pre highlight overlay, and line gutter
  const handleScroll = () => {
    if (textareaRef.current) {
      const top = textareaRef.current.scrollTop;
      const left = textareaRef.current.scrollLeft;

      if (preRef.current) {
        preRef.current.scrollTop = top;
        preRef.current.scrollLeft = left;
      }
      if (lineGutterRef.current) {
        lineGutterRef.current.scrollTop = top;
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 1. Run shortcut (Ctrl+Enter / Cmd+Enter)
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      onRun?.();
      return;
    }

    // 2. Tab / Shift+Tab handling (4 spaces indentation)
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      if (!e.shiftKey) {
        // Simple insert 4 spaces
        const newValue = value.substring(0, start) + "    " + value.substring(end);
        onChange(newValue);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
          }
        }, 0);
      } else {
        // Shift+Tab: Unindent
        const textBefore = value.substring(0, start);
        const lastNewline = textBefore.lastIndexOf("\n");
        const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
        const line = value.substring(lineStart, start);
        const spacesToRemove = line.match(/^ {1,4}/)?.[0].length || 0;
        if (spacesToRemove > 0) {
          const newValue = value.substring(0, lineStart) + value.substring(lineStart + spacesToRemove);
          onChange(newValue);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.selectionStart = textareaRef.current.selectionEnd = Math.max(lineStart, start - spacesToRemove);
            }
          }, 0);
        }
      }
      return;
    }

    // 3. Enter key with smart auto-indentation (e.g. def foo(): -> next line indented)
    if (e.key === "Enter" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      const textBefore = value.substring(0, start);
      const textAfter = value.substring(end);

      // Find current line up to cursor
      const lastNewlineIdx = textBefore.lastIndexOf("\n");
      const currentLine = lastNewlineIdx === -1 ? textBefore : textBefore.substring(lastNewlineIdx + 1);

      // Find current indentation
      const matchIndent = currentLine.match(/^[ \t]*/);
      const baseIndent = matchIndent ? matchIndent[0] : "";

      // Check if current line ends with a colon ':' (like def func():, if x:, for i:, while:)
      const trimmedLine = currentLine.trim();
      const isColon = trimmedLine.endsWith(":");

      // Check if cursor is directly between brackets: () or [] or {}
      const charBefore = textBefore.slice(-1);
      const charAfter = textAfter.slice(0, 1);
      const isBetweenBrackets =
        (charBefore === "(" && charAfter === ")") ||
        (charBefore === "[" && charAfter === "]") ||
        (charBefore === "{" && charAfter === "}");

      let insertText = "\n" + baseIndent;
      let newCursorPos = start + 1 + baseIndent.length;

      if (isColon) {
        insertText += "    ";
        newCursorPos += 4;
      }

      if (isBetweenBrackets) {
        const extraIndent = baseIndent + "    ";
        insertText = "\n" + extraIndent + "\n" + baseIndent;
        newCursorPos = start + 1 + extraIndent.length;
      }

      const newValue = textBefore + insertText + textAfter;
      onChange(newValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursorPos;
        }
      }, 0);
      return;
    }

    // 4. Auto-closing brackets and quotes: (, [, {, ", '
    const PAIRS: Record<string, string> = {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'",
    };

    if (PAIRS[e.key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const openChar = e.key;
      const closeChar = PAIRS[e.key];
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const charAfter = value[start];

      // If quotes and next char is already that quote, simply skip over it
      if ((openChar === '"' || openChar === "'") && start === end && charAfter === openChar) {
        e.preventDefault();
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
          }
        }, 0);
        return;
      }

      // If selection exists, wrap selected text in the pair
      if (start !== end) {
        e.preventDefault();
        const selected = value.substring(start, end);
        const newValue = value.substring(0, start) + openChar + selected + closeChar + value.substring(end);
        onChange(newValue);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = start + 1;
            textareaRef.current.selectionEnd = end + 1;
          }
        }, 0);
        return;
      }

      // If no selection, insert both and put cursor inside: (|)
      e.preventDefault();
      const newValue = value.substring(0, start) + openChar + closeChar + value.substring(end);
      onChange(newValue);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
        }
      }, 0);
      return;
    }

    // 5. Skip closing bracket if typed when already next char
    const CLOSING_CHARS = [")", "]", "}", '"', "'"];
    if (CLOSING_CHARS.includes(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      if (start === end && value[start] === e.key) {
        e.preventDefault();
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
          }
        }, 0);
        return;
      }
    }

    // 6. Backspace: delete matching pair if empty inside (e.g. () -> backspace -> empty)
    if (e.key === "Backspace" && !e.ctrlKey && !e.metaKey) {
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      if (start === end && start > 0) {
        const charBefore = value[start - 1];
        const charAfter = value[start];
        const isPair =
          (charBefore === "(" && charAfter === ")") ||
          (charBefore === "[" && charAfter === "]") ||
          (charBefore === "{" && charAfter === "}") ||
          (charBefore === '"' && charAfter === '"') ||
          (charBefore === "'" && charAfter === "'");

        if (isPair) {
          e.preventDefault();
          const newValue = value.substring(0, start - 1) + value.substring(start + 1);
          onChange(newValue);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start - 1;
            }
          }, 0);
          return;
        }
      }
    }
  };

  const highlightedHTML = Prism.highlight(
    value + (value.endsWith("\n") ? " " : ""),
    Prism.languages.python,
    "python"
  );

  return (
    <div className="relative border-2 border-[#E3E3E9] focus-within:border-[#0A54C4] rounded-xl overflow-hidden bg-[#16161F] text-white flex min-h-[380px] shadow-2xs">
      {/* Line Numbers Gutter */}
      <div
        ref={lineGutterRef}
        className="w-11 bg-[#12121A] text-[#636375] py-3.5 px-1.5 text-right font-mono text-[13px] leading-6 select-none border-r border-[#2C2C3A] overflow-hidden shrink-0"
      >
        {Array.from({ length: lineCount }).map((_, i) => {
          const lineNum = i + 1;
          const isCur = activeLine === lineNum;
          const isErr = errorLine === lineNum;
          return (
            <div
              key={i}
              className={`h-6 leading-6 ${
                isErr
                  ? "text-[#FF3860] font-black bg-[#FF3860]/20 rounded-xs"
                  : isCur
                  ? "text-[#F5A800] font-black bg-[#F5A800]/20 rounded-xs"
                  : ""
              }`}
            >
              {lineNum}
            </div>
          );
        })}
      </div>

      {/* Editor & Highlight Container */}
      <div className="relative flex-1 overflow-hidden">
        {/* Prism Syntax Highlight Layer (Underneath) */}
        <pre
          ref={preRef}
          aria-hidden="true"
          className="absolute inset-0 m-0 p-3.5 font-mono text-[13px] leading-6 pointer-events-none overflow-hidden whitespace-pre tab-[4] selection:bg-transparent"
          dangerouslySetInnerHTML={{ __html: highlightedHTML }}
        />

        {/* Interactive Textarea (Foreground) */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-white p-3.5 font-mono text-[13px] leading-6 resize-none focus:outline-none selection:bg-[#5636E0]/40 whitespace-pre overflow-auto tab-[4]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
