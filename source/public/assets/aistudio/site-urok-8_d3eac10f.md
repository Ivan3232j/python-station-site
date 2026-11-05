# ProTeam Labs. Урок 8

**Номер:** 8 (модуль 2)
**Главная тема:** программа читает папку на диске и играет музыку. Модуль `os`, диалог выбора папки, `pygame.mixer`, ползунок громкости.

---

## Сюжет

### Письмо Заказчика

> **ВХОДЯЩЕЕ СООБЩЕНИЕ**
> **ОТПРАВИТЕЛЬ: ЗАКАЗЧИК**
>
> У меня на диске лежит двести треков. Чтобы послушать, я каждый раз лезу в папку и щёлкаю по файлу.
>
> Сделайте плеер. Пусть сам найдёт всю музыку в папке и покажет списком.

### Задача на день

Плеер: выбрать папку, увидеть список треков, играть, ставить на паузу, листать. И громкость ползунком.

### Реплики персонажей

**Алёна, продюсер** (в начале):
> До сих пор программа работала только со своими данными. Сегодня она впервые полезет в чужую папку на диске.

**Макс, техлид** (после истории про iPod):
> Внутри айпода была та же задача, что у вас: прочитать папку, показать список, нажать и играть.

**Ева, QA-инженер** (про диалог выбора папки):
> Первым делом я всегда жму «Отмена». Половина программ на этом падает.

**Ева, QA-инженер** (про паузу):
> Поставьте на паузу и подождите. Без проверки `is_paused` плеер решит, что песня кончилась, и включит следующую.

**Алёна, продюсер** (в конце дня):
> Восьмой день закрыт. На следующем занятии сделаем плейлисты — и вот там нам наконец понадобятся классы.

### Ответ Заказчика в конце

> Поставил вашу папку, нажал — играет. Громкость работает, листается.
>
> Одного не хватает: я хочу свой список. Не всю папку подряд, а выбранные треки в своём порядке.

---

## Теория

### os.listdir показывает всё подряд

```python
import os

names = os.listdir("C:/Music")
print(names)
```

Вернётся примерно такое:

```
['01 Intro.mp3', 'cover.jpg', 'readme.txt', 'Старое', '02 Outro.MP3']
```

Файлы, картинки, текст, папки — всё вперемешку. Нам нужна только музыка.

### endswith проверяет конец строки

```python
"song.mp3".endswith(".mp3")   # True
"cover.jpg".endswith(".mp3")  # False
```

Подпапки отсеиваются сами — у них нет расширения.

### Зачем .lower()

| Выражение | Результат |
|---|---|
| `"song.mp3".endswith(".mp3")` | `True` |
| `"SONG.MP3".endswith(".mp3")` | **`False`** |
| `"SONG.MP3".lower()` | `"song.mp3"` |
| `"SONG.MP3".lower().endswith(".mp3")` | `True` |

Файл может называться `SONG.MP3` заглавными буквами — такие попадаются, особенно если музыку скачивали давно. Без приведения к маленьким буквам он молча пропадёт из списка, и ребёнок будет искать, куда делся трек.

**Важно:** в список кладём исходное имя, а не маленькими буквами. Иначе файл не найдётся на диске.

### Путь в коде писать нельзя

У каждого музыка лежит в своём месте. Папку выбирает человек:

```python
from tkinter import filedialog

chosen = filedialog.askdirectory()
```

Открывается обычное окно выбора папки. Если нажали «Отмена» — вернётся пустая строка. Без проверки программа пойдёт читать папку с пустым именем и упадёт.

### pygame.mixer

```python
import pygame

pygame.mixer.init()
```

`init()` вызывается один раз в начале программы. Без него звука не будет и программа упадёт при первой попытке играть.

`load` открывает файл, `play` запускает воспроизведение. Загружен может быть только один трек за раз: новый `load` выкидывает предыдущий.

### os.path.join

```python
os.path.join("C:/Music", "Моя песня.mp3")
# 'C:/Music/Моя песня.mp3'
```

Склеивает путь к папке и имя файла, сам подставляя разделитель. Писать `folder + "/" + name` тоже работает, но `join` правильнее и не сломается на другой системе.

### Scale — ползунок

Новый виджет. Три тонкости:

- `set_volume` ждёт число от 0.0 до 1.0, а ползунок даёт от 0 до 100. Поэтому делим на 100.
- Функция под `command` у `Scale` обязана принимать параметр — туда приходит новое значение. Причём приходит **строкой**, отсюда `int(value)`. Та же история, что с `entry.get()`.
- `from_` пишется с подчёркиванием, потому что `from` — служебное слово Python.

### Список как кольцо

```python
(current_index + 1) % len(tracks)
```

Остаток от деления заворачивает список в кольцо. После последнего трека идёт первый — без двух проверок на границы.

Посчитать на бумаге: треков 5, текущий 4 → `(4 + 1) % 5 = 0`. Текущий 0, назад → `(0 - 1) % 5 = 4`.

### Главная ловушка урока

`get_busy()` возвращает `False` в **двух разных случаях**: трек кончился и трек на паузе.

| Состояние плеера | Что видно в коде | Что делать |
|---|---|---|
| Программа только запустилась | `current_index = -1` | Ничего не играло — переключать нечего |
| Трек играет | `get_busy() = True` | Не трогаем |
| Трек на паузе | `is_paused = True` | Не трогаем |
| Трек доиграл | всё `False`, индекс есть | Включаем следующий |

Без проверки `is_paused` плеер на паузе через полсекунды включит следующую песню. Без проверки `current_index >= 0` он сам включит первый трек сразу после запуска программы.

### Почему нет кнопки «Стоп»

Она делала бы то же, что пауза, только хуже: трек обрывается, а через полсекунды автопереход включает следующий. Чтобы этого не было, пришлось бы заводить второй флаг — лишний код ради кнопки, которой никто не пользуется.

### Frame — коробка для виджетов

Четыре кнопки стоят в строчку, потому что лежат внутри рамки, а не прямо в окне. Внутри рамки свой `grid`, снаружи она сама кладётся через `pack`.

Так можно мешать `pack` и `grid` в одном окне — запрет из пятого урока действует только внутри одного контейнера.

---

## Код с построчным разбором

### Константы и переменные

```python
import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
import pygame
import os
import json

SETTINGS = "player_settings.json"

folder = ""
tracks = []
current_index = -1
is_paused = False

pygame.mixer.init()
```

| Строка | Что делает |
|---|---|
| `from tkinter import filedialog` | Диалог выбора папки. Отдельный импорт, как `messagebox` |
| `import pygame` | Звук. Уже стоит на всех машинах |
| `import os` | Работа с папками и путями |
| `SETTINGS = ...` | Имя файла настроек. Заглавными — значит, это константа, её не меняют |
| `folder = ""` | Путь к папке с музыкой. Пока пусто |
| `tracks = []` | Список имён файлов |
| `current_index = -1` | Какой трек играет. Минус один значит «ничего не играло» |
| `is_paused = False` | Стоит ли пауза |
| `pygame.mixer.init()` | Включить звук. Один раз, в начале |

### get_tracks — найти музыку в папке

```python
def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result
```

| Строка | Что делает |
|---|---|
| `result = []` | Пустой список, куда сложим только музыку |
| `names = os.listdir(path)` | Все имена в папке: файлы, картинки, подпапки |
| `for i in range(len(names)):` | Перебираем по очереди |
| `name = names[i]` | Текущее имя. Отдельная переменная, чтобы дальше не писать `names[i]` четыре раза |
| `small = name.lower()` | То же имя маленькими буквами — только для проверки |
| `if small.endswith(...)` | Три расширения через `or`. Хватит одного совпадения |
| `result.append(name)` | Кладём **исходное** имя, не `small` |
| `result.sort()` | По алфавиту. Файлы с номерами в начале встанут по порядку |
| `return result` | Отдаём готовый список |

### refresh — показать список

```python
def refresh():
    listbox.delete(0, "end")
    for i in range(len(tracks)):
        listbox.insert("end", tracks[i])

    status.config(text="Треков: " + str(len(tracks)))
```

| Строка | Что делает |
|---|---|
| `listbox.delete(0, "end")` | Стереть все строки от первой до последней |
| `for i in range(len(tracks)):` | Пройти по всем трекам |
| `listbox.insert("end", tracks[i])` | Добавить строку в конец списка |
| `status.config(...)` | Написать, сколько всего треков. `str()` обязателен — число с текстом не склеивается |

Тот же `refresh`, что в ToDo-листе и в таверне. Третий проект подряд с этим приёмом: стираем всё и рисуем заново.

### choose_folder — выбрать папку

```python
def choose_folder():
    global folder, tracks, current_index

    chosen = filedialog.askdirectory()
    if chosen == "":
        return

    folder = chosen
    tracks = get_tracks(folder)
    current_index = -1
    pygame.mixer.music.stop()
    refresh()
    save_settings()
```

| Строка | Что делает |
|---|---|
| `global folder, tracks, current_index` | Функция меняет три переменные снаружи. Через запятую |
| `chosen = filedialog.askdirectory()` | Открыть окно выбора папки |
| `if chosen == "": return` | Нажали «Отмена» — выходим и ничего не ломаем |
| `folder = chosen` | Запоминаем выбранный путь |
| `tracks = get_tracks(folder)` | Собираем музыку из новой папки |
| `current_index = -1` | Сбрасываем: из новой папки ещё ничего не играло |
| `pygame.mixer.music.stop()` | Останавливаем старый трек — он из другой папки |
| `refresh()` | Перерисовываем список |
| `save_settings()` | Запоминаем папку на следующий запуск |

### play_index — включить трек по номеру

```python
def play_index(index):
    global current_index, is_paused

    if len(tracks) == 0:
        return

    current_index = index
    path = os.path.join(folder, tracks[current_index])

    pygame.mixer.music.load(path)
    pygame.mixer.music.play()
    is_paused = False

    listbox.selection_clear(0, "end")
    listbox.selection_set(current_index)
    status.config(text="Играет: " + tracks[current_index])
```

| Строка | Что делает |
|---|---|
| `if len(tracks) == 0: return` | Папка пустая — играть нечего |
| `current_index = index` | Запоминаем, какой трек теперь текущий |
| `path = os.path.join(...)` | Собираем полный путь: папка плюс имя файла |
| `pygame.mixer.music.load(path)` | Открываем файл |
| `pygame.mixer.music.play()` | Запускаем |
| `is_paused = False` | Новый трек играет, значит паузы нет |
| `listbox.selection_clear(0, "end")` | Снять старое выделение |
| `listbox.selection_set(current_index)` | Подсветить тот трек, который играет |
| `status.config(...)` | Написать имя внизу окна |

**Зачем отдельная функция.** Её вызывают четыре места: кнопка «Играть», `<<`, `>>` и автопереход. Если бы кода не было в отдельной функции, его пришлось бы написать четыре раза.

### play — кнопка «Играть»

```python
def play():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showerror("Ошибка", "Выберите трек в списке")
        return

    play_index(selected[0])
```

| Строка | Что делает |
|---|---|
| `selected = listbox.curselection()` | Какая строка выделена. Возвращает набор, а не число |
| `if len(selected) == 0:` | Ничего не выбрано |
| `play_index(selected[0])` | Берём номер из набора и отдаём в `play_index` |

### pause — одна кнопка в обе стороны

```python
def pause():
    global is_paused

    if current_index == -1:
        return

    if is_paused:
        pygame.mixer.music.unpause()
        is_paused = False
        status.config(text="Играет: " + tracks[current_index])
    else:
        pygame.mixer.music.pause()
        is_paused = True
        status.config(text="Пауза")
```

| Строка | Что делает |
|---|---|
| `if current_index == -1: return` | Ничего не играло — ставить на паузу нечего |
| `if is_paused:` | Уже на паузе — значит, надо продолжить |
| `unpause()` | Продолжить с того же места |
| `is_paused = False` | Запомнить новое состояние |
| `else:` | Играло — значит, надо остановить |
| `pause()` | Поставить на паузу |
| `is_paused = True` | Запомнить |

Та же идея, что кнопка «Сделано» в ToDo-листе: одна кнопка, два состояния, флаг помнит текущее.

### next_track и prev_track

```python
def next_track():
    if len(tracks) == 0:
        return
    play_index((current_index + 1) % len(tracks))


def prev_track():
    if len(tracks) == 0:
        return
    play_index((current_index - 1) % len(tracks))
```

| Строка | Что делает |
|---|---|
| `if len(tracks) == 0: return` | Список пуст — листать нечего |
| `(current_index + 1) % len(tracks)` | Следующий номер, с заворотом на начало |
| `(current_index - 1) % len(tracks)` | Предыдущий, с заворотом на конец |

Разбор на числах: 5 треков, текущий 4. `4 + 1 = 5`, `5 % 5 = 0` — первый трек. Текущий 0, назад: `0 - 1 = -1`, `-1 % 5 = 4` — последний.

### set_volume — громкость

```python
def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)
```

| Часть строки | Что делает |
|---|---|
| `def set_volume(value):` | Параметр обязателен — `Scale` передаёт туда новое значение ползунка |
| `int(value)` | Значение приходит строкой. Превращаем в число |
| `/ 100` | Ползунок даёт 0–100, а `set_volume` ждёт от 0.0 до 1.0 |

### check_music — автопереход

```python
def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()

    window.after(500, check_music)
```

| Условие | Зачем |
|---|---|
| `get_busy() == False` | Ничего не играет прямо сейчас |
| `is_paused == False` | И это не пауза. **Без этой строки плеер перескакивает на паузе** |
| `current_index >= 0` | И что-то уже играло раньше. Иначе плеер сам включит первый трек при запуске |
| `window.after(500, check_music)` | Через полсекунды проверить снова. Функция вызывает сама себя |

### save_settings и load_settings

```python
def save_settings():
    data = {"folder": folder, "volume": volume_scale.get()}
    with open(SETTINGS, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)


def load_settings():
    global folder, tracks
    try:
        with open(SETTINGS, "r", encoding="utf-8") as file:
            data = json.load(file)
    except FileNotFoundError:
        return

    folder = data.get("folder", "")
    volume_scale.set(data.get("volume", 70))

    if folder != "" and os.path.isdir(folder):
        tracks = get_tracks(folder)
        refresh()
```

| Строка | Что делает |
|---|---|
| `data = {"folder": ..., "volume": ...}` | Словарь из двух настроек. JSON с прошлого занятия |
| `volume_scale.get()` | Где сейчас стоит ползунок |
| `except FileNotFoundError: return` | Первый запуск, файла ещё нет. Это нормально |
| `data.get("folder", "")` | Нет такого ключа — берём пустую строку вместо падения |
| `os.path.isdir(folder)` | Проверяем, что папка существует. Она могла быть на флешке, которую вытащили |

### on_close — закрытие окна

```python
def on_close():
    save_settings()
    pygame.mixer.music.stop()
    window.destroy()


window.protocol("WM_DELETE_WINDOW", on_close)
```

| Строка | Что делает |
|---|---|
| `save_settings()` | Сохранить папку и громкость |
| `pygame.mixer.music.stop()` | Остановить музыку. Иначе она доиграет уже после закрытия окна |
| `window.destroy()` | Закрыть окно по-настоящему |
| `window.protocol("WM_DELETE_WINDOW", on_close)` | Перехватить нажатие на крестик |

---

## Полный файл

```python
import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
import pygame
import os
import json

SETTINGS = "player_settings.json"

folder = ""
tracks = []
current_index = -1
is_paused = False

pygame.mixer.init()

window = tk.Tk()
window.title("Плеер ProTeam Labs")
window.geometry("600x560")


def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result


def refresh():
    listbox.delete(0, "end")
    for i in range(len(tracks)):
        listbox.insert("end", tracks[i])

    status.config(text="Треков: " + str(len(tracks)))


def choose_folder():
    global folder, tracks, current_index

    chosen = filedialog.askdirectory()
    if chosen == "":
        return

    folder = chosen
    tracks = get_tracks(folder)
    current_index = -1
    pygame.mixer.music.stop()
    refresh()
    save_settings()


def play_index(index):
    global current_index, is_paused

    if len(tracks) == 0:
        return

    current_index = index
    path = os.path.join(folder, tracks[current_index])

    pygame.mixer.music.load(path)
    pygame.mixer.music.play()
    is_paused = False

    listbox.selection_clear(0, "end")
    listbox.selection_set(current_index)
    status.config(text="Играет: " + tracks[current_index])


def play():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showerror("Ошибка", "Выберите трек в списке")
        return

    play_index(selected[0])


def pause():
    global is_paused

    if current_index == -1:
        return

    if is_paused:
        pygame.mixer.music.unpause()
        is_paused = False
        status.config(text="Играет: " + tracks[current_index])
    else:
        pygame.mixer.music.pause()
        is_paused = True
        status.config(text="Пауза")


def next_track():
    if len(tracks) == 0:
        return
    play_index((current_index + 1) % len(tracks))


def prev_track():
    if len(tracks) == 0:
        return
    play_index((current_index - 1) % len(tracks))


def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)


def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()

    window.after(500, check_music)


def save_settings():
    data = {"folder": folder, "volume": volume_scale.get()}
    with open(SETTINGS, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)


def load_settings():
    global folder, tracks
    try:
        with open(SETTINGS, "r", encoding="utf-8") as file:
            data = json.load(file)
    except FileNotFoundError:
        return

    folder = data.get("folder", "")
    volume_scale.set(data.get("volume", 70))

    if folder != "" and os.path.isdir(folder):
        tracks = get_tracks(folder)
        refresh()


def on_close():
    save_settings()
    pygame.mixer.music.stop()
    window.destroy()


folder_button = tk.Button(window, text="Выбрать папку", font=("Arial", 13), command=choose_folder)
folder_button.pack(pady=10)

listbox = tk.Listbox(window, font=("Arial", 12), width=50, height=14)
listbox.pack(pady=5)

status = tk.Label(window, text="Папка не выбрана", font=("Arial", 11))
status.pack(pady=5)

buttons = tk.Frame(window)
buttons.pack(pady=5)

prev_button = tk.Button(buttons, text="<<", font=("Arial", 13), width=4, command=prev_track)
prev_button.grid(row=0, column=0, padx=3)

play_button = tk.Button(buttons, text="Играть", font=("Arial", 13), width=8, command=play)
play_button.grid(row=0, column=1, padx=3)

pause_button = tk.Button(buttons, text="Пауза", font=("Arial", 13), width=8, command=pause)
pause_button.grid(row=0, column=2, padx=3)

next_button = tk.Button(buttons, text=">>", font=("Arial", 13), width=4, command=next_track)
next_button.grid(row=0, column=3, padx=3)

volume_scale = tk.Scale(window, from_=0, to=100, orient="horizontal", label="Громкость", command=set_volume)
volume_scale.set(70)
volume_scale.pack(pady=5)

window.protocol("WM_DELETE_WINDOW", on_close)

load_settings()
check_music()

window.mainloop()
```

**Порядок в файле.** Сначала импорты и переменные, потом функции, потом виджеты, в самом конце запуск. Функции обращаются к виджетам — но это работает, потому что функции выполняются позже, уже после создания окна.

---

## Задания

### Проверьте себя

- «Отмена» в диалоге ничего не ломает, список остаётся прежним
- В списке только музыка: картинки, текст и подпапки отсеялись
- Файл `SONG.MP3` заглавными буквами тоже виден
- Русские имена и названия с пробелами играют
- Пауза останавливает, повторное нажатие продолжает с того же места
- **На паузе плеер не перескакивает на следующий трек** — подождать секунд десять
- Ползунок меняет громкость прямо во время игры
- `>>` и `<<` листают по кругу: после последнего идёт первый
- Трек доиграл до конца — следующий включился сам
- Закрыли окно, открыли — папка та же, громкость та же

### Задания со звёздочкой

**+1 SP. Спрятать расширение.**

В списке `track1.mp3` выглядит некрасиво. Убрать `.mp3` из показа, но оставить в пути к файлу.

```python
def refresh():
    listbox.delete(0, "end")
    for i in range(len(tracks)):
        name = tracks[i]
        dot = name.rfind(".")
        listbox.insert("end", name[0:dot])

    status.config(text="Треков: " + str(len(tracks)))
```

`rfind(".")` ищет точку **с конца** — на случай, если в имени несколько точек. Проверить: `"my.song.v2.mp3"` → `"my.song.v2"`.

Важно: режем только то, что показываем. В списке `tracks` имена остаются полными, иначе файл не найдётся.

**+1 SP. Случайный трек.**

```python
import random


def random_track():
    if len(tracks) == 0:
        return
    play_index(random.randint(0, len(tracks) - 1))


random_button = tk.Button(buttons, text="?", font=("Arial", 13), width=4, command=random_track)
random_button.grid(row=0, column=4, padx=3)
```

`len(tracks) - 1` — потому что `randint` включает оба конца, а последний индекс на единицу меньше длины.

**+2 SP. Режим «вперемешку».**

```python
shuffle_on = tk.BooleanVar()

shuffle_check = tk.Checkbutton(window, text="Вперемешку", variable=shuffle_on, font=("Arial", 11))
shuffle_check.pack()
```

В `check_music`:

```python
def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        if shuffle_on.get():
            random_track()
        else:
            next_track()

    window.after(500, check_music)
```

`BooleanVar` — коробочка для галочки. `get()` возвращает `True` или `False`.

**+2 SP. Двойной клик запускает трек.**

```python
def on_double_click(event):
    play()


listbox.bind("<Double-Button-1>", on_double_click)
```

Так делают все настоящие плееры. Функция обязана принимать `event`, даже если он не нужен.

---

## Ошибки, которые делали на уроке

### Плеер на паузе перескакивает на следующий трек

**Неправильно:**
```python
def check_music():
    if pygame.mixer.music.get_busy() == False and current_index >= 0:
        next_track()

    window.after(500, check_music)
```

Что происходило: поставил на паузу, через полсекунды заиграла следующая песня. Кнопка работает, список работает, а плеер живёт своей жизнью.

**Правильно:**
```python
def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()

    window.after(500, check_music)
```

### Плеер сам включает музыку при запуске

**Неправильно:**
```python
if pygame.mixer.music.get_busy() == False and is_paused == False:
    next_track()
```

Программа только открылась, ничего не играло — а `get_busy()` уже `False`. Через полсекунды заиграл первый трек.

**Правильно:** добавить `and current_index >= 0`.

### Часть треков не видна в списке

**Неправильно:**
```python
for i in range(len(names)):
    name = names[i]
    if name.endswith(".mp3"):
        result.append(name)
```

Файлы с расширением заглавными буквами пропадают.

**Правильно:**
```python
for i in range(len(names)):
    name = names[i]
    small = name.lower()
    if small.endswith(".mp3"):
        result.append(name)
```

### TypeError: set_volume() takes 0 positional arguments

**Неправильно:**
```python
def set_volume():
    pygame.mixer.music.set_volume(0.5)
```

**Правильно:**
```python
def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)
```

Функция под `command` у `Scale` обязана принимать значение.

### Громкость всегда на максимуме

**Неправильно:**
```python
pygame.mixer.music.set_volume(int(value))
```

`set_volume(70)` — это не 70 процентов, а число больше единицы, и звук остаётся максимальным.

**Правильно:** `int(value) / 100`.

### SyntaxError на from=0

Этот код не запустится вообще:

```
volume_scale = tk.Scale(window, from=0, to=100)
```

`from` — служебное слово Python. Правильно `from_=0`, с подчёркиванием:

```python
volume_scale = tk.Scale(window, from_=0, to=100)
```

### Файл не находится

**Неправильно:**
```python
path = folder + tracks[current_index]
```

Получается `C:/Musictrack1.mp3` — без разделителя.

**Правильно:**
```python
path = os.path.join(folder, tracks[current_index])
```

### Музыка играет после закрытия окна

Забыт `pygame.mixer.music.stop()` в `on_close`.

### FileNotFoundError при запуске

Папка из настроек исчезла — музыка лежала на флешке. Нужна проверка `os.path.isdir(folder)`.

---

## Упражнение Евы

**Баг-репорт:** «Нажала "Выбрать папку", потом сразу "Отмена". Программа упала».

**Код с багом:**

```python
def choose_folder():
    global folder, tracks

    folder = filedialog.askdirectory()
    tracks = get_tracks(folder)
    refresh()
```

**Что происходит:** `askdirectory()` при отмене возвращает пустую строку. `os.listdir("")` падает с `FileNotFoundError`.

**Исправленный код:**

```python
def choose_folder():
    global folder, tracks

    chosen = filedialog.askdirectory()
    if chosen == "":
        return

    folder = chosen
    tracks = get_tracks(folder)
    refresh()
```

Обратите внимание: результат диалога сначала кладём в **отдельную** переменную `chosen`, проверяем, и только потом записываем в `folder`. Если писать сразу в `folder`, при отмене старая папка затрётся пустой строкой — даже если потом выйти по `return`.

---

## История урока

### 23 октября 2001 года

Тысяча песен в кармане. Так Стив Джобс представил первый iPod — коробочку с жёстким диском на пять гигабайт.

До этого музыку носили на дисках: двенадцать песен, и чтобы послушать другие — меняй диск. В плеерах на флешках помещалось двадцать.

Революция была не в звуке и не в дизайне. Революция в том, что вся музыка лежала в одном месте и её можно было найти списком. Ровно то, что вы сегодня написали.

**Макс:**
> Внутри айпода была та же задача, что у вас: прочитать папку, показать список, нажать и играть.

**Вопрос классу:** сколько песен помещается в телефон сейчас? Разница впечатляет.

---

## Зачем это в реальных программах

**Чтение папки — основа файловых менеджеров.** Проводник Windows, галерея в телефоне, список документов в любом редакторе: программа читает папку, фильтрует по типу файла и показывает списком. Ровно `os.listdir` плюс `endswith`.

**Диалог выбора — стандартный элемент.** `filedialog` в tkinter, `OpenFileDialog` в Windows, `<input type="file">` в вебе. Везде одно: путь в коде не пишут, его выбирает человек.

**Проверка «а папка ещё на месте».** `os.path.isdir` — то, из-за чего программы не падают, когда вытащили флешку или удалили папку. Если открыть плейлист в любом плеере после удаления папки, он покажет серые строки вместо падения — это та же проверка.

**Одно значение, два смысла.** `get_busy() == False` при конце трека и при паузе — классическая проблема состояний. В играх так же: персонаж «не двигается» может значить «стоит», «в прыжке на верхней точке» или «мёртв». Поэтому состояние хранят явным флагом, а не выводят из косвенных признаков.

**Таймер вместо ожидания.** `window.after(500, ...)` проверяет состояние, не блокируя окно. В играх так устроен игровой цикл, в приложениях — опрос сервера, в браузере — `setInterval`.

---

## Идеи мини-игр для сайта

**«Что покажет get_busy».** Четыре карточки с состоянием плеера: только запустился, играет, на паузе, трек кончился. Для каждой выбрать, что вернёт `get_busy()` и должен ли сработать автопереход. После ответа — объяснение, почему двух проверок мало.

**«Отфильтруй папку».** Дан список из десяти имён: `song.mp3`, `COVER.JPG`, `track.MP3`, `Старое`, `notes.txt`, `beat.wav`. Игрок кликает те, которые должны попасть в плеер. Ловушки — заглавные расширения и папка без точки в имени.

**«Кольцо».** Список из пяти треков, текущий подсвечен. Игрок нажимает `<<` и `>>`, а рядом показывается выражение `(3 + 1) % 5 = 4`. Задача — пройти по кругу и вернуться в начало за минимум шагов. Учит читать остаток от деления.

---

## Ачивка урока

**«Пауза это не конец»**

За понимание, что одно и то же значение может означать разные вещи.
