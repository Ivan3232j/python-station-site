# ProTeam Labs. Уроки 6–7

Материалы для повторения. Урок 6 закрывает модуль 1, урок 7 открывает модуль 2.

---
---

# УРОК 6. Сдача проекта (ToDo-лист)

**Номер:** 6 (модуль 1, финальный)
**Главная тема:** виджет `Listbox`, выделение строки мышью, покраска отдельной строки. Сборка всего модуля в одно приложение.

---

## Сюжет

### Письмо Заказчика

> **ВХОДЯЩЕЕ СООБЩЕНИЕ**
> **ОТПРАВИТЕЛЬ: ЗАКАЗЧИК**
>
> Напоминаю первое письмо: мне нужен был трекер задач. Получил терминал, игру про угадайку и конвертер.
>
> Всё хорошее. Но срок — сегодня.
>
> Жду трекер. С окном. Сегодня принимаю.

Круг замыкается: в первом уроке Заказчик просил именно трекер задач.

### Задача на день

Собрать всё, чему научились за модуль, в одно приложение. Список, добавление, отметка «сделано», удаление, счётчик.

### Реплики персонажей

**Макс, техлид** (про перерисовку):
> Можно было бы менять строки по одной. Но тогда пришлось бы помнить, какая где. Проще стереть и нарисовать заново.

**Алёна, продюсер** (про итоги модуля):
> Шесть рабочих дней назад вы не знали, что такое рабочая папка. Посмотрите на список.

**Заказчик** (единственный раз без претензий):
> Принято. Вопросов нет. Следующий заказ пришлю на неделе.

---

## Теория

### Что такое Listbox

Готовый список. Умеет прокручиваться, в нём можно выделить строку мышью, и программа узнает, какую именно выбрали.

Собирать такое из `Label`-ов пришлось бы очень долго:

| Если делать из Label | Listbox |
|---|---|
| Каждую строку создавать отдельно | Всё это уже внутри |
| Хранить их все в списке, чтобы потом удалить | Строку можно выделить мышью |
| Самому ловить клик по нужной строке | Программа узнаёт, какую выбрали |
| Самому писать прокрутку, если не влезает | Прокрутка работает сама |

Главная мысль: не всё надо писать руками. Готовые виджеты существуют ровно для этого.

### Три команды, и всё

| Команда | Что делает | Важно |
|---|---|---|
| `listbox.delete(0, "end")` | Стереть все строки | От первой до последней |
| `listbox.insert("end", текст)` | Добавить строку в конец | Текстом, а не словарём |
| `listbox.itemconfig(i, fg="gray")` | Покрасить строку номер `i` | Только после того, как вставили |

Покрасить строку можно только после того, как она вставлена. Сделаете наоборот — цвет не появится, ошибки тоже.

### Главная идея: стереть и нарисовать заново

1. Стираем весь список — все строки до единой.
2. Проходим по `tasks` — вставляем строку за строкой.
3. Красим сделанные — и заодно считаем их.

Любое изменение — добавили, отметили, удалили — заканчивается вызовом `refresh()`. Следить за каждой строкой не надо.

### curselection возвращает набор, а не число

Если ничего не выбрано — он пустой. Если выбрана одна строка — в нём одно число, номер строки. Берём его как `selected[0]`.

Отсюда обязательная проверка `if len(selected) == 0`.

### not переворачивает True и False

Поэтому одна кнопка работает в обе стороны: нажали раз — задача посерела, нажали ещё — вернулась чёрной.

### Порядок в файле

Сначала виджеты, потом функции, потом кнопки.

Функции обращаются к виджетам, кнопки обращаются к функциям. Переставите — получите `NameError`.

---

## Код урока

### Шаг 1. Окно и список

```python
import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=8)

add_button = tk.Button(window, text="Добавить", font=("Arial", 12))
add_button.grid(row=1, column=1, padx=10, pady=8)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=10)

window.mainloop()
```

**Проверить:** окно открылось, список пустой, поле и кнопка сверху.

### Шаг 2. Добавление

```python
def refresh():
    listbox.delete(0, "end")

    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count = done_count + 1

    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))


def add_task():
    name = entry.get()

    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return

    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()
```

Кнопке добавить команду:

```python
add_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)
```

**Проверить:** задача появляется в списке, поле очищается. Пустая строка даёт предупреждение.

### Шаг 3. Отметить сделанной

```python
def toggle_task():
    selected = listbox.curselection()

    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return

    index = selected[0]
    tasks[index]["done"] = not tasks[index]["done"]
    refresh()


done_button = tk.Button(window, text="Сделано", font=("Arial", 12), command=toggle_task)
done_button.grid(row=3, column=0, padx=10, pady=5)
```

**Проверить:** выделить задачу мышью, нажать «Сделано» — строка стала серой, счётчик вырос. Нажать ещё раз — вернулась.

### Шаг 4. Удалить

```python
def delete_task():
    selected = listbox.curselection()

    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return

    index = selected[0]
    tasks.pop(index)
    refresh()


delete_button = tk.Button(window, text="Удалить", font=("Arial", 12), command=delete_task)
delete_button.grid(row=3, column=1, padx=10, pady=5)
```

Важно: удаляем из `tasks`, а не из `listbox`. Listbox перерисуется сам в `refresh`. Если удалить только из Listbox, задача исчезнет с экрана, но останется в программе и вернётся при следующем обновлении.

### Полный файл

```python
import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=8)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=10)


def refresh():
    listbox.delete(0, "end")

    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count = done_count + 1

    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))


def add_task():
    name = entry.get()

    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return

    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()


def toggle_task():
    selected = listbox.curselection()

    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return

    index = selected[0]
    tasks[index]["done"] = not tasks[index]["done"]
    refresh()


def delete_task():
    selected = listbox.curselection()

    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return

    index = selected[0]
    tasks.pop(index)
    refresh()


add_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)
add_button.grid(row=1, column=1, padx=10, pady=8)

done_button = tk.Button(window, text="Сделано", font=("Arial", 12), command=toggle_task)
done_button.grid(row=3, column=0, padx=10, pady=5)

delete_button = tk.Button(window, text="Удалить", font=("Arial", 12), command=delete_task)
delete_button.grid(row=3, column=1, padx=10, pady=5)

window.mainloop()
```

---

## Задания

### Проверьте себя

- Задача добавляется, поле после этого очищается
- Пустая строка даёт предупреждение, а не пустую задачу в списке
- Выделенная задача по кнопке «Сделано» становится серой
- Повторное нажатие возвращает её чёрной
- Счётчик показывает верные числа
- Удаление убирает именно выделенную задачу
- Ничего не выбрано — предупреждение, а не падение

### Задания со звёздочкой

**+1 SP. Добавление по Enter.**

```python
def add_task_by_enter(event):
    add_task()


entry.bind("<Return>", add_task_by_enter)
```

Тонкость: функция, привязанная через `bind`, обязательно принимает параметр `event` — tkinter передаёт туда данные о нажатии. Даже если он не нужен, его надо написать.

**+1 SP. Кнопка «Очистить всё» с подтверждением.**

```python
def clear_all():
    if len(tasks) == 0:
        return

    answer = messagebox.askyesno("Точно?", "Удалить все задачи?")
    if answer:
        tasks.clear()
        refresh()


clear_button = tk.Button(window, text="Очистить всё", font=("Arial", 12), command=clear_all)
clear_button.grid(row=5, column=0, columnspan=2, pady=5)
```

`askyesno` возвращает `True` или `False` — в отличие от `showwarning`, который ничего не возвращает.

**+2 SP. Сложность задачи в SP.**

```python
points_entry = tk.Entry(window, font=("Arial", 13), width=5)
points_entry.grid(row=1, column=2, padx=5)


def add_task():
    name = entry.get()
    points_text = points_entry.get()

    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return

    try:
        points = int(points_text)
    except ValueError:
        messagebox.showerror("Ошибка", "Сложность должна быть числом")
        return

    tasks.append({"name": name, "points": points, "done": False})
    entry.delete(0, "end")
    points_entry.delete(0, "end")
    refresh()


def refresh():
    listbox.delete(0, "end")

    done_count = 0
    earned = 0
    for i in range(len(tasks)):
        line = tasks[i]["name"] + " — " + str(tasks[i]["points"]) + " SP"
        listbox.insert("end", line)
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count = done_count + 1
            earned = earned + tasks[i]["points"]

    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)) +
                        ". Заработано " + str(earned) + " SP")
```

**+2 SP. Не добавлять задачу, если такая уже есть.**

```python
def add_task():
    name = entry.get()

    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return

    for i in range(len(tasks)):
        if tasks[i]["name"] == name:
            messagebox.showwarning("Повтор", "Такая задача уже есть")
            return

    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()
```

---

## Ошибки, которые делали на уроке

### Задачи задваиваются

**Неправильно:**
```python
def refresh():
    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
```

Что происходило: каждое обновление дописывало весь список заново поверх старого.

**Правильно:** первой строкой `listbox.delete(0, "end")`.

### Счётчик всегда 0 или 1

**Неправильно:**
```python
def refresh():
    listbox.delete(0, "end")

    for i in range(len(tasks)):
        done_count = 0
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            done_count = done_count + 1
```

Что происходило: `done_count` обнулялся на каждом шаге цикла. Ошибки при этом нет, программа просто врёт.

**Правильно:** `done_count = 0` **до** цикла.

### Серый цвет не появляется

**Неправильно:**
```python
listbox.itemconfig(i, fg="gray")
listbox.insert("end", tasks[i]["name"])
```

Красим строку, которой ещё нет.

**Правильно:** сначала `insert`, потом `itemconfig`.

### IndexError при нажатии «Сделано»

**Неправильно:**
```python
def toggle_task():
    index = listbox.curselection()[0]
```

Если ничего не выделено, `curselection()` пустой, и `[0]` падает.

**Правильно:** сначала проверить `if len(selected) == 0`.

### Удалилась не та задача

**Неправильно:**
```python
def delete_task():
    index = listbox.curselection()[0]
    listbox.delete(index)
```

Задача исчезла с экрана, но осталась в `tasks` и вернулась при следующем `refresh()`.

**Правильно:** `tasks.pop(index)` и потом `refresh()`.

---

## Упражнение Евы [НОВОЕ]

На уроке 6 отдельного эксперимента Евы не было — он появился на уроке 7. Вот вариант для сайта.

**Баг-репорт:** «Отметила задачу сделанной, потом добавила новую. Серая строка перескочила на другую задачу».

**Код с багом:**

```python
done_indexes = []


def toggle_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        return
    done_indexes.append(selected[0])
    refresh()


def refresh():
    listbox.delete(0, "end")
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if i in done_indexes:
            listbox.itemconfig(i, fg="gray")
```

**Что происходит:** отметка живёт отдельно от задачи — в списке номеров. Стоит удалить задачу или вставить новую в середину, и номера съезжают.

**Исправленный код:**

```python
def toggle_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        return
    index = selected[0]
    tasks[index]["done"] = not tasks[index]["done"]
    refresh()
```

Отметка должна лежать **внутри самой задачи**, а не в отдельном списке. Это ровно та же ошибка, что была у Кости на втором уроке с тремя параллельными списками.

---

## История урока

### 30 октября 1935 года

Испытания нового бомбардировщика Boeing. Самолёт поднялся, завалился и рухнул. Лётчик-испытатель погиб.

Причина: пилот забыл снять одну блокировку. Это был лучший лётчик в стране. Самолёт признали слишком сложным для человека.

Вместо этого придумали список на бумаге: пункт за пунктом, отметил — пошёл дальше. С тех пор ни один самолёт в мире не взлетает без чек-листа.

**Макс:**
> Список дел нужен не забывчивым. Он нужен, чтобы не держать всё в голове и не проверять себя каждую минуту.

**Вопрос классу:** кто пользуется списками дел? Обычно считают, что это для тех, кто забывает.

---

## Что умеет команда за шесть дней

| День | Тема | Что получилось |
|---|---|---|
| 1 | Проект и запуск | Терминал с меню, калькулятор на `split` |
| 2 | Словари | Хранение задач, которое не разваливается |
| 3 | Первое окно | Кнопка и реакция на нажатие |
| 4 | Поле ввода | Угадай число с цветным ответом |
| 5 | Сетка и защита | Конвертер, который не падает |
| 6 | Трекер | Приложение, которым можно пользоваться |

---

## Одна вещь осталась сломанной

Закройте программу и откройте снова. Задач нет.

**Почему так.** Список `tasks` живёт только пока программа запущена. Закрыли — память освободилась, всё пропало.

**Что дальше.** Модуль 2 начнётся ровно с этого: научим программу запоминать данные между запусками.

---

## Зачем это в реальных программах [НОВОЕ]

**Список с выделением — базовый элемент.** Проводник Windows, плейлист в музыкальном приложении, список чатов в мессенджере, инвентарь в игре. Везде: список элементов, выделение, действие над выделенным.

**Перерисовка вместо точечных правок.** Это главный принцип современных интерфейсов. React, Flutter, игровые движки — все работают так: данные изменились, экран рисуется заново из данных. Следить за каждым элементом вручную перестали лет пятнадцать назад.

**Данные отдельно, экран отдельно.** `tasks` — это правда, `listbox` — это картинка. Удалять надо из правды. В больших программах за этим следят специально, и путаница между ними — одна из самых частых причин странных багов.

---

## Идеи мини-игр для сайта [НОВОЕ]

**«Что покажет счётчик».** Дан код `refresh()` с внесённой ошибкой (`done_count` внутри цикла, забытый `delete`, `itemconfig` до `insert`) и список из пяти задач. Три варианта результата, выбрать правильный.

**«Данные или картинка».** Карточки с действиями: «удалить задачу», «покрасить строку», «посчитать сделанные», «добавить новую». Для каждого выбрать, где это должно происходить — в `tasks` или в `listbox`. Объяснение после ответа.

**«Собери refresh».** Шесть строк функции вперемешку, надо расставить по порядку. Ловушки: `delete` должен быть первым, `itemconfig` после `insert`, `done_count = 0` до цикла.

---

## Ачивка модуля

**«Закрыл спринт»**

Финальная ачивка первого модуля. Выдаётся за проект, сданный в срок: не за красивый код и не за скорость, а за то, что работа доведена до конца и её можно отдать человеку.

Вручается торжественно, поимённо.

---
---

# УРОК 7. Таверна героев

**Номер:** 7 (**модуль 2**, первый урок)
**Главная тема:** файлы и JSON. Программа запоминает данные после закрытия окна.

---

## Сюжет

### Письмо Заказчика

> **ВХОДЯЩЕЕ СООБЩЕНИЕ**
> **ОТПРАВИТЕЛЬ: ЗАКАЗЧИК**
>
> Ваш трекер отличный. Вбил туда двадцать дел на неделю, выключил ноутбук.
>
> Утром запускаю — список пустой. Мне каждый раз печатать заново?
>
> И кстати: мы стартуем RPG. Нужен реестр персонажей. Чтобы ни один маг не исчез.

### Техзадание

- Три поля: имя героя, класс, уровень
- `Listbox` со всеми героями
- Три кнопки: нанять, прокачать, исключить
- **Главное:** файл `heroes.json` сохраняется сам при каждом изменении

Окно вы уже умеете собирать — каркас даётся готовым файлом. Весь урок про последний пункт.

### Реплики персонажей

**Алёна, продюсер** (в начале):
> В прошлом модуле всё жило в оперативной памяти. Закрыли окно — память очистилась. Сегодня подключаем диск.

**Макс, техлид** (после истории):
> Паять батарейки к вашим ноутбукам не будем. У нас есть диск и встроенный модуль `json`.

**Макс, техлид** (про строку вместо списка):
> Для Python это больше не список словарей, а длинная строка букв. Первый символ строки — скобка. Нужен переводчик.

**Ева, QA-инженер** (про режим `w`):
> Запомните среднюю колонку. Открыли файл в режиме `w` и программа упала — файл уже пустой. Записать не успели, а стереть успели.

**Ева, QA-инженер** (про эксперимент):
> Первый шаг не пропускайте. Копию делают перед любым экспериментом — это не перестраховка, а привычка.

**Макс, техлид** (про каркас):
> Каркас окна с полями и кнопками возьмите из раздачи. Верстать то, что уже умеете, мы время тратить не будем.

**Алёна, продюсер** (в конце дня):
> Седьмой день закрыт. На следующем занятии упакуем героев в классы и подружим их с JSON.

---

## Теория

### Откуда взялся JSON

**Задача.** Две программы должны обменяться данными. Они написаны на разных языках и работают на разных компьютерах.

**Решение, 2001 год.** Дуглас Крокфорд описал формат, который читает и компьютер, и человек. Назвал JSON. Он ничего не изобретал — просто записал правила, которые уже работали.

**Где вы с ним уже встречались, сами того не зная:**

| Где | Что там |
|---|---|
| `settings.json` | Настройки вашего VS Code. Вы его уже открывали |
| Сохранения игр | Minecraft, многие инди-игры — прогресс лежит текстом |
| Интернет | Открыли погоду в телефоне — приложению пришёл JSON |

### JSON — это почти Python

| Python | JSON |
|---|---|
| список `[ ]` | массив `[ ]` |
| словарь `{ }` | объект `{ }` |
| `"строка"` | `"строка"` |
| `42` | `42` |
| `True` / `False` | **`true` / `false`** |
| `None` | **`null`** |

Отличий всего два, и оба внизу: в JSON `true` и `false` пишутся с маленькой буквы, а пустота называется `null`.

И ещё: кавычки только двойные, одинарные JSON не понимает.

### Почему нельзя просто записать текстом

```python
heroes = [{"name": "Артас", "role": "Паладин", "level": 5}]

# записали в файл через str(heroes), прочитали обратно:
data = '[{"name": "Артас", "role": "Паладин", "level": 5}]'

print(data[0])
```

Ждём первого героя — `{"name": "Артас", ...}`.
Получаем — `[`.

Для Python это больше не список словарей, а длинная строка букв. Первый символ строки — квадратная скобка.

### Режимы "r" и "w" — читать или стирать

| Режим | Что значит | Поведение |
|---|---|---|
| `"r"` | read — читать | Только чтение, писать нельзя. Файла нет → `FileNotFoundError`. Файл не меняется |
| `"w"` | write — записать | Файла нет → создаст новый. Файл есть → **СТИРАЕТ ВСЁ сразу при открытии.** Стирает, даже если потом ничего не записали |
| `"a"` | append — дописать | Добавляет в конец файла. Ничего не стирает. Нам сегодня не нужен, но знать полезно |

Средняя строка — главная опасность урока. Проговорить отдельно и медленно.

### Две записи одного и того же

**Длинная запись:**

```python
file = open("heroes.json", "w", encoding="utf-8")
json.dump(heroes, file, ensure_ascii=False, indent=4)
file.close()
```

Открыли, записали, закрыли руками. Забудете `close` — данные останутся в буфере и на диск не попадут. Ошибки при этом не будет.

**Короткая запись:**

```python
with open("heroes.json", "w", encoding="utf-8") as file:
    json.dump(heroes, file, ensure_ascii=False, indent=4)
```

`with` значит «открыли, и он закроется сам». Даже если внутри случится ошибка. Закрывать руками не надо — и забыть нечего.

Работают одинаково. В интернете встретите обе. **Мы пишем вторую — её невозможно забыть закрыть.**

### Кракозябры в файле

Без настроек в файле окажется такое:

```
[{"name": "\u0410\u0440\u0442\u0430\u0441", "role": "\u041f\u0430\u043b", "level": 5}]
```

По умолчанию `json` боится русских букв и шифрует их кодами. И лепит всё в одну строку.

| Параметр | Что делает |
|---|---|
| `encoding="utf-8"` | Файл понимает русские буквы |
| `ensure_ascii=False` | Не шифровать их кодами |
| `indent=4` | Красивые отступы, файл читается глазами |

### Чтение и первый запуск

**Баг-репорт Евы:** запустила программу на чистом компьютере, где `heroes.json` ещё нет. Краш при старте.

Два разных `except`:

- **Файла нет** — это нормально, первый запуск. Молча начинаем с пустого списка.
- **Файл сломан** — это уже беда. Говорим вслух, а не делаем вид, что всё хорошо.

Голый `except:` ловил бы даже `Ctrl+C`. Пишем конкретные типы — правило из первого модуля.

---

## Код урока

### Заготовка: каркас окна (раздаётся детям)

```python
import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

name_label = tk.Label(window, text="Имя героя:", font=("Arial", 12))
name_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")

name_entry = tk.Entry(window, font=("Arial", 12), width=24)
name_entry.grid(row=1, column=1, padx=10, pady=5)

role_label = tk.Label(window, text="Класс:", font=("Arial", 12))
role_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")

role_entry = tk.Entry(window, font=("Arial", 12), width=24)
role_entry.grid(row=2, column=1, padx=10, pady=5)

level_label = tk.Label(window, text="Уровень:", font=("Arial", 12))
level_label.grid(row=3, column=0, padx=10, pady=5, sticky="e")

level_entry = tk.Entry(window, font=("Arial", 12), width=24)
level_entry.grid(row=3, column=1, padx=10, pady=5)

listbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

status = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))
status.grid(row=7, column=0, columnspan=2, pady=5)

# ЗДЕСЬ БУДУТ ФУНКЦИИ

# ЗДЕСЬ БУДУТ КНОПКИ

window.mainloop()
```

### Шаг 1. Две функции сохранения

```python
import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []


def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)


def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []
    except json.JSONDecodeError:
        messagebox.showerror("Файл повреждён",
                             "heroes.json не читается. Проверьте запятые.")
        heroes = []
```

**Проверьте:** в VS Code должна быть открыта **папка** проекта, а не один файл. Иначе `heroes.json` создастся неизвестно где, и вы его не найдёте. Это правило из первого урока курса.

### Шаг 2. Перерисовка списка

```python
def refresh():
    listbox.delete(0, "end")
    for i in range(len(heroes)):
        hero = heroes[i]
        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"]
        line = line + " (Ур. " + str(hero["level"]) + ")"
        listbox.insert("end", line)

    status.config(text="Героев в таверне: " + str(len(heroes)))
```

Ровно то же, что было в ToDo-листе на прошлом занятии. Стираем весь список и рисуем заново из `heroes`.

### Шаг 3. Нанять героя

```python
def add_hero():
    name = name_entry.get().strip()
    role = role_entry.get().strip()
    level_text = level_entry.get().strip()

    if name == "" or role == "" or level_text == "":
        messagebox.showwarning("Внимание", "Заполни все поля героя")
        return

    try:
        level = int(level_text)
    except ValueError:
        messagebox.showerror("Ошибка", "Уровень должен быть числом")
        return

    heroes.append({"name": name, "role": role, "level": level})
    save_heroes()
    refresh()

    name_entry.delete(0, "end")
    role_entry.delete(0, "end")
    level_entry.delete(0, "end")
```

**Главная строка:** `save_heroes()` сразу после `append`. Не в конце программы, не по кнопке «Сохранить» — а в тот же момент, когда данные изменились.

`.strip()` убирает пробелы по краям: имя из одних пробелов не пройдёт проверку.

### Шаг 4. Прокачать и исключить

```python
def level_up():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя в списке")
        return

    index = selected[0]
    heroes[index]["level"] = heroes[index]["level"] + 1
    save_heroes()
    refresh()
    listbox.selection_set(index)


def delete_hero():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя для удаления")
        return

    index = selected[0]
    heroes.pop(index)
    save_heroes()
    refresh()
```

**`selection_set`.** После перерисовки выделение слетает. Эта строка возвращает его обратно — иначе прокачать два раза подряд не получится.

**Не забыть:** перед `window.mainloop()` вызвать `load_heroes()` и `refresh()`. Иначе программа сохраняет, но при запуске ничего не читает.

### Полный файл

```python
import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

name_label = tk.Label(window, text="Имя героя:", font=("Arial", 12))
name_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")

name_entry = tk.Entry(window, font=("Arial", 12), width=24)
name_entry.grid(row=1, column=1, padx=10, pady=5)

role_label = tk.Label(window, text="Класс:", font=("Arial", 12))
role_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")

role_entry = tk.Entry(window, font=("Arial", 12), width=24)
role_entry.grid(row=2, column=1, padx=10, pady=5)

level_label = tk.Label(window, text="Уровень:", font=("Arial", 12))
level_label.grid(row=3, column=0, padx=10, pady=5, sticky="e")

level_entry = tk.Entry(window, font=("Arial", 12), width=24)
level_entry.grid(row=3, column=1, padx=10, pady=5)

listbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

status = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))
status.grid(row=7, column=0, columnspan=2, pady=5)


def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)


def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []
    except json.JSONDecodeError:
        messagebox.showerror("Файл повреждён",
                             "heroes.json не читается. Проверьте запятые.")
        heroes = []


def refresh():
    listbox.delete(0, "end")
    for i in range(len(heroes)):
        hero = heroes[i]
        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"]
        line = line + " (Ур. " + str(hero["level"]) + ")"
        listbox.insert("end", line)

    status.config(text="Героев в таверне: " + str(len(heroes)))


def add_hero():
    name = name_entry.get().strip()
    role = role_entry.get().strip()
    level_text = level_entry.get().strip()

    if name == "" or role == "" or level_text == "":
        messagebox.showwarning("Внимание", "Заполни все поля героя")
        return

    try:
        level = int(level_text)
    except ValueError:
        messagebox.showerror("Ошибка", "Уровень должен быть числом")
        return

    heroes.append({"name": name, "role": role, "level": level})
    save_heroes()
    refresh()

    name_entry.delete(0, "end")
    role_entry.delete(0, "end")
    level_entry.delete(0, "end")


def level_up():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя в списке")
        return

    index = selected[0]
    heroes[index]["level"] = heroes[index]["level"] + 1
    save_heroes()
    refresh()
    listbox.selection_set(index)


def delete_hero():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя для удаления")
        return

    index = selected[0]
    heroes.pop(index)
    save_heroes()
    refresh()


add_button = tk.Button(window, text="Добавить в отряд", font=("Arial", 12), command=add_hero)
add_button.grid(row=4, column=0, columnspan=2, pady=8)

level_button = tk.Button(window, text="Прокачать (+1 Ур.)", font=("Arial", 12), command=level_up)
level_button.grid(row=6, column=0, padx=10, pady=5)

delete_button = tk.Button(window, text="Исключить", font=("Arial", 12), command=delete_hero)
delete_button.grid(row=6, column=1, padx=10, pady=5)

load_heroes()
refresh()

window.mainloop()
```

---

## Задания

### Проверьте себя

- Герой добавляется, буква в поле уровня даёт ошибку, а не падение
- Закрыли окно, открыли — все герои на месте
- В файле читаемый русский, никаких `\u0410`, отступы на месте
- Прокачка сохраняется: уровень вырос и остался после перезапуска
- Удаление сохраняется: исключённый герой не возвращается
- Ничего не выбрано — предупреждение вместо ошибки

### Задания со звёздочкой

**+1 SP. Распустить таверну.**

```python
def clear_all():
    if len(heroes) == 0:
        return

    answer = messagebox.askyesno("Точно?", "Распустить всю таверну?")
    if answer:
        heroes.clear()
        save_heroes()
        refresh()


clear_button = tk.Button(window, text="Распустить таверну", font=("Arial", 12), command=clear_all)
clear_button.grid(row=8, column=0, columnspan=2, pady=5)
```

Важно: `save_heroes()` обязателен, иначе файл останется со старыми героями и они вернутся при следующем запуске.

**+1 SP. Золото.**

```python
heroes.append({"name": name, "role": role, "level": level, "gold": 100})
```

И в `refresh`:

```python
line = line + " · " + str(hero["gold"]) + " зол."
```

Тонкость: у старых героев в файле ключа `gold` нет, и программа упадёт с `KeyError`. Решение — брать через `get`:

```python
gold = hero.get("gold", 0)
line = line + " · " + str(gold) + " зол."
```

Это настоящая проблема из жизни: формат сохранения изменился, а старые файлы остались.

**+2 SP. Жалование всем.**

```python
def pay_salary():
    for i in range(len(heroes)):
        heroes[i]["gold"] = heroes[i].get("gold", 0) + 50

    save_heroes()
    refresh()


salary_button = tk.Button(window, text="Выдать жалование", font=("Arial", 12), command=pay_salary)
salary_button.grid(row=9, column=0, columnspan=2, pady=5)
```

**+2 SP. Сортировка по уровню.**

```python
def sort_by_level():
    for i in range(len(heroes)):
        for j in range(len(heroes) - 1):
            if heroes[j]["level"] < heroes[j + 1]["level"]:
                swap = heroes[j]
                heroes[j] = heroes[j + 1]
                heroes[j + 1] = swap

    save_heroes()
    refresh()
```

Это пузырьковая сортировка — медленная, но понятная и написана через `range(len())`. Коротко то же самое делается через `heroes.sort(key=...)`, но это тема следующих модулей.

---

## Ошибки, которые делали на уроке

### Файл heroes.json не находится

Открыт отдельный файл, а не папка проекта. `File → Open Folder`.

### Герои сохраняются, но при запуске список пустой

**Неправильно:**
```python
load_heroes()

window.mainloop()
```

Загрузили, но не нарисовали.

**Правильно:**
```python
load_heroes()
refresh()

window.mainloop()
```

### Герои не сохраняются вообще

**Неправильно:**
```python
def add_hero():
    heroes.append({"name": name, "role": role, "level": level})
    refresh()
```

Забыт `save_heroes()`.

### Прокачать два раза подряд не получается

**Неправильно:**
```python
def level_up():
    index = selected[0]
    heroes[index]["level"] = heroes[index]["level"] + 1
    save_heroes()
    refresh()
```

После `refresh()` выделение слетает, и второе нажатие выдаёт предупреждение «выбери героя».

**Правильно:** добавить `listbox.selection_set(index)` последней строкой.

### В файле \u0410\u0440\u0442\u0430\u0441

Забыты `ensure_ascii=False` и `encoding="utf-8"`.

### Весь файл в одну строку

Забыт `indent=4`. Работать будет, читать — нет.

---

## Упражнение Евы: правим сохранение руками

| Шаг | Что делать |
|---|---|
| **1. Сделайте копию** | Скопируйте `heroes.json` рядом и назовите `heroes_backup.json` |
| 2. Накрутите уровень | Откройте `heroes.json` в VS Code, поставьте `level` 9999, Ctrl + S |
| 3. Запустите программу | Герой стал 9999 уровня. Вы только что взломали собственное сохранение |
| 4. Сломайте файл | Сотрите одну запятую и запустите снова. Программа скажет, что файл повреждён |

**Ева:**
> Первый шаг не пропускайте. Копию делают перед любым экспериментом — это не перестраховка, а привычка.

**Что из этого следует.** Если файл сохранения лежит открытым текстом, его может править кто угодно. Поэтому в играх с рейтингами прогресс хранят на сервере, а не на компьютере игрока.

---

## История урока

### Тетрадка с паролями

**Как было в 80-е.** В картридже негде было хранить прогресс. Выдернул из розетки — начинай сначала.

Игра выдавала пароль из букв:

```
JOJOJ MMMMM
BBBBB AAAAA
```

Записал в тетрадку с ошибкой — потерял десять часов.

**Что придумали.** 1986 год. В картридж The Legend of Zelda впаяли круглую батарейку, чтобы микросхема памяти не гасла годами.

Батарейки садились через пятнадцать лет. Люди до сих пор перепаивают их, чтобы вернуть свои сохранения из детства.

**Макс:**
> Паять батарейки к вашим ноутбукам не будем. У нас есть диск и встроенный модуль `json`.

---

## Зачем это в реальных программах [НОВОЕ]

**Сохранения в играх.** Minecraft хранит настройки в JSON, многие инди-игры — весь прогресс. Отсюда же чит-коды через правку файла сохранения: если файл лежит текстом на диске игрока, защитить его нельзя.

**Настройки любой программы.** `settings.json` в VS Code, конфиги Discord, Spotify, браузеров. Когда вы меняете тему оформления, программа переписывает такой же файл.

**Обмен данными в интернете.** Открыли приложение погоды — оно отправило запрос на сервер и получило JSON. Открыли ленту в соцсети — то же самое. Почти весь интернет внутри устроен так: запрос ушёл, JSON пришёл.

**Миграция формата.** Задание со звёздочкой про золото — настоящая проблема индустрии. Вышло обновление игры, в сохранениях появилось новое поле, а у миллиона игроков старые файлы. Решают ровно так же: проверяют, есть ли ключ, и подставляют значение по умолчанию.

---

## Идеи мини-игр для сайта [НОВОЕ]

**«Найди ошибку в JSON».** Показан файл из 5–8 строк с одной поломкой: лишняя запятая, одинарные кавычки, `True` с большой буквы, незакрытая скобка. Игрок кликает на строку с ошибкой. Пять уровней по возрастанию сложности.

**«r, w или a».** Описание задачи: «прочитать настройки», «записать новый список», «дописать строку в лог». Выбрать режим. Ловушка-карточка: «открыть файл, чтобы посмотреть, и ничего не менять» — правильный ответ `"r"`, а не `"w"`.

**«Что останется в файле».** Показан код с `open` в режиме `"w"` и ошибкой посередине. Варианты: файл пустой / файл со старыми данными / файл с новыми данными. Правильный ответ — пустой, и это ровно то, о чём предупреждала Ева.

---

## Ачивка урока

**«Не выключай приставку»**

За программу, которая помнит свою работу после закрытия.

---
---
---

# СПРАВОЧНИК

## Виджеты и методы tkinter из уроков 3–7

### Окно

| Что | Зачем | Урок |
|---|---|---|
| `tk.Tk()` | Создать окно | 3 |
| `window.title("...")` | Заголовок окна | 3 |
| `window.geometry("400x250")` | Размер. Буква `x`, не умножение | 3 |
| `window.config(bg="...")` | Цвет фона окна | 4 |
| `window.mainloop()` | Держит окно открытым. Всегда последней строкой | 3 |

### Виджеты

| Что | Зачем | Урок |
|---|---|---|
| `tk.Label(window, text=..., font=...)` | Надпись | 3 |
| `tk.Button(window, text=..., command=...)` | Кнопка | 3 |
| `tk.Entry(window, font=..., width=...)` | Поле ввода | 4 |
| `tk.Listbox(window, width=..., height=...)` | Список с выделением | 6 |

### Размещение

| Что | Зачем | Урок |
|---|---|---|
| `.pack()` | Положить стопкой сверху вниз | 3 |
| `.pack(pady=20)` | То же, с отступом сверху и снизу | 3 |
| `.grid(row=, column=)` | Положить в клетку сетки | 5 |
| `.grid(columnspan=2)` | Растянуть на два столбца | 5 |
| `.grid(sticky="e")` | Прижать к правому краю клетки | 5 |
| `.grid(padx=, pady=)` | Отступы внутри клетки | 5 |

**`pack` и `grid` в одном окне мешать нельзя.** Окно не нарисуется, ошибки не будет.

### Изменение виджета

| Что | Зачем | Урок |
|---|---|---|
| `label.config(text="...")` | Поменять текст надписи | 3 |
| `label.config(fg="red")` | Поменять цвет текста | 4 |
| `button.config(text="...")` | Поменять текст кнопки | 3 |

### Поле ввода

| Что | Зачем | Урок |
|---|---|---|
| `entry.get()` | Забрать текст. **Всегда строка** | 4 |
| `entry.delete(0, "end")` | Очистить поле | 4 |
| `entry.insert(0, "текст")` | Вписать текст в поле | 5 |
| `entry.bind("<Return>", func)` | Реакция на Enter | 6 |

### Список

| Что | Зачем | Урок |
|---|---|---|
| `listbox.insert("end", текст)` | Добавить строку в конец | 6 |
| `listbox.delete(0, "end")` | Стереть все строки | 6 |
| `listbox.curselection()` | Какая строка выделена. Возвращает набор | 6 |
| `listbox.itemconfig(i, fg="gray")` | Покрасить строку. Только после `insert` | 6 |
| `listbox.selection_set(i)` | Выделить строку программно | 7 |

### Всплывающие окна

| Что | Когда | Урок |
|---|---|---|
| `messagebox.showerror(...)` | Считать невозможно | 5 |
| `messagebox.showwarning(...)` | Данные неправильные | 5 |
| `messagebox.showinfo(...)` | Посчитаем, но предупредим | 5 |
| `messagebox.askyesno(...)` | Вопрос с ответом да/нет. Возвращает `True`/`False` | 6 |

Импортируется отдельно: `from tkinter import messagebox`

### Не из tkinter, но нужно

| Что | Зачем | Урок |
|---|---|---|
| `random.randint(1, 100)` | Случайное число, оба конца входят | 4 |
| `math.ceil(x)` | Округление вверх | 5 |
| `f"{x:.2f}"` | Две цифры после точки | 5 |
| `global` | Функция меняет переменную снаружи | 4 |
| `json.dump(данные, file, ...)` | Сохранить в файл | 7 |
| `json.load(file)` | Прочитать из файла | 7 |
| `with open(..., "w", encoding="utf-8") as file:` | Открыть файл, закроется сам | 7 |

---

## Что знали до курса

- Циклы `for` и `while`
- Вложенные условия
- Типы `int` и `str`
- Списки
- `input()`
- Функции
- Классы с `__init__`, методы, наследование и `super()` — писали текстовые квесты

Немного видели `turtle` и `pygame`.

---

## Чему научились за модуль 1 и урок 7

**Инструменты:**
- VS Code: открытие папки проекта, запуск, терминал
- Правила имён файлов: латиница, без пробелов, не называть именами библиотек

**Язык:**
- Словари и списки словарей
- `split()` для разбора строки
- `float()` и дробные числа
- f-строки и форматирование `:.2f`
- `global`
- `try/except` с конкретными типами ошибок
- `random`, `math`

**Окна:**
- tkinter целиком: `Label`, `Button`, `Entry`, `Listbox`
- `pack` и `grid`
- `config` для изменения виджетов
- `messagebox` трёх видов
- Событийная модель: программа ждёт, а не выполняется сверху вниз

**Файлы:**
- Режимы `"r"`, `"w"`, `"a"`
- `with open`
- JSON: `dump`, `load`, `encoding`, `ensure_ascii`, `indent`
- Обработка первого запуска, когда файла ещё нет

**Чего ещё не было:** отладчика VS Code, разбиения проекта на свои модули, `Canvas`, Pillow, звука, pygame.
