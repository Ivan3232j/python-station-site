
class JSONDecodeError(ValueError):
    pass
def _esc(s, ea):
    s = s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    return '"' + s + '"'
def dumps(o, ensure_ascii=True, indent=None, _lvl=0):
    pad = "" if indent is None else "\n" + " " * (indent * (_lvl + 1))
    end = "" if indent is None else "\n" + " " * (indent * _lvl)
    sep = ", " if indent is None else ","
    if o is None: return "null"
    if o is True: return "true"
    if o is False: return "false"
    if isinstance(o, (int, float)): return str(o)
    if isinstance(o, str): return _esc(o, ensure_ascii)
    if isinstance(o, (list, tuple)):
        if len(o) == 0: return "[]"
        return "[" + sep.join([pad + dumps(x, ensure_ascii, indent, _lvl + 1) for x in o]) + end + "]"
    if isinstance(o, dict):
        if len(o) == 0: return "{}"
        return "{" + sep.join([pad + _esc(str(k), ensure_ascii) + ": " + dumps(o[k], ensure_ascii, indent, _lvl + 1) for k in o]) + end + "}"
    raise TypeError("Object of type " + type(o).__name__ + " is not JSON serializable")
def dump(o, f, ensure_ascii=True, indent=None):
    f.write(dumps(o, ensure_ascii, indent))
class _P:
    def __init__(self, s):
        self.s = s
        self.i = 0
    def ws(self):
        while self.i < len(self.s) and self.s[self.i] in " \t\n\r":
            self.i += 1
    def err(self, m):
        raise JSONDecodeError(m + ": char " + str(self.i))
    def val(self):
        self.ws()
        if self.i >= len(self.s): self.err("Expecting value")
        c = self.s[self.i]
        if c == "{": return self.obj()
        if c == "[": return self.arr()
        if c == '"': return self.str_()
        for w, v in (("true", True), ("false", False), ("null", None)):
            if self.s[self.i:self.i + len(w)] == w:
                self.i += len(w)
                return v
        j = self.i
        while j < len(self.s) and self.s[j] in "-+.0123456789eE": j += 1
        if j == self.i: self.err("Expecting value")
        t = self.s[self.i:j]
        self.i = j
        if "." in t or "e" in t or "E" in t: return float(t)
        return int(t)
    def str_(self):
        self.i += 1
        r = ""
        while True:
            if self.i >= len(self.s): self.err("Unterminated string")
            c = self.s[self.i]
            if c == '"':
                self.i += 1
                return r
            if c == "\\":
                self.i += 1
                n = self.s[self.i]
                r += {"n": "\n", "t": "\t"}.get(n, n)
            else:
                r += c
            self.i += 1
    def arr(self):
        self.i += 1
        r = []
        self.ws()
        if self.s[self.i] == "]":
            self.i += 1
            return r
        while True:
            r.append(self.val())
            self.ws()
            c = self.s[self.i] if self.i < len(self.s) else ""
            self.i += 1
            if c == "]": return r
            if c != ",": self.err("Expecting ',' delimiter")
    def obj(self):
        self.i += 1
        r = {}
        self.ws()
        if self.s[self.i] == "}":
            self.i += 1
            return r
        while True:
            self.ws()
            if self.s[self.i] != '"': self.err("Expecting property name enclosed in double quotes")
            k = self.str_()
            self.ws()
            if self.s[self.i] != ":": self.err("Expecting ':' delimiter")
            self.i += 1
            r[k] = self.val()
            self.ws()
            c = self.s[self.i] if self.i < len(self.s) else ""
            self.i += 1
            if c == "}": return r
            if c != ",": self.err("Expecting ',' delimiter")
def loads(s):
    p = _P(s)
    v = p.val()
    p.ws()
    if p.i != len(s): p.err("Extra data")
    return v
def load(f):
    return loads(f.read())
