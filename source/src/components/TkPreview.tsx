import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  AppWindow,
  X,
  Info,
  AlertTriangle,
  AlertCircle,
  HelpCircle,
  Square,
  Sparkles,
} from "lucide-react";
import { playDrumSound } from "../utils/audio";

export interface TkWidgetData {
  pyWidget: any;
  id: number;
  kind: "Tk" | "Label" | "Button" | "Entry" | "Listbox" | "Frame" | string;
  master: any;
  opts: Record<string, any>;
  layoutType: "pack" | "grid" | "place" | null;
  layoutOpts: Record<string, any>;
  text: string;
  items: string[];
  itemOpts: Record<string, any>[];
  selected: number[];
  val?: number;
  isChecked?: boolean;
}

export interface TkState {
  hasTk: boolean;
  root: TkWidgetData | null;
  widgets: TkWidgetData[];
  log: Array<{ kind: string; title: string; message: string }>;
}

/**
 * Извлечение текущего состояния виджетов Tkinter из Skulpt
 */
export function extractTkinterState(): TkState {
  const Sk = typeof window !== "undefined" ? (window as any).Sk : null;
  if (!Sk || !Sk.sysmodules) {
    return { hasTk: false, root: null, widgets: [], log: [] };
  }

  let tkMod: any = null;
  try {
    tkMod = Sk.sysmodules.quick$lookup(new Sk.builtin.str("tkinter"));
  } catch {}

  if (!tkMod || !tkMod.$d) {
    return { hasTk: false, root: null, widgets: [], log: [] };
  }

  const rawWidgets =
    tkMod.$d.WIDGETS && tkMod.$d.WIDGETS.v ? tkMod.$d.WIDGETS.v : [];
  const rawLog = tkMod.$d.LOG && tkMod.$d.LOG.v ? tkMod.$d.LOG.v : [];

  if (rawWidgets.length === 0) {
    return { hasTk: false, root: null, widgets: [], log: [] };
  }

  let root: TkWidgetData | null = null;
  const widgets: TkWidgetData[] = [];

  for (let i = 0; i < rawWidgets.length; i++) {
    const w = rawWidgets[i];
    if (!w) continue;

    // kind
    let kind = "Widget";
    if (w.$d && w.$d.kind) {
      kind =
        typeof w.$d.kind === "string" ? w.$d.kind : w.$d.kind.v || "Widget";
    } else if (w.kind) {
      kind = typeof w.kind === "string" ? w.kind : w.kind.v || "Widget";
    }

    // opts
    let opts: Record<string, any> = {};
    if (w.$d && w.$d.opts) {
      try {
        const remapped = Sk.ffi.remapToJs(w.$d.opts);
        if (remapped && typeof remapped === "object") opts = remapped;
      } catch {}
    }

    // layout
    let layoutType: "pack" | "grid" | "place" | null = null;
    let layoutOpts: Record<string, any> = {};
    if (w.$d && w.$d.layout && w.$d.layout.v) {
      const tuple = w.$d.layout.v;
      if (tuple.length >= 2) {
        layoutType = tuple[0]?.v || tuple[0];
        try {
          layoutOpts = Sk.ffi.remapToJs(tuple[1]) || {};
        } catch {}
      }
    }

    // Entry text
    let text = "";
    if (w.$d && w.$d.text !== undefined) {
      text =
        typeof w.$d.text === "string"
          ? w.$d.text
          : w.$d.text.v !== undefined
          ? String(w.$d.text.v)
          : String(w.$d.text);
    } else if (w.text !== undefined) {
      text =
        typeof w.text === "string"
          ? w.text
          : w.text.v !== undefined
          ? String(w.text.v)
          : String(w.text);
    }

    // Listbox items
    let items: string[] = [];
    if (w.$d && w.$d.items && w.$d.items.v) {
      items = w.$d.items.v.map((it: any) =>
        it && it.v !== undefined ? String(it.v) : String(it)
      );
    }

    // Listbox item_opts
    let itemOpts: Record<string, any>[] = [];
    if (w.$d && w.$d.item_opts && w.$d.item_opts.v) {
      try {
        const remapped = Sk.ffi.remapToJs(w.$d.item_opts);
        if (Array.isArray(remapped)) itemOpts = remapped;
      } catch {}
    }

    // Listbox selected
    let selected: number[] = [];
    if (w.$d && w.$d.selected && w.$d.selected.v) {
      selected = w.$d.selected.v.map((idx: any) =>
        idx && idx.v !== undefined ? Number(idx.v) : Number(idx)
      );
    }

    // Scale val
    let val: number | undefined = undefined;
    if (w.$d && w.$d.val !== undefined) {
      val = typeof w.$d.val === "number" ? w.$d.val : (w.$d.val.v !== undefined ? Number(w.$d.val.v) : Number(w.$d.val));
    } else if (w.val !== undefined) {
      val = typeof w.val === "number" ? w.val : (w.val.v !== undefined ? Number(w.val.v) : Number(w.val));
    } else if (opts.from_ !== undefined) {
      val = Number(opts.from_);
    } else if (opts.from !== undefined) {
      val = Number(opts.from);
    }

    // Checkbutton isChecked
    let isChecked: boolean | undefined = undefined;
    const pyVar = w.$d?.var || w.var;
    if (pyVar) {
      const rawV = pyVar.$d?.v !== undefined ? pyVar.$d.v : pyVar.v;
      isChecked = rawV?.v !== undefined ? Boolean(rawV.v) : Boolean(rawV);
    }

    const data: TkWidgetData = {
      pyWidget: w,
      id: i,
      kind,
      master: w.$d?.master || w.master,
      opts,
      layoutType,
      layoutOpts,
      text,
      items,
      itemOpts,
      selected,
      val,
      isChecked,
    };

    if (kind === "Tk") {
      root = data;
    } else {
      widgets.push(data);
    }
  }

  // extract logs
  const log: Array<{ kind: string; title: string; message: string }> = [];
  for (let i = 0; i < rawLog.length; i++) {
    const item = rawLog[i];
    try {
      const jsItem = Sk.ffi.remapToJs(item);
      if (Array.isArray(jsItem) && jsItem.length >= 3) {
        log.push({
          kind: String(jsItem[0]),
          title: String(jsItem[1]),
          message: String(jsItem[2]),
        });
      }
    } catch {}
  }

  return {
    hasTk: root !== null || widgets.length > 0,
    root,
    widgets,
    log,
  };
}

interface TkPreviewProps {
  onStop?: () => void;
  onRefresh?: () => void;
  isAlive: boolean;
}

export const TkPreview: React.FC<TkPreviewProps> = ({
  onStop,
  onRefresh,
  isAlive,
}) => {
  const [tkState, setTkState] = useState<TkState>(() => extractTkinterState());
  const [activeDialog, setActiveDialog] = useState<{
    kind: string;
    title: string;
    message: string;
  } | null>(null);
  const [seenLogCount, setSeenLogCount] = useState(0);
  const timersRef = useRef<Set<number>>(new Set());
  const aliveRef = useRef(isAlive);
  aliveRef.current = isAlive;

  const drainPygameSounds = useCallback(() => {
    const Sk = typeof window !== "undefined" ? (window as any).Sk : null;
    if (!Sk || !Sk.sysmodules) return;
    try {
      const pgMod = Sk.sysmodules.quick$lookup(new Sk.builtin.str("pygame"));
      const queueObj = pgMod?.$d?.mixer?.$d?._sound_queue;
      if (queueObj && Array.isArray(queueObj.v) && queueObj.v.length > 0) {
        const items = queueObj.v.splice(0, queueObj.v.length);
        for (const item of items) {
          try {
            const jsItem = Sk.ffi.remapToJs(item);
            if (Array.isArray(jsItem) && jsItem.length >= 1) {
              const file = String(jsItem[0]);
              const vol = jsItem.length >= 2 ? Number(jsItem[1]) : 1.0;
              playDrumSound(file, vol);
            }
          } catch {}
        }
      }
    } catch {}
  }, []);

  const drainAfterQueueRef = useRef<() => void>(() => {});

  // Sync state helper
  const syncState = useCallback(() => {
    drainPygameSounds();
    const st = extractTkinterState();
    setTkState(st);

    // check if there are new log messages (messagebox)
    if (st.log.length > seenLogCount) {
      const latest = st.log[st.log.length - 1];
      setActiveDialog(latest);
      setSeenLogCount(st.log.length);
    }

    if (aliveRef.current) {
      drainAfterQueueRef.current();
    }
  }, [seenLogCount, drainPygameSounds]);

  drainAfterQueueRef.current = () => {
    const Sk = typeof window !== "undefined" ? (window as any).Sk : null;
    if (!Sk || !Sk.sysmodules || !aliveRef.current) return;
    try {
      const tkMod = Sk.sysmodules.quick$lookup(new Sk.builtin.str("tkinter"));
      const afterObj = tkMod?.$d?.AFTER_QUEUE;
      if (!afterObj || !Array.isArray(afterObj.v) || afterObj.v.length === 0) {
        return;
      }
      const queued = afterObj.v.splice(0, afterObj.v.length);
      for (const entry of queued) {
        if (!entry || !Array.isArray(entry.v) || entry.v.length < 2) continue;
        const msRaw = entry.v[0];
        const pyFunc = entry.v[1];
        const pyArgsTuple = entry.v[2];
        const delay = Math.max(16, Number(msRaw?.v !== undefined ? msRaw.v : msRaw) || 16);
        const callArgs: any[] =
          pyArgsTuple && Array.isArray(pyArgsTuple.v) ? pyArgsTuple.v : [];

        const timerId = window.setTimeout(async () => {
          timersRef.current.delete(timerId);
          if (!aliveRef.current) return;
          if (pyFunc && pyFunc !== Sk.builtin.none.none$) {
            try {
              await Sk.misceval.asyncToPromise(() =>
                Sk.misceval.callsimOrSuspendArray(pyFunc, callArgs)
              );
            } catch (err) {
              console.warn("Tkinter after callback error:", err);
            }
          }
          if (aliveRef.current) {
            syncState();
            onRefresh?.();
          }
        }, delay);
        timersRef.current.add(timerId);
      }
    } catch {}
  };

  useEffect(() => {
    if (!isAlive) {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current.clear();
      return;
    }
    syncState();
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current.clear();
    };
  }, [isAlive, syncState]);

  // Keyboard bindings: window.bind("<Key>", ...)
  useEffect(() => {
    if (!isAlive) return;
    const onKeyDown = async (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toUpperCase();
      if (tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT") {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const Sk = (window as any).Sk;
      if (!Sk || !Sk.sysmodules) return;
      const st = extractTkinterState();
      const rootOpts = st.root?.pyWidget?.$d?.opts;
      if (!rootOpts) return;

      let bindFn: any = null;
      try {
        bindFn = Sk.abstr.objectGetItem(
          rootOpts,
          new Sk.builtin.str("bind:<Key>"),
          true
        );
      } catch {}
      if (!bindFn || bindFn === Sk.builtin.none.none$) return;

      try {
        const tkMod = Sk.sysmodules.quick$lookup(new Sk.builtin.str("tkinter"));
        const eventCls = tkMod?.$d?.Event;
        const charStr = e.key.length === 1 ? e.key : "";
        let eventArg: any = null;
        if (eventCls) {
          eventArg = await Sk.misceval.asyncToPromise(() =>
            Sk.misceval.callsimOrSuspendArray(eventCls, [
              new Sk.builtin.str(charStr),
              new Sk.builtin.str(e.key),
            ])
          );
        } else {
          eventArg = new Sk.builtin.object();
        }
        await Sk.misceval.asyncToPromise(() =>
          Sk.misceval.callsimOrSuspendArray(bindFn, [eventArg])
        );
      } catch (err) {
        console.warn("Tkinter Key bind error:", err);
      } finally {
        syncState();
        onRefresh?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isAlive, syncState, onRefresh]);

  // If no Tk widgets exist, don't show preview
  if (!tkState.hasTk) {
    return null;
  }

  const { root, widgets } = tkState;

  // Window Title & Geometry
  const windowTitle = root?.opts?.title || "Tkinter Window";
  const geometry = root?.opts?.geometry || "400x260";
  let targetWidth = 420;
  let targetMinHeight = 260;
  const geoMatch = String(geometry).match(/(\d+)x(\d+)/);
  if (geoMatch) {
    targetWidth = Math.max(300, Math.min(680, parseInt(geoMatch[1], 10)));
    targetMinHeight = Math.max(180, Math.min(500, parseInt(geoMatch[2], 10)));
  }

  // Handle Button Click
  const handleButtonClick = async (w: TkWidgetData) => {
    const Sk = (window as any).Sk;
    if (!Sk) return;

    try {
      // Find command in w.opts or w.pyWidget.$d.opts
      let pyCmd: any = null;
      if (w.pyWidget && w.pyWidget.$d && w.pyWidget.$d.opts) {
        pyCmd = Sk.abstr.objectGetItem(
          w.pyWidget.$d.opts,
          new Sk.builtin.str("command"),
          true
        );
      }
      if (!pyCmd && w.opts && typeof w.opts.command === "function") {
        pyCmd = w.opts.command;
      }

      if (pyCmd && pyCmd !== Sk.builtin.none.none$) {
        await Sk.misceval.asyncToPromise(() =>
          Sk.misceval.callsimOrSuspendArray(pyCmd, [])
        );
      }
    } catch (err: any) {
      console.warn("Tkinter button command error:", err);
    } finally {
      syncState();
      onRefresh?.();
    }
  };

  // Handle Entry Input Change
  const handleEntryChange = (w: TkWidgetData, newValue: string) => {
    const Sk = (window as any).Sk;
    if (w.pyWidget) {
      const pyStr = Sk ? new Sk.builtin.str(newValue) : newValue;
      if (w.pyWidget.$d) {
        w.pyWidget.$d.text = pyStr;
      }
      w.pyWidget.text = pyStr;
    }
    syncState();
  };

  // Handle Listbox Item Click
  const handleListboxSelect = (w: TkWidgetData, index: number) => {
    const Sk = (window as any).Sk;
    if (w.pyWidget && Sk) {
      const pyList = new Sk.builtin.list([new Sk.builtin.int_(index)]);
      if (w.pyWidget.$d) {
        w.pyWidget.$d.selected = pyList;
      }
      w.pyWidget.selected = pyList;
    }
    syncState();
  };

  // Handle Listbox Item Double Click
  const handleListboxDoubleClick = async (w: TkWidgetData, index: number) => {
    handleListboxSelect(w, index);
    const Sk = (window as any).Sk;
    if (!Sk) return;

    let bindFn: any = null;
    if (w.pyWidget?.$d?.opts) {
      try {
        bindFn = Sk.abstr.objectGetItem(
          w.pyWidget.$d.opts,
          new Sk.builtin.str("bind:<Double-Button-1>"),
          true
        );
        if (!bindFn || bindFn === Sk.builtin.none.none$) {
          bindFn = Sk.abstr.objectGetItem(
            w.pyWidget.$d.opts,
            new Sk.builtin.str("bind:<Double-1>"),
            true
          );
        }
      } catch {}
    }

    if (bindFn && bindFn !== Sk.builtin.none.none$) {
      try {
        // Try calling with a dummy event object
        await Sk.misceval.asyncToPromise(() =>
          Sk.misceval.callsimOrSuspendArray(bindFn, [new Sk.builtin.object()])
        );
      } catch {
        try {
          // If 0 arguments expected
          await Sk.misceval.asyncToPromise(() =>
            Sk.misceval.callsimOrSuspendArray(bindFn, [])
          );
        } catch (err: any) {
          console.warn("Tkinter Listbox double-click error:", err);
        }
      } finally {
        syncState();
        onRefresh?.();
      }
    }
  };

  // Handle Scale Change
  const handleScaleChange = async (w: TkWidgetData, newVal: number) => {
    const Sk = (window as any).Sk;
    if (w.pyWidget) {
      if (w.pyWidget.$d) {
        w.pyWidget.$d.val = Sk ? new Sk.builtin.int_(newVal) : newVal;
      }
      w.pyWidget.val = newVal;
    }

    // Call command callback if present
    try {
      let pyCmd: any = null;
      if (w.pyWidget && w.pyWidget.$d && w.pyWidget.$d.opts) {
        pyCmd = Sk.abstr.objectGetItem(
          w.pyWidget.$d.opts,
          new Sk.builtin.str("command"),
          true
        );
      }
      if (!pyCmd && w.opts && typeof w.opts.command === "function") {
        pyCmd = w.opts.command;
      }

      if (pyCmd && pyCmd !== Sk.builtin.none.none$) {
        // Scale passes the value as string to command callback in Tkinter!
        await Sk.misceval.asyncToPromise(() =>
          Sk.misceval.callsimOrSuspendArray(pyCmd, [
            new Sk.builtin.str(String(newVal)),
          ])
        );
      }
    } catch (err: any) {
      console.warn("Tkinter Scale command error:", err);
    } finally {
      syncState();
      onRefresh?.();
    }
  };

  // Handle Checkbutton Toggle
  const handleCheckbuttonToggle = async (w: TkWidgetData) => {
    const Sk = (window as any).Sk;
    const pyVar = w.pyWidget?.$d?.var || w.pyWidget?.var;
    if (pyVar) {
      const rawV = pyVar.$d?.v !== undefined ? pyVar.$d.v : pyVar.v;
      const cur = rawV?.v !== undefined ? Boolean(rawV.v) : Boolean(rawV);
      const nextVal = !cur;
      if (pyVar.$d) {
        pyVar.$d.v = Sk ? new Sk.builtin.bool(nextVal) : nextVal;
      }
      pyVar.v = nextVal;
    }

    try {
      let pyCmd: any = null;
      if (w.pyWidget && w.pyWidget.$d && w.pyWidget.$d.opts) {
        pyCmd = Sk.abstr.objectGetItem(
          w.pyWidget.$d.opts,
          new Sk.builtin.str("command"),
          true
        );
      }
      if (!pyCmd && w.opts && typeof w.opts.command === "function") {
        pyCmd = w.opts.command;
      }
      if (pyCmd && pyCmd !== Sk.builtin.none.none$) {
        await Sk.misceval.asyncToPromise(() =>
          Sk.misceval.callsimOrSuspendArray(pyCmd, [])
        );
      }
    } catch (err: any) {
      console.warn("Tkinter Checkbutton command error:", err);
    } finally {
      syncState();
      onRefresh?.();
    }
  };

  // Handle Close Window (protocol: WM_DELETE_WINDOW)
  const handleCloseWindow = async () => {
    const Sk = (window as any).Sk;
    if (Sk && root?.pyWidget?.$d?.opts) {
      let closeFn: any = null;
      try {
        closeFn = Sk.abstr.objectGetItem(
          root.pyWidget.$d.opts,
          new Sk.builtin.str("protocol:WM_DELETE_WINDOW"),
          true
        );
      } catch {}
      if (closeFn && closeFn !== Sk.builtin.none.none$) {
        try {
          await Sk.misceval.asyncToPromise(() =>
            Sk.misceval.callsimOrSuspendArray(closeFn, [])
          );
        } catch (e) {
          console.warn("protocol WM_DELETE_WINDOW error:", e);
        }
      }
    }
    onStop?.();
  };

  // Font parser helper: ("Arial", 14, "bold") or 14
  const parseFont = (fontOpt: any): { fontSize?: string; fontWeight?: string } => {
    if (!fontOpt) return { fontSize: "14px" };
    if (typeof fontOpt === "number") return { fontSize: `${fontOpt}px` };
    if (Array.isArray(fontOpt)) {
      const size = fontOpt[1] ? `${fontOpt[1]}px` : "14px";
      const weight = fontOpt[2] === "bold" ? "bold" : "normal";
      return { fontSize: size, fontWeight: weight };
    }
    if (typeof fontOpt === "string") {
      const parts = fontOpt.split(" ");
      const num = parts.find((p) => /^\d+$/.test(p));
      return { fontSize: num ? `${num}px` : "14px" };
    }
    return { fontSize: "14px" };
  };

  // Check if widgets use grid
  const topWidgets = widgets.filter(
    (w) => !w.master || w.master === root?.pyWidget
  );
  const gridWidgets = topWidgets.filter((w) => w.layoutType === "grid");
  const hasGridWidgets = gridWidgets.length > 0;
  const maxGridCols = hasGridWidgets
    ? Math.max(
        1,
        ...gridWidgets.map(
          (w) =>
            Number(w.layoutOpts.column ?? 0) +
            Number(w.layoutOpts.columnspan ?? 1)
        )
      )
    : 4;
  if (!geoMatch && hasGridWidgets && maxGridCols >= 6) {
    targetWidth = Math.max(targetWidth, Math.min(680, maxGridCols * 48 + 40));
  }
  const rootBg = root?.opts?.bg || root?.opts?.background || "#F0F0F0";

  // Render individual widget
  const renderWidget = (w: TkWidgetData) => {
    const fontStyle = parseFont(w.opts.font);
    const fg = w.opts.fg || w.opts.foreground || undefined;
    const bg = w.opts.bg || w.opts.background || undefined;
    const width = w.opts.width ? `${w.opts.width * 8 + 16}px` : undefined;

    // Layout margin / padding
    const pady = w.layoutOpts.pady ? Number(w.layoutOpts.pady) : 4;
    const padx = w.layoutOpts.padx ? Number(w.layoutOpts.padx) : 4;

    const wrapperStyle: React.CSSProperties = {
      marginTop: `${pady}px`,
      marginBottom: `${pady}px`,
      marginLeft: `${padx}px`,
      marginRight: `${padx}px`,
    };

    if (w.layoutType === "grid") {
      const row = w.layoutOpts.row !== undefined ? Number(w.layoutOpts.row) : 0;
      const column =
        w.layoutOpts.column !== undefined ? Number(w.layoutOpts.column) : 0;
      const columnspan =
        w.layoutOpts.columnspan !== undefined
          ? Number(w.layoutOpts.columnspan)
          : 1;

      wrapperStyle.gridRow = `${row + 1}`;
      wrapperStyle.gridColumn = `${column + 1} / span ${columnspan}`;
    }

    switch (w.kind) {
      case "Label":
        return (
          <div
            key={w.id}
            style={{
              ...wrapperStyle,
              color: fg || "#1F2937",
              backgroundColor: bg || "transparent",
              minWidth: width,
              minHeight: bg && !w.opts.text ? "10px" : undefined,
              borderRadius: bg && !w.opts.text ? "4px" : undefined,
              ...fontStyle,
            }}
            className="select-text leading-snug font-medium transition-colors"
          >
            {w.opts.text || ""}
          </div>
        );

      case "Button": {
        const btnHeight = w.opts.height
          ? `${Number(w.opts.height) * 20 + 8}px`
          : undefined;
        const isCompact = w.opts.width && Number(w.opts.width) <= 4;
        return (
          <div key={w.id} style={wrapperStyle}>
            <button
              onClick={() => handleButtonClick(w)}
              style={{
                color: fg || "#111827",
                backgroundColor: bg || "#E5E7EB",
                width: width || "auto",
                minHeight: btnHeight,
                ...fontStyle,
              }}
              className={`${
                isCompact ? "px-1 py-1" : "px-3.5 py-1.5"
              } rounded-md border border-[#9CA3AF] shadow-xs hover:brightness-95 active:brightness-90 active:scale-98 transition-all cursor-pointer font-semibold whitespace-pre-line leading-tight`}
            >
              {w.opts.text ?? "Button"}
            </button>
          </div>
        );
      }

      case "Entry":
        return (
          <div key={w.id} style={wrapperStyle} className="w-full max-w-[320px]">
            <input
              type="text"
              value={w.text}
              onChange={(e) => handleEntryChange(w, e.target.value)}
              style={{
                color: fg || "#111827",
                backgroundColor: bg || "#FFFFFF",
                width: width || "100%",
                ...fontStyle,
              }}
              className="px-2.5 py-1 rounded-md border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none shadow-inner transition-all font-mono"
              placeholder="Ввод текста..."
            />
          </div>
        );

      case "Listbox":
        return (
          <div key={w.id} style={wrapperStyle} className="w-full max-w-[380px]">
            <div
              style={{
                backgroundColor: bg || "#FFFFFF",
                minHeight: "120px",
                maxHeight: "220px",
              }}
              className="border border-[#9CA3AF] rounded-md overflow-y-auto divide-y divide-[#E5E7EB] font-sans text-[13px] shadow-inner"
            >
              {w.items.length === 0 ? (
                <div className="p-3 text-[12px] text-[#9CA3AF] italic text-center">
                  Список пуст
                </div>
              ) : (
                w.items.map((item, idx) => {
                  const isSelected = w.selected.includes(idx);
                  const itemFg = w.itemOpts[idx]?.fg || fg || "#1F2937";
                  return (
                    <div
                      key={idx}
                      onClick={() => handleListboxSelect(w, idx)}
                      onDoubleClick={() => handleListboxDoubleClick(w, idx)}
                      style={{ color: itemFg }}
                      className={`px-3 py-1.5 cursor-pointer select-none transition-colors ${
                        isSelected
                          ? "bg-[#2563EB] text-white font-semibold"
                          : "hover:bg-[#F3F4F6]"
                      }`}
                      title="Клик — выделить, двойной клик — запустить"
                    >
                      {item}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );

      case "Scale": {
        const min =
          w.opts.from_ !== undefined
            ? Number(w.opts.from_)
            : w.opts.from !== undefined
            ? Number(w.opts.from)
            : 0;
        const max = w.opts.to !== undefined ? Number(w.opts.to) : 100;
        const labelText = w.opts.label || "";
        const currentVal = w.val ?? min;
        return (
          <div
            key={w.id}
            style={wrapperStyle}
            className="flex flex-col items-center gap-1 w-full max-w-[280px] bg-white/90 px-2.5 py-1.5 rounded-lg"
          >
            {labelText && (
              <div className="text-[12px] font-semibold text-[#374151] self-start flex justify-between w-full">
                <span>{labelText}</span>
                <span className="font-mono text-[#0055EA] font-bold">
                  {currentVal}
                </span>
              </div>
            )}
            <input
              type="range"
              min={min}
              max={max}
              value={currentVal}
              onChange={(e) => handleScaleChange(w, Number(e.target.value))}
              className="w-full accent-[#0055EA] cursor-pointer h-2 bg-[#D1D5DB] rounded-lg"
            />
            {!labelText && (
              <div className="text-[11px] font-mono text-[#4B5563] self-end">
                {currentVal}
              </div>
            )}
          </div>
        );
      }

      case "Checkbutton": {
        return (
          <div
            key={w.id}
            style={wrapperStyle}
            className="flex items-center gap-2 select-none"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(w.isChecked)}
                onChange={() => handleCheckbuttonToggle(w)}
                className="w-4 h-4 rounded text-[#0055EA] focus:ring-[#0055EA] accent-[#0055EA] cursor-pointer"
              />
              <span
                style={{ color: fg || "#1F2937", ...fontStyle }}
                className="text-[13px] font-medium"
              >
                {w.opts.text || ""}
              </span>
            </label>
          </div>
        );
      }

      case "Frame":
        return (
          <div
            key={w.id}
            style={{
              ...wrapperStyle,
              backgroundColor: bg || "transparent",
            }}
            className="p-1 border border-dashed border-[#D1D5DB] rounded-md w-full flex flex-wrap items-center justify-center gap-1"
          >
            {/* Child widgets attached to this frame */}
            {widgets
              .filter((cw) => cw.master === w.pyWidget)
              .map((cw) => renderWidget(cw))}
          </div>
        );

      default:
        return null;
    }
  };

  // Window Client Area layout (topWidgets computed above)

  return (
    <div className="mt-4 pt-3 border-t border-[#E3E3E9] space-y-2">
      {/* Title & Live Status */}
      <div className="flex items-center justify-between text-[11px] font-bold text-[#63636E]">
        <div className="flex items-center gap-1.5">
          <AppWindow className="w-4 h-4 text-[#0A54C4]" />
          <span className="uppercase tracking-wider">
            Предпросмотр окна Tkinter
          </span>
          {isAlive && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A7A50]/15 text-[#0A7A50] text-[10.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A7A50] animate-pulse"></span>
              Окно активно
            </span>
          )}
        </div>
        {onStop && isAlive && (
          <button
            onClick={handleCloseWindow}
            className="text-[11px] text-[#D4126C] hover:underline flex items-center gap-1 font-bold cursor-pointer"
          >
            <Square className="w-3 h-3 fill-current" />
            <span>Закрыть окно</span>
          </button>
        )}
      </div>

      {/* Real Tkinter-like Window Box */}
      <div className="flex justify-center p-2 bg-[#F1F1F4] rounded-2xl border border-[#E3E3E9] shadow-inner overflow-x-auto">
        <div
          style={{
            width: `${targetWidth}px`,
            minHeight: `${targetMinHeight}px`,
          }}
          className="relative bg-[#ECE9D8] rounded-t-lg rounded-b-md border-2 border-[#7F9DB9] shadow-xl flex flex-col font-sans transition-all text-[#111827]"
        >
          {/* Classic Window Title Bar */}
          <div className="bg-gradient-to-r from-[#0055EA] via-[#0A64E8] to-[#1E82F0] text-white px-2.5 py-1.5 rounded-t-[5px] flex items-center justify-between select-none shadow-xs">
            <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-tight truncate max-w-[280px]">
              <Sparkles className="w-3.5 h-3.5 text-[#FED766]" />
              <span>{windowTitle}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default">
                _
              </div>
              <div className="w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default">
                □
              </div>
              <button
                onClick={handleCloseWindow}
                className="w-3.5 h-3.5 rounded-xs bg-[#E81123] hover:bg-[#F1424F] text-white flex items-center justify-center text-[10px] cursor-pointer"
                title="Закрыть окно"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Window Client Area */}
          <div
            style={{ backgroundColor: rootBg }}
            className="relative p-4 flex-1 flex flex-col items-center justify-start transition-colors"
          >
            {hasGridWidgets ? (
              <div
                style={{
                  gridTemplateColumns: `repeat(${maxGridCols}, minmax(0, 1fr))`,
                }}
                className="grid gap-1.5 w-full justify-items-center items-center"
              >
                {topWidgets.map((w) => renderWidget(w))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-start w-full space-y-1">
                {topWidgets.map((w) => renderWidget(w))}
              </div>
            )}

            {/* Popup Dialog for messagebox */}
            {activeDialog && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
                <div className="bg-white border-2 border-[#0055EA] rounded-lg shadow-2xl p-4 max-w-[320px] w-full space-y-3 font-sans">
                  <div className="flex items-start gap-3">
                    {activeDialog.kind === "info" && (
                      <Info className="w-6 h-6 text-[#2563EB] shrink-0" />
                    )}
                    {activeDialog.kind === "warning" && (
                      <AlertTriangle className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    )}
                    {activeDialog.kind === "error" && (
                      <AlertCircle className="w-6 h-6 text-[#EF4444] shrink-0" />
                    )}
                    {activeDialog.kind === "вопрос" && (
                      <HelpCircle className="w-6 h-6 text-[#8B5CF6] shrink-0" />
                    )}
                    <div className="flex-1 space-y-1">
                      <div className="font-bold text-[13px] text-[#111827]">
                        {activeDialog.title || "Сообщение"}
                      </div>
                      <div className="text-[12px] text-[#4B5563] leading-relaxed break-words whitespace-pre-wrap">
                        {activeDialog.message}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => setActiveDialog(null)}
                      className="px-4 py-1 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827] text-[12px] font-bold rounded border border-[#9CA3AF] cursor-pointer"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Signature below window */}
      <div className="text-center text-[11px] text-[#63636E] italic">
        Это упрощённый предпросмотр. Настоящее окно — в VS Code.
      </div>
    </div>
  );
};
