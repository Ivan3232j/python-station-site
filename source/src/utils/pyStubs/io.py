"""Минимальная BytesIO для примера с изображениями в браузерном тренажёре."""

class BytesIO:
    def __init__(self, value=b""):
        self.value = value

    def getvalue(self):
        return self.value

    def read(self):
        return self.value
