# Pygame & Pygame.mixer stub for Skulpt

class _Music:
    def __init__(self):
        self._current_track = ""
        self._is_playing = False
        self._is_paused = False
        self._volume = 1.0

    def load(self, path):
        self._current_track = str(path)

    def play(self, loops=0, start=0.0):
        self._is_playing = True
        self._is_paused = False

    def pause(self):
        if self._is_playing:
            self._is_paused = True

    def unpause(self):
        if self._is_playing:
            self._is_paused = False

    def stop(self):
        self._is_playing = False
        self._is_paused = False

    def set_volume(self, vol):
        self._volume = max(0.0, min(1.0, float(vol)))

    def get_volume(self):
        return self._volume

    def get_busy(self):
        return self._is_playing and not self._is_paused

class _Sound:
    def __init__(self, file):
        self.file = str(file)
        self._volume = 1.0
        self._play_count = 0

    def play(self, loops=0, maxtime=0, fade_ms=0):
        self._play_count = self._play_count + 1
        mixer._sound_queue.append((self.file, self._volume))

    def stop(self):
        pass

    def set_volume(self, vol):
        self._volume = max(0.0, min(1.0, float(vol)))

    def get_volume(self):
        return self._volume

class _Mixer:
    def __init__(self):
        self.music = _Music()
        self._sound_queue = []

    def init(self, *a, **kw):
        pass

    def Sound(self, file):
        return _Sound(file)

    def stop(self):
        self.music.stop()
        self._sound_queue = []

    def quit(self):
        self.stop()

mixer = _Mixer()

def init():
    pass

def quit():
    mixer.quit()
