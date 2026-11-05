# OS module stub for Skulpt

class _Path:
    def join(self, *parts):
        res = []
        for p in parts:
            p_str = str(p).rstrip("/\\")
            if p_str:
                res.append(p_str)
        return "/".join(res)

    def isdir(self, p):
        s = str(p).strip()
        if not s:
            return False
        return not any(s.lower().endswith(ext) for ext in [".mp3", ".wav", ".ogg", ".txt", ".json", ".jpg", ".png", ".py"])

    def isfile(self, p):
        s = str(p).strip()
        if not s:
            return False
        return any(s.lower().endswith(ext) for ext in [".mp3", ".wav", ".ogg", ".txt", ".json", ".jpg", ".png", ".py"])

    def exists(self, p):
        return bool(str(p).strip())

    def split(self, p):
        s = str(p)
        if "/" in s:
            parts = s.rsplit("/", 1)
            return (parts[0], parts[1])
        if "\\" in s:
            parts = s.rsplit("\\", 1)
            return (parts[0], parts[1])
        return ("", s)

    def splitext(self, p):
        s = str(p)
        dot = s.rfind(".")
        if dot != -1 and dot > s.rfind("/"):
            return (s[:dot], s[dot:])
        return (s, "")

path = _Path()

DEFAULT_MUSIC_FILES = [
    "01 Intro.mp3",
    "02 Synthwave Dream.mp3",
    "03 Cyberpunk City.ogg",
    "04 Neon Lights.wav",
    "05 Retro Funk.MP3",
    "cover.jpg",
    "readme.txt",
    "Старое"
]

def listdir(p="."):
    p_str = str(p).strip()
    if not p_str:
        raise FileNotFoundError("[Errno 2] No such file or directory: ''")
    return list(DEFAULT_MUSIC_FILES)
