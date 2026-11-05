import tkinter
ANSWER_YES = True

def _show(kind, title, message):
    tkinter.LOG.append((kind, title, message))
    print("[" + kind + "] " + str(title) + ": " + str(message))

def showinfo(title="", message="", **kw):
    _show("info", title, message)
    return "ok"

def showwarning(title="", message="", **kw):
    _show("warning", title, message)
    return "ok"

def showerror(title="", message="", **kw):
    _show("error", title, message)
    return "ok"

def askyesno(title="", message="", **kw):
    _show("вопрос", title, message)
    return ANSWER_YES
