import tkinter

CHOSEN_DIR = "C:/Music"

def askdirectory(**kw):
    tkinter.LOG.append(("filedialog", "Выбор папки", CHOSEN_DIR))
    return CHOSEN_DIR

def askopenfilename(**kw):
    return ""

def asksaveasfilename(**kw):
    return ""
