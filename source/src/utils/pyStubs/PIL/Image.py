"""Минимальная замена Pillow Image для демонстрации загрузки и размера."""

class _Image:
    def __init__(self, source):
        self.source = str(source)
        self.size = (800, 600)

    def thumbnail(self, size):
        self.size = size

def open(stream):
    return _Image(stream.getvalue())
