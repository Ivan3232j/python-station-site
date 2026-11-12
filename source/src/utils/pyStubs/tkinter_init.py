END = "end"
WIDGETS = []
LOG = []
AFTER_QUEUE = []

class Event:
    def __init__(self, char="", keysym=""):
        self.char = char
        self.keysym = keysym

class Widget:
    def __init__(self, master=None, **kw):
        self.master = master
        self.opts = dict(kw)
        self.layout = None
        self.kind = self.__class__.__name__
        WIDGETS.append(self)
    def pack(self, **kw):
        self.layout = ("pack", kw)
    def grid(self, **kw):
        self.layout = ("grid", kw)
    def place(self, **kw):
        self.layout = ("place", kw)
    def config(self, **kw):
        self.opts.update(kw)
    configure = config
    def cget(self, key):
        return self.opts.get(key, "")
    def bind(self, event, func):
        self.opts["bind:" + event] = func
    def destroy(self):
        if self in WIDGETS:
            WIDGETS.remove(self)

class Tk(Widget):
    def title(self, t):
        self.opts["title"] = t
    def geometry(self, g):
        self.opts["geometry"] = g
    def resizable(self, *a):
        pass
    def mainloop(self):
        pass
    def after(self, ms, func=None, *args):
        self.opts["after"] = (ms, func)
        if func is not None:
            AFTER_QUEUE.append((ms, func, args))
    def protocol(self, name, func=None):
        self.opts["protocol:" + str(name)] = func

class Label(Widget):
    pass

class Frame(Widget):
    pass

class Button(Widget):
    def invoke(self):
        if "command" in self.opts and self.opts["command"] is not None:
            self.opts["command"]()

class Entry(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.text = ""
    def get(self):
        return self.text
    def insert(self, index, s):
        s = str(s)
        if index == 0 or index == "0":
            self.text = s + self.text
        else:
            self.text = self.text + s
    def delete(self, first, last=None):
        self.text = ""

class Listbox(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.items = []
        self.item_opts = []
        self.selected = []
    def insert(self, index, *items):
        for it in items:
            if index == "end" or index == END:
                self.items.append(str(it))
                self.item_opts.append({})
            else:
                self.items.insert(int(index), str(it))
                self.item_opts.insert(int(index), {})
    def delete(self, first, last=None):
        if last == "end" or last == END:
            self.items = self.items[:int(first)]
            self.item_opts = self.item_opts[:int(first)]
        elif last is None:
            self.items.pop(int(first))
            self.item_opts.pop(int(first))
        else:
            del self.items[int(first):int(last) + 1]
            del self.item_opts[int(first):int(last) + 1]
        self.selected = []
    def get(self, first, last=None):
        if last is None:
            return self.items[int(first)]
        if last == "end" or last == END:
            return tuple(self.items[int(first):])
        return tuple(self.items[int(first):int(last) + 1])
    def size(self):
        return len(self.items)
    def curselection(self):
        return tuple(self.selected)
    def selection_set(self, index):
        self.selected = [int(index)]
    def selection_clear(self, first=0, last=None):
        self.selected = []
    def itemconfig(self, index, **kw):
        self.item_opts[int(index)].update(kw)
    itemconfigure = itemconfig

class StringVar:
    def __init__(self, value=""):
        self.v = value
    def get(self):
        return self.v
    def set(self, v):
        self.v = v

class IntVar(StringVar):
    def __init__(self, value=0):
        StringVar.__init__(self, value)

class BooleanVar(StringVar):
    def __init__(self, value=False):
        self.v = bool(value)
    def get(self):
        return bool(self.v)
    def set(self, v):
        self.v = bool(v)

class Scale(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.val = kw.get("from_", kw.get("from", 0))
    def get(self):
        return self.val
    def set(self, val):
        self.val = int(val) if isinstance(val, (int, float)) else val
        if "command" in self.opts and self.opts["command"] is not None:
            self.opts["command"](str(self.val))

class Checkbutton(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.var = kw.get("variable", None)
    def select(self):
        if self.var is not None:
            self.var.set(True)
    def deselect(self):
        if self.var is not None:
            self.var.set(False)
    def toggle(self):
        if self.var is not None:
            self.var.set(not self.var.get())
