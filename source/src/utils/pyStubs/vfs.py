
FILES = {}
class FileNotFoundError(Exception):
    pass
class _File:
    def __init__(self, name, mode):
        self.name = name
        self.mode = mode
        if "r" in mode:
            if name not in FILES:
                raise FileNotFoundError("[Errno 2] No such file or directory: '" + name + "'")
            self.data = FILES[name]
        elif "a" in mode:
            self.data = FILES.get(name, "")
        else:
            self.data = ""
        self.pos = 0
    def read(self):
        r = self.data[self.pos:]
        self.pos = len(self.data)
        return r
    def readlines(self):
        return [l + "\n" for l in self.read().split("\n") if l != ""]
    def write(self, s):
        self.data = self.data + s
    def close(self):
        if "r" not in self.mode:
            FILES[self.name] = self.data
    def __enter__(self):
        return self
    def __exit__(self, a, b, c):
        self.close()
def open(name, mode="r", encoding=None):
    return _File(name, mode)
