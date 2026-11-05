import { PythonLesson } from "./pythonCurriculum";

export const TKINTER_LESSONS: PythonLesson[] = [
  // ==========================================
  // УРОК 3: ПЕРВОЕ ОКНО
  // ==========================================
  {
    id: "tkinter_window",
    moduleId: "module_tkinter",
    title: "3. Первое окно: tk.Tk(), Label, Button и реакция на нажатие",
    icon: "AppWindow",
    shortDesc: "Программа перестаёт быть списком и начинает ждать событий",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nЗадачи хранятся, счёт идёт. Молодцы.\nПоказал бухгалтеру. Она посмотрела на чёрный экран, где надо вводить цифры, и ушла.\nСделайте нормально. С окном.",
        task: "Окно с кнопкой. Нажимаешь — что-то происходит. Больше сегодня ничего. Задачи переедут в окно позже.",
        quotes: [
          {
            speaker: "Макс, техлид",
            text: "До этого с компьютером разговаривали только текстом. Как вы два занятия подряд.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Скобки значат «вызови прямо сейчас». Кнопке нужно имя, а не результат. Я на этом ловлю всех.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Вот это уже можно показывать бухгалтеру. Терминал ей показывать больше не будем.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Третий день закрыт. У нас есть окно, и оно отвечает на нажатия.",
          },
        ],
      },
      summary:
        "Программа перестаёт быть списком. Раньше программа шла строго сверху вниз: спросить пользователя → посчитать результат → напечатать в терминал → конец. Дошла до последней строки и завершилась.\n\nТеперь всё иначе: окно висит на экране и терпеливо ждёт действий человека. Код срабатывает только тогда, когда что-то произошло: нажали кнопку, закрыли окно или нажали клавишу на клавиатуре.\n\nОдна строчка держит всё окно: window.mainloop(). Она бесконечно ждёт событий: не нажали ли кнопку, не закрыли ли окно. Это тот же цикл while, только писать его руками не нужно. Писать mainloop() нужно всегда самой последней строкой файла!\n\nЛюбой виджет создаётся ровно в два шага: сначала создаём объект tk.Label(window, ...), а затем обязательно кладём его в окно через метод label.pack(). Забыли вызвать pack() — виджет создан в памяти, но на экране его не будет видно.\n\nПараметр command кнопки Button — главная ловушка урока! Мы пишем command=check_connection БЕЗ скобок. Со скобками функция выполнится сразу же при запуске программы, а при кликах на кнопку не сработает ни разу.\n\nМетод config меняет то, что уже нарисовано: label.config(text=\"...\") обновляет текст существующей надписи прямо на глазах у пользователя без создания новых элементов.",
      keyRule:
        "Имя функции для кнопки передаётся БЕЗ скобок: command=check_connection. Скобки означают немедленный вызов при старте программы!",
      sections: [
        {
          heading: "Главный цикл обработки событий",
          text: "Метод mainloop() переводит программу в режим ожидания кликов и действий пользователя. Все виджеты создаются ДО него.",
          codeExample: {
            title: "Минимальное пустое окно",
            code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nwindow.mainloop()`,
            explanation:
              "tk.Tk() создаёт окно, geometry задаёт размеры ширина x высота, а mainloop() держит окно на экране.",
          },
        },
      ],
      steps: [
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nwindow.mainloop()`,
          output: "Окно Tkinter открыто и ждет событий",
          explanation:
            "Шаг 1. Пустое серое окно размером 400x250 с заголовком ProTeam Labs. mainloop() держит окно открытым.",
        },
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nlabel = tk.Label(window, text="Терминал студии", font=("Arial", 16))\nlabel.pack(pady=20)\n\nwindow.mainloop()`,
          output: "В окне появилась надпись «Терминал студии»",
          explanation:
            "Шаг 2. Создали надпись Label и положили её в окно методом pack(pady=20). pady=20 задаёт внешний отступ сверху и снизу.",
        },
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nlabel = tk.Label(window, text="Терминал студии", font=("Arial", 16))\nlabel.pack(pady=20)\n\nbutton = tk.Button(window, text="Проверить связь", font=("Arial", 14))\nbutton.pack(pady=10)\n\nwindow.mainloop()`,
          output: "Появилась кнопка «Проверить связь» (пока без команды)",
          explanation:
            "Шаг 3. Кнопка Button нажимается (вдавливается и отпускается), но пока молчит, так как у неё нет параметра command.",
        },
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nlabel = tk.Label(window, text="Терминал студии", font=("Arial", 16))\nlabel.pack(pady=20)\n\ndef check_connection():\n    print("Связь с сервером в порядке")\n\nbutton = tk.Button(\n    window,\n    text="Проверить связь",\n    font=("Arial", 14),\n    command=check_connection\n)\nbutton.pack(pady=10)\n\nwindow.mainloop()`,
          output: "При клике на кнопку в консоли печатается «Связь с сервером в порядке»",
          explanation:
            "Шаг 4. Оживили кнопку! При клике вызывается функция check_connection. Обрати внимание: в command= имя функции указано без круглых скобок.",
        },
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nlabel = tk.Label(window, text="Терминал студии", font=("Arial", 16))\nlabel.pack(pady=20)\n\ndef check_connection():\n    label.config(text="Связь установлена")\n\nbutton = tk.Button(\n    window,\n    text="Проверить связь",\n    font=("Arial", 14),\n    command=check_connection\n)\nbutton.pack(pady=10)\n\nwindow.mainloop()`,
          output: "При клике текст надписи меняется прямо в окне на «Связь установлена»",
          explanation:
            "Шаг 5. Метод label.config(text=...) меняет надпись прямо в окне! Теперь программа действительно работает в графическом интерфейсе.",
        },
      ],
      mistakes: [
        {
          wrongCode: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.mainloop()\nwindow.geometry("400x250")`,
          error: "Окно мигает и сразу закрывается либо геометрия не применяется",
          fixedCode: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.geometry("400x250")\nwindow.mainloop()`,
          explanation:
            "mainloop() должен быть самой последней строкой! Всё, что написано после него, выполняется только после закрытия окна.",
        },
        {
          wrongCode: `import tkinter as tk\n\nwindow = tk.Tk()\ndef check():\n    print("Клик!")\n\nbtn = tk.Button(window, text="Клик", command=check())\nbtn.pack()\nwindow.mainloop()`,
          error: "Клик! (вывелось сразу при старте, при нажатии на кнопку ничего не происходит)",
          fixedCode: `import tkinter as tk\n\nwindow = tk.Tk()\ndef check():\n    print("Клик!")\n\nbtn = tk.Button(window, text="Клик", command=check)\nbtn.pack()\nwindow.mainloop()`,
          explanation:
            "Не ставь круглые скобки в command=check! Скобки вызывают функцию прямо при запуске программы.",
        },
        {
          wrongCode: `import tkinter as tk\n\nwindow = tk.Tk()\nlabel = tk.Label(window, text="Терминал студии")\nwindow.mainloop()`,
          error: "Окно пустое, надписи не видно (виджет создан, но не упакован)",
          fixedCode: `import tkinter as tk\n\nwindow = tk.Tk()\nlabel = tk.Label(window, text="Терминал студии")\nlabel.pack()\nwindow.mainloop()`,
          explanation:
            "Забыли вызывать pack()! Без него виджет остаётся невидимым в памяти.",
        },
        {
          wrongCode: `def check():\n    label.config(text="Готово")\ncheck()\nlabel = tk.Label(window, text="Старт")`,
          error: "NameError: name 'label' is not defined",
          fixedCode: `label = tk.Label(window, text="Старт")\ndef check():\n    label.config(text="Готово")\nbutton = tk.Button(window, text="Жми", command=check)`,
          explanation:
            "Виджеты создаём выше, а функции вызываем только по кнопке, когда элементы уже готовы.",
        },
      ],
      quiz: [
        {
          code: `import tkinter as tk\nwindow = tk.Tk()\nbtn = tk.Button(window, text="Клик", command=print("Старт"))`,
          options: [
            "Напечатает «Старт» сразу при запуске программы, а при кликах ничего не произойдёт",
            "Будет печатать «Старт» при каждом клике по кнопке",
            "Вызовет синтаксическую ошибку SyntaxError",
            "Создаст кнопку с текстом «Старт»",
          ],
          correct: 0,
          explanation:
            "Из-за круглых скобок print('Старт') выполнится один раз в момент создания кнопки!",
        },
        {
          code: `import tkinter as tk\nwindow = tk.Tk()\nlbl = tk.Label(window, text="Привет")\nwindow.mainloop()`,
          options: [
            "Откроется окно с надписью «Привет»",
            "Откроется пустое окно, надписи не будет видно",
            "Программа завершится ошибкой PackError",
          ],
          correct: 1,
          explanation:
            "Забыт вызов lbl.pack(), поэтому надпись не упакована в окно и не отображается.",
        },
        {
          code: `label = tk.Label(window, text="Старт")\n# Какая команда изменит текст надписи?`,
          options: [
            "label.config(text=\"Новый текст\")",
            "label.text = \"Новый текст\"",
            "label.change(\"Новый текст\")",
            "label.update_text(\"Новый текст\")",
          ],
          correct: 0,
          explanation:
            "В Tkinter свойства уже созданного виджета меняются через метод .config(свойство=значение).",
        },
      ],
      cheatsheet: [
        "window = tk.Tk() — создание главного окна приложения",
        "window.mainloop() — главная строчка в самом конце файла, держит окно открытым",
        "Сначала создаём виджет: lbl = tk.Label(...), затем упаковываем: lbl.pack()",
        "command=имя_функции — для кнопки пишем имя функции БЕЗ круглых скобок",
        "label.config(text=\"...\") — меняет текст существующей надписи прямо на экране",
      ],
    },
    exercise: {
      task: "Создай первое окно с кнопкой и меняющейся надписью:\n1. Создай окно window = tk.Tk() с заголовком window.title(\"ProTeam Labs\") и размером window.geometry(\"400x250\")\n2. Создай надпись label = tk.Label(window, text=\"Терминал студии\", font=(\"Arial\", 16))\n3. Упакуй надпись: label.pack(pady=20)\n4. Создай функцию check_connection(), которая вызывает label.config(text=\"Связь установлена\")\n5. Создай кнопку button = tk.Button(window, text=\"Проверить связь\", font=(\"Arial\", 14), command=check_connection) и упакуй: button.pack(pady=10)\n6. Запусти window.mainloop()",
      requirements: [
        "Создать окно tk.Tk() с размером 400x250 и заголовком 'ProTeam Labs'",
        "Создать tk.Label со стартовым текстом 'Терминал студии' и упаковать через pack()",
        "Создать функцию check_connection, вызывающую label.config(text='Связь установлена')",
        "Создать tk.Button с текстом 'Проверить связь' и command=check_connection",
        "Вызвать window.mainloop() в конце",
      ],
      starterCode: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\n# 1. Создай label с текстом "Терминал студии"\n\n# 2. Напиши функцию check_connection()\n\n# 3. Создай кнопку button с command=check_connection\n\nwindow.mainloop()\n`,
      hint: "label = tk.Label(window, text=\"Терминал студии\", font=(\"Arial\", 16))\nlabel.pack(pady=20)\n\ndef check_connection():\n    label.config(text=\"Связь установлена\")\n\nbutton = tk.Button(window, text=\"Проверить связь\", font=(\"Arial\", 14), command=check_connection)\nbutton.pack(pady=10)",
      solution: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("ProTeam Labs")\nwindow.geometry("400x250")\n\nlabel = tk.Label(window, text="Терминал студии", font=("Arial", 16))\nlabel.pack(pady=20)\n\ndef check_connection():\n    label.config(text="Связь установлена")\n\nbutton = tk.Button(\n    window,\n    text="Проверить связь",\n    font=("Arial", 14),\n    command=check_connection\n)\nbutton.pack(pady=10)\n\nwindow.mainloop()`,
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (!/tk\.Tk\s*\(/.test(cleanCode))
          return { passed: false, message: "Создай главное окно window = tk.Tk()." };
        if (!/tk\.Label\s*\(/.test(cleanCode))
          return { passed: false, message: "Создай надпись tk.Label." };
        if (!/tk\.Button\s*\(/.test(cleanCode))
          return { passed: false, message: "Создай кнопку tk.Button." };
        if (!/command\s*=\s*check_connection\b/.test(cleanCode))
          return {
            passed: false,
            message: "Передай command=check_connection (без скобок!) в кнопку.",
          };
        if (!/\.mainloop\s*\(/.test(cleanCode))
          return { passed: false, message: "Не забудь вызвать window.mainloop() в конце." };
        return null;
      },
      testCode: `
import tkinter
assert len(tkinter.WIDGETS) >= 3, "Должно быть создано окно Tk, Label и Button"
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(labels) >= 1, "Не найден виджет Label"
assert len(buttons) >= 1, "Не найден виджет Button"
btn = buttons[0]
lbl = labels[0]
assert "command" in btn.opts and btn.opts["command"] is not None, "У кнопки нет параметра command"
btn.invoke()
assert "Связь установлена" in lbl.opts.get("text", ""), "После клика надпись должна измениться на 'Связь установлена'"
print("OK_TK_WINDOW")
`,
      validate: (code, output) => {
        if (output.includes("OK_TK_WINDOW")) {
          return {
            passed: true,
            message: "Отлично! Первое графическое окно создано и успешно реагирует на клик! 🚀",
          };
        }
        return {
          passed: false,
          message: "Проверь, что кнопка меняет текст надписи на «Связь установлена».",
        };
      },
    },
  },

  // ==========================================
  // УРОК 4: УГАДАЙ ЧИСЛО
  // ==========================================
  {
    id: "tkinter_guess_number",
    moduleId: "module_tkinter",
    title: "4. Угадай число: поле ввода Entry, random, цвета и счётчик попыток",
    icon: "HelpCircle",
    shortDesc: "Принимаем ввод пользователя в окне через Entry вместо input()",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nОкно показал. Кнопка нажимается.\nА как мне туда что-нибудь ввести? В терминале я хотя бы печатал с клавиатуры. Здесь печатать некуда.\nПока не научитесь принимать ввод в окне — дальше не двинемся.",
        task: "Научиться принимать ввод в окне. Тренироваться будем на игре «Угадай число» — так быстрее и веселее, чем на скучной форме.",
        quotes: [
          {
            speaker: "Макс, техлид",
            text: "Ваш random тоже считает по формуле. Просто подставляет туда текущее время — поэтому каждый раз выходит разное.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Поле, кнопка и надпись. Из этих трёх штук собрана половина программ, которыми вы пользуетесь каждый день.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Цвет человек видит раньше, чем читает текст. Поэтому в нормальных программах ошибки красные, а не просто написаны словом.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Четвёртый день закрыт. Ввод в окне работает — значит, можно возвращаться к задачам.",
          },
        ],
      },
      summary:
        "Что заменяет input() в графическом окне? В консольной программе мы писали answer = input('Число: '), и программа замирала в ожидании. В окне мы ставим поле entry = tk.Entry(window): человек печатает когда хочет, а программа забирает текст в момент нажатия кнопки через entry.get().\n\nТри ключевых элемента окна: Entry (поле ввода текста), Button (момент считывания) и Label (отображение ответа).\n\nГлавное правило поля ввода: entry.get() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл число 42, get() вернёт строку '42'. Поэтому оборачивание в int() обязательно.\n\nЦвет текста задаётся через fg='green' (зелёный) или fg='red' (красный). Можно использовать и шестнадцатеричные коды вроде fg='#38BD60'.\n\nСлучайное число генерируется функцией random.randint(1, 100) — оба конца диапазона включены.\n\nКоманда global tries объявляет глобальный счётчик, чтобы функция не создавала новую переменную на каждом клике, а очистить поле можно через entry.delete(0, 'end').",
      keyRule:
        "Метод entry.get() всегда отдаёт строку. Для чисел обязательно используй int(entry.get())!",
      sections: [
        {
          heading: "Поле ввода Entry и чтение текста",
          text: "Виджет Entry позволяет пользователю печатать текст. Читаем его значение через entry.get(), а очищаем через entry.delete(0, 'end').",
          codeExample: {
            title: "Создание поля ввода",
            code: `import tkinter as tk\n\nwindow = tk.Tk()\nentry = tk.Entry(window, width=10)\nentry.pack(pady=10)\n\ndef get_text():\n    print("Введено:", entry.get())\n\ntk.Button(window, text="Прочитать", command=get_text).pack()\nwindow.mainloop()`,
            explanation: "entry.get() возвращает текущий текст из поля.",
          },
        },
      ],
      steps: [
        {
          code: `import tkinter as tk\nimport random\n\nsecret = random.randint(1, 100)\n\nwindow = tk.Tk()\nwindow.title("Угадай число")\nwindow.geometry("420x300")\n\ntitle = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))\ntitle.pack(pady=20)\n\nentry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")\nentry.pack()\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.pack(pady=20)\n\nwindow.mainloop()`,
          output: "Окно с заголовком и полем для ввода числа",
          explanation:
            "Шаг 1. Создали поле ввода Entry и пустую надпись result, в которую позже будет выводиться подсказка.",
        },
        {
          code: `import tkinter as tk\nimport random\n\nsecret = random.randint(1, 100)\n\nwindow = tk.Tk()\nwindow.title("Угадай число")\nwindow.geometry("420x300")\n\ntitle = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))\ntitle.pack(pady=20)\n\nentry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")\nentry.pack()\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.pack(pady=20)\n\ndef check():\n    answer = int(entry.get())\n    if answer == secret:\n        result.config(text="Точно!", fg="green")\n    elif answer < secret:\n        result.config(text="Моё число больше", fg="red")\n    else:\n        result.config(text="Моё число меньше", fg="red")\n\nbutton = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)\nbutton.pack()\n\nwindow.mainloop()`,
          output: "При проверке надпись загорается зелёным или красным цветом",
          explanation:
            "Шаг 2. Функция check() читает int(entry.get()) и подсвечивает ответ цветом через fg='green' или fg='red'.",
        },
        {
          code: `import tkinter as tk\nimport random\n\nsecret = random.randint(1, 100)\ntries = 0\n\nwindow = tk.Tk()\nwindow.title("Угадай число")\nwindow.geometry("420x300")\n\ntitle = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))\ntitle.pack(pady=20)\n\nentry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")\nentry.pack()\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.pack(pady=20)\n\ndef check():\n    global tries\n    tries = tries + 1\n    answer = int(entry.get())\n    if answer == secret:\n        result.config(text="Угадал за " + str(tries) + " попыток!", fg="green")\n    elif answer < secret:\n        result.config(text="Моё число больше. Попытка " + str(tries), fg="red")\n    else:\n        result.config(text="Моё число меньше. Попытка " + str(tries), fg="red")\n\ndef restart():\n    global secret, tries\n    secret = random.randint(1, 100)\n    tries = 0\n    result.config(text="Загадал новое число", fg="black")\n    entry.delete(0, "end")\n\nbutton = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)\nbutton.pack()\n\nrestart_btn = tk.Button(window, text="Заново", font=("Arial", 12), command=restart)\nrestart_btn.pack(pady=10)\n\nwindow.mainloop()`,
          output: "Полная игра со счётчиком попыток и перезапуском",
          explanation:
            "Шаги 3–4. Добавлен счётчик tries через global и кнопка «Заново», очищающая поле через entry.delete(0, 'end').",
        },
      ],
      mistakes: [
        {
          wrongCode: `def check():\n    tries = tries + 1\n    ans = int(entry.get())`,
          error: "UnboundLocalError: local variable 'tries' referenced before assignment",
          fixedCode: `def check():\n    global tries\n    tries = tries + 1\n    ans = int(entry.get())`,
          explanation:
            "Чтобы изменять глобальную переменную счётчика внутри функции, обязательно укажи global tries.",
        },
        {
          wrongCode: `result.config(text="Точно!", color="green")`,
          error: "TclError: unknown option '-color'",
          fixedCode: `result.config(text="Точно!", fg="green")`,
          explanation:
            "В Tkinter цвет текста называется fg (foreground), а не color.",
        },
        {
          wrongCode: `def restart():\n    global tries\n    secret = random.randint(1, 100)\n    tries = 0`,
          error: "Число не меняется после «Заново» (secret изменился только локально)",
          fixedCode: `def restart():\n    global secret, tries\n    secret = random.randint(1, 100)\n    tries = 0`,
          explanation:
            "Если не объявить global secret, новое число останется локальным и загадка не обновится.",
        },
      ],
      quiz: [
        {
          code: `val = entry.get()\n# Пользователь напечатал 50. Какой тип данных у val?`,
          options: [
            "str (строка '50')",
            "int (число 50)",
            "float (число 50.0)",
            "tuple (кортеж ('50',))",
          ],
          correct: 0,
          explanation:
            "Поле ввода Entry ВСЕГДА возвращает строку, даже если там напечатаны одни цифры.",
        },
        {
          code: `tries = 0\ndef click():\n    # Какая строка нужна здесь для увеличения счетчика?\n    tries = tries + 1`,
          options: [
            "global tries",
            "local tries",
            "public tries",
            "static tries",
          ],
          correct: 0,
          explanation:
            "Ключевое слово global сообщает Python, что переменная объявлена снаружи функции.",
        },
        {
          code: `# Как полностью очистить поле ввода entry от текста?`,
          options: [
            "entry.delete(0, \"end\")",
            "entry.clear()",
            "entry.clean()",
            "entry.reset()",
          ],
          correct: 0,
          explanation:
            "Метод delete(0, 'end') удаляет символы от нулевого индекса до конца строки.",
        },
      ],
      cheatsheet: [
        "entry = tk.Entry(window) — создание поля ввода",
        "entry.get() — забрать строку из поля ввода",
        "int(entry.get()) — перевод введённого текста в целое число",
        "entry.delete(0, 'end') — полная очистка поля ввода",
        "fg='green' / fg='red' — цвет текста надписи",
        "global my_var — доступ к изменению глобальной переменной",
      ],
    },
    exercise: {
      task: "Собери игру «Угадай число» с проверкой ввода:\n1. Создай secret = random.randint(1, 100) и tries = 0\n2. Создай окно window = tk.Tk() с заголовком 'Угадай число'\n3. Создай поле entry = tk.Entry(window, width=8) и упакуй\n4. Создай надпись result = tk.Label(window, text='') и упакуй\n5. Напиши функцию check():\n   - global tries; tries = tries + 1\n   - answer = int(entry.get())\n   - если answer == secret: result.config(text='Угадал за ' + str(tries) + ' попыток!', fg='green')\n   - если answer < secret: result.config(text='Моё число больше', fg='red')\n   - если answer > secret: result.config(text='Моё число меньше', fg='red')\n6. Создай кнопку tk.Button(window, text='Проверить', command=check) и запусти window.mainloop()",
      requirements: [
        "Использовать модуль random для secret",
        "Создать виджеты Entry, Button и Label",
        "Функция check должна считывать int(entry.get()) и красить ответ в green/red",
        "Учитывать счётчик попыток через global tries",
      ],
      starterCode: `import tkinter as tk\nimport random\n\nsecret = random.randint(1, 100)\ntries = 0\n\nwindow = tk.Tk()\nwindow.title("Угадай число")\nwindow.geometry("420x300")\n\ntitle = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))\ntitle.pack(pady=15)\n\nentry = tk.Entry(window, font=("Arial", 18), width=8, justify="center")\nentry.pack()\n\nresult = tk.Label(window, text="", font=("Arial", 15))\nresult.pack(pady=15)\n\n# Напиши функцию check() и создай кнопку button\n\nwindow.mainloop()\n`,
      hint: "def check():\n    global tries\n    tries += 1\n    ans = int(entry.get())\n    if ans == secret:\n        result.config(text='Угадал!', fg='green')\n    elif ans < secret:\n        result.config(text='Моё число больше', fg='red')\n    else:\n        result.config(text='Моё число меньше', fg='red')\n\nbutton = tk.Button(window, text='Проверить', command=check)\nbutton.pack()",
      solution: `import tkinter as tk\nimport random\n\nsecret = random.randint(1, 100)\ntries = 0\n\nwindow = tk.Tk()\nwindow.title("Угадай число")\nwindow.geometry("420x300")\n\ntitle = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))\ntitle.pack(pady=15)\n\nentry = tk.Entry(window, font=("Arial", 18), width=8, justify="center")\nentry.pack()\n\nresult = tk.Label(window, text="", font=("Arial", 15))\nresult.pack(pady=15)\n\ndef check():\n    global tries\n    tries = tries + 1\n    answer = int(entry.get())\n    if answer == secret:\n        result.config(text="Угадал за " + str(tries) + " попыток!", fg="green")\n    elif answer < secret:\n        result.config(text="Моё число больше. Попытка " + str(tries), fg="red")\n    else:\n        result.config(text="Моё число меньше. Попытка " + str(tries), fg="red")\n\nbutton = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)\nbutton.pack()\n\nwindow.mainloop()`,
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (!/tk\.Entry\s*\(/.test(cleanCode))
          return { passed: false, message: "Создай поле ввода tk.Entry." };
        if (!/entry\.get\s*\(/.test(cleanCode))
          return { passed: false, message: "Используй entry.get() для считывания ответа." };
        if (!/int\s*\(/.test(cleanCode))
          return { passed: false, message: "Преобразуй строку в число через int()." };
        if (!/global\s+tries\b/.test(cleanCode))
          return { passed: false, message: "Не забудь global tries внутри функции check." };
        return null;
      },
      testCode: `
import tkinter
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
assert len(entries) >= 1, "Поле Entry не найдено"
assert len(buttons) >= 1, "Кнопка Button не найдена"
assert len(labels) >= 2, "Должны быть надписи title и result"
entry_w = entries[0]
btn_w = buttons[0]
entry_w.text = "1"
btn_w.invoke()
print("OK_GUESS_GAME")
`,
      validate: (code, output) => {
        if (output.includes("OK_GUESS_GAME")) {
          return {
            passed: true,
            message: "Отлично! Игра «Угадай число» с полем ввода и кнопкой работает! 🎯",
          };
        }
        return {
          passed: false,
          message: "Проверь работу функции check и считывание числа из entry.",
        };
      },
    },
  },

  // ==========================================
  // УРОК 5: КОНВЕРТЕР ВАЛЮТ
  // ==========================================
  {
    id: "tkinter_currency_converter",
    moduleId: "module_tkinter",
    title: "5. Конвертер валют: сетка grid(), float, messagebox и защита от ошибок",
    icon: "Layout",
    shortDesc: "Табличная верстка grid(), два поля ввода и всплывающие окна",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nИгру видел. Поиграл. Угадал с шести раз.\nТеперь по работе: мы покупаем ассеты за доллары, а считаем всё в рублях. Каждый раз лезу в поисковик.\nСделайте конвертер. И чтобы не падал, когда секретарь введёт туда что попало.",
        task: "Два поля, две кнопки, аккуратный вывод. И защита от любого ввода — программа не должна падать вообще никогда.",
        quotes: [
          {
            speaker: "Макс, техлид",
            text: "Мы сегодня округлим до двух знаков и сделаем вид, что всё хорошо. Как половина программ на свете.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Смешаете grid и pack в одном окне — оно откроется пустым. Ни ошибки, ни подсказки. Проверено на всех.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Не всякое окно означает отказ. После showinfo программа считает дальше — это предупреждение, а не стоп.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Пятый день закрыт. Это первая вещь за модуль, которой может пользоваться не программист.",
          },
        ],
      },
      summary:
        "Менеджер pack() кладёт элементы стопкой друг под другом по центру. В нём трудно поставить подпись и поле ввода аккуратно в одну строчку. Для этого есть менеджер grid() — он расставляет элементы по табличной сетке строк (row) и столбцов (column), отсчёт с нуля!\n\nСтрожайшее правило: никогда не смешивайте grid() и pack() в одном окне! Окно просто откроется абсолютно пустым без каких-либо ошибок.\n\nПараметры grid: row и column задают ячейку, columnspan=2 растягивает элемент на два столбца, а sticky='e' (East — восток) прижимает подпись к правому краю клетки.\n\nДля денег используем float, а не int, так как суммы бывают дробными с копейками. Форматирование f'{dollars:.2f} $' красиво оставляет ровно две цифры после точки.\n\nТри вида всплывающих окон из модуля messagebox:\n- showerror('Ошибка', ...) — посчитать невозможно (ввели буквы вместо чисел)\n- showwarning('Так нельзя', ...) — отрицательная сумма или нулевой курс\n- showinfo('Проверьте', ...) — сумма больше миллиона, предупреждаем, но считаем дальше.",
      keyRule:
        "Никогда не смешивай pack() и grid() внутри одного окна. Для сложных и аккуратных форм используй только grid().",
      sections: [
        {
          heading: "Табличная сетка grid()",
          text: "grid(row=номер_строки, column=номер_столбца) задает точные координаты ячейки в таблице. Нумерация начинается с нуля.",
          codeExample: {
            title: "Пример сетки grid",
            code: `import tkinter as tk\n\nwindow = tk.Tk()\ntk.Label(window, text="Логин:").grid(row=0, column=0, sticky="e", padx=5, pady=5)\ntk.Entry(window).grid(row=0, column=1, padx=5, pady=5)\nwindow.mainloop()`,
            explanation: "sticky='e' прижимает надпись вправо вплотную к полю ввода.",
          },
        },
      ],
      steps: [
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("Конвертер валют")\nwindow.geometry("480x340")\n\ntitle = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))\ntitle.grid(row=0, column=0, columnspan=2, pady=20)\n\namount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))\namount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")\n\namount_entry = tk.Entry(window, font=("Arial", 14), width=12)\namount_entry.grid(row=1, column=1, padx=10, pady=8)\n\nrate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))\nrate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")\n\nrate_entry = tk.Entry(window, font=("Arial", 14), width=12)\nrate_entry.grid(row=2, column=1, padx=10, pady=8)\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.grid(row=4, column=0, columnspan=2, pady=20)\n\nwindow.mainloop()`,
          output: "Табличная сетка с двумя полями и выровненными подписями",
          explanation:
            "Шаг 1. Сетка grid(): подписи слева прижаты через sticky='e', поля ввода справа в column=1.",
        },
        {
          code: `import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("Конвертер валют")\nwindow.geometry("480x340")\n\ntitle = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))\ntitle.grid(row=0, column=0, columnspan=2, pady=20)\n\namount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))\namount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")\n\namount_entry = tk.Entry(window, font=("Arial", 14), width=12)\namount_entry.grid(row=1, column=1, padx=10, pady=8)\n\nrate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))\nrate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")\n\nrate_entry = tk.Entry(window, font=("Arial", 14), width=12)\nrate_entry.grid(row=2, column=1, padx=10, pady=8)\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.grid(row=4, column=0, columnspan=2, pady=20)\n\ndef to_dollars():\n    amount = float(amount_entry.get())\n    rate = float(rate_entry.get())\n    dollars = amount / rate\n    result.config(text=f"{dollars:.2f} $", fg="black")\n\ndef to_rubles():\n    amount = float(amount_entry.get())\n    rate = float(rate_entry.get())\n    rubles = amount * rate\n    result.config(text=f"{rubles:.2f} руб", fg="black")\n\nbutton_usd = tk.Button(window, text="В доллары", font=("Arial", 13), command=to_dollars)\nbutton_usd.grid(row=3, column=0, padx=10, pady=10)\n\nbutton_rub = tk.Button(window, text="В рубли", font=("Arial", 13), command=to_rubles)\nbutton_rub.grid(row=3, column=1, padx=10, pady=10)\n\nwindow.mainloop()`,
          output: "Две кнопки в одной строке row=3 считают доллары и рубли",
          explanation:
            "Шаги 2–3. Кнопки делят или умножают сумму на курс. Число форматируется через f'{dollars:.2f} $'.",
        },
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\n\nwindow = tk.Tk()\nwindow.title("Конвертер валют")\nwindow.geometry("480x340")\n\ntitle = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))\ntitle.grid(row=0, column=0, columnspan=2, pady=20)\n\namount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))\namount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")\n\namount_entry = tk.Entry(window, font=("Arial", 14), width=12)\namount_entry.grid(row=1, column=1, padx=10, pady=8)\n\nrate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))\nrate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")\n\nrate_entry = tk.Entry(window, font=("Arial", 14), width=12)\nrate_entry.grid(row=2, column=1, padx=10, pady=8)\n\nresult = tk.Label(window, text="", font=("Arial", 16))\nresult.grid(row=4, column=0, columnspan=2, pady=20)\n\ndef get_values():\n    try:\n        amount = float(amount_entry.get())\n        rate = float(rate_entry.get())\n    except ValueError:\n        messagebox.showerror("Ошибка", "Введите числа, а не текст")\n        return None, None\n    if amount < 0:\n        messagebox.showwarning("Так нельзя", "Сумма не может быть меньше нуля")\n        return None, None\n    if rate <= 0:\n        messagebox.showwarning("Так нельзя", "Курс должен быть больше нуля")\n        return None, None\n    if amount > 1000000:\n        messagebox.showinfo("Проверьте", "Сумма подозрительно большая. Не лишний ли ноль?")\n    return amount, rate\n\ndef to_dollars():\n    amount, rate = get_values()\n    if amount is None:\n        return\n    dollars = amount / rate\n    result.config(text=f"{dollars:.2f} $", fg="green")\n\ndef to_rubles():\n    amount, rate = get_values()\n    if amount is None:\n        return\n    rubles = amount * rate\n    result.config(text=f"{rubles:.2f} руб", fg="green")\n\nbutton_usd = tk.Button(window, text="В доллары", font=("Arial", 13), command=to_dollars)\nbutton_usd.grid(row=3, column=0, padx=10, pady=10)\n\nbutton_rub = tk.Button(window, text="В рубли", font=("Arial", 13), command=to_rubles)\nbutton_rub.grid(row=3, column=1, padx=10, pady=10)\n\nwindow.mainloop()`,
          output: "Полный файл конвертера валют с тремя видами messagebox",
          explanation:
            "Шаг 4. Добавлена полная защита: от текста (showerror), от отрицательных чисел и деления на 0 (showwarning).",
        },
      ],
      mistakes: [
        {
          wrongCode: `title.grid(row=0, column=0)\namount_entry.pack()`,
          error: "Окно открылось пустым без элементов (смешение grid и pack)",
          fixedCode: `title.grid(row=0, column=0)\namount_entry.grid(row=1, column=0)`,
          explanation:
            "В одном окне можно использовать только один менеджер геометрии: либо все pack(), либо все grid()!",
        },
        {
          wrongCode: `amount_label.grid(row=1, column=0, padx=10, pady=8)`,
          error: "Подписи болтаются по центру и не выровнены по правому краю",
          fixedCode: `amount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")`,
          explanation:
            "sticky='e' прижимает подпись к правому краю ячейки вплотную к полю ввода.",
        },
        {
          wrongCode: `dollars = amount / rate\n# если rate == 0`,
          error: "ZeroDivisionError: float division by zero",
          fixedCode: `if rate <= 0:\n    messagebox.showwarning("Так нельзя", "Курс должен быть больше нуля")\n    return`,
          explanation:
            "Проверяй rate <= 0 ДО деления, чтобы программа не падала с делением на ноль.",
        },
      ],
      quiz: [
        {
          code: `btn = tk.Button(window, text="OK")\n# Какая строка растянет кнопку на 2 колонки сетки?`,
          options: [
            "btn.grid(row=3, column=0, columnspan=2)",
            "btn.grid(row=3, column=0, span=2)",
            "btn.grid(row=3, column=0, width=2)",
          ],
          correct: 0,
          explanation:
            "Параметр columnspan задает количество столбцов сетки, которые займет виджет.",
        },
        {
          code: `from tkinter import messagebox\n# Какое окно предназначено для предупреждений (желтый треугольник)?`,
          options: [
            "messagebox.showwarning(\"Заголовок\", \"Текст\")",
            "messagebox.showerror(\"Заголовок\", \"Текст\")",
            "messagebox.showinfo(\"Заголовок\", \"Текст\")",
          ],
          correct: 0,
          explanation:
            "showwarning показывает предупреждение, showerror — ошибку, showinfo — информационное окно.",
        },
        {
          code: `val = 12.3456\n# Как вывести число ровно с 2 знаками после запятой?`,
          options: [
            "f\"{val:.2f}\"",
            "f\"{val:2}\"",
            "f\"{round(val)}\"",
          ],
          correct: 0,
          explanation:
            ":.2f внутри фигурных скобок f-строки форматирует число с 2 знаками после точки.",
        },
      ],
      cheatsheet: [
        "widget.grid(row=0, column=0) — табличное размещение",
        "columnspan=2 — растягивание элемента на 2 колонки",
        "sticky='e' — прижать к правому краю (East), sticky='w' — к левому (West)",
        "f\"{val:.2f}\" — вывод дробного числа с 2 знаками после запятой",
        "from tkinter import messagebox — модуль всплывающих диалоговых окон",
      ],
    },
    exercise: {
      task: "Собери конвертер валют на сетке grid():\n1. Создай окно window = tk.Tk() с размером 480x340\n2. Создай amount_entry на grid(row=1, column=1) и rate_entry на grid(row=2, column=1)\n3. Создай result = tk.Label(window, text='') на grid(row=4, column=0, columnspan=2)\n4. Создай кнопку button_usd на grid(row=3, column=0), считающую доллары: dollars = float(amount) / float(rate); result.config(text=f'{dollars:.2f} $')\n5. Создай кнопку button_rub на grid(row=3, column=1), считающую рубли: rubles = float(amount) * float(rate); result.config(text=f'{rubles:.2f} руб')\n6. Запусти window.mainloop()",
      requirements: [
        "Использовать grid() для всех элементов (никакого pack!)",
        "Создать два поля Entry: для суммы и для курса",
        "Кнопки на row=3 считают доллары (деление) и рубли (умножение)",
        "Форматировать вывод через :.2f",
      ],
      starterCode: `import tkinter as tk\nfrom tkinter import messagebox\n\nwindow = tk.Tk()\nwindow.title("Конвертер валют")\nwindow.geometry("480x340")\n\ntitle = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\namount_label = tk.Label(window, text="Сумма:", font=("Arial", 12))\namount_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")\namount_entry = tk.Entry(window, font=("Arial", 13), width=12)\namount_entry.grid(row=1, column=1, padx=10, pady=5)\n\nrate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 12))\nrate_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")\nrate_entry = tk.Entry(window, font=("Arial", 13), width=12)\nrate_entry.grid(row=2, column=1, padx=10, pady=5)\n\nresult = tk.Label(window, text="", font=("Arial", 15))\nresult.grid(row=4, column=0, columnspan=2, pady=15)\n\n# Добавь функции to_dollars, to_rubles и кнопки button_usd, button_rub\n\nwindow.mainloop()\n`,
      hint: "def to_dollars():\n    amt = float(amount_entry.get())\n    rt = float(rate_entry.get())\n    res = amt / rt\n    result.config(text=f'{res:.2f} $')\n\nbutton_usd = tk.Button(window, text='В доллары', command=to_dollars)\nbutton_usd.grid(row=3, column=0)",
      solution: `import tkinter as tk\nfrom tkinter import messagebox\n\nwindow = tk.Tk()\nwindow.title("Конвертер валют")\nwindow.geometry("480x340")\n\ntitle = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\namount_label = tk.Label(window, text="Сумма:", font=("Arial", 12))\namount_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")\namount_entry = tk.Entry(window, font=("Arial", 13), width=12)\namount_entry.grid(row=1, column=1, padx=10, pady=5)\n\nrate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 12))\nrate_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")\nrate_entry = tk.Entry(window, font=("Arial", 13), width=12)\nrate_entry.grid(row=2, column=1, padx=10, pady=5)\n\nresult = tk.Label(window, text="", font=("Arial", 15))\nresult.grid(row=4, column=0, columnspan=2, pady=15)\n\ndef to_dollars():\n    amount = float(amount_entry.get())\n    rate = float(rate_entry.get())\n    dollars = amount / rate\n    result.config(text=f"{dollars:.2f} $")\n\ndef to_rubles():\n    amount = float(amount_entry.get())\n    rate = float(rate_entry.get())\n    rubles = amount * rate\n    result.config(text=f"{rubles:.2f} руб")\n\nbutton_usd = tk.Button(window, text="В доллары", command=to_dollars)\nbutton_usd.grid(row=3, column=0, padx=10, pady=10)\n\nbutton_rub = tk.Button(window, text="В рубли", command=to_rubles)\nbutton_rub.grid(row=3, column=1, padx=10, pady=10)\n\nwindow.mainloop()`,
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (cleanCode.includes(".pack("))
          return { passed: false, message: "Не используй pack()! В этом уроке верстка только на grid()." };
        if (!cleanCode.includes(".grid("))
          return { passed: false, message: "Используй метод .grid() для размещения виджетов." };
        if (!/float\s*\(/.test(cleanCode))
          return { passed: false, message: "Используй float() для считывания сумм и курса валют." };
        return null;
      },
      testCode: `
import tkinter
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
assert len(entries) >= 2, "Должно быть 2 поля ввода Entry (сумма и курс)"
assert len(buttons) >= 2, "Должно быть 2 кнопки (в доллары и в рубли)"
amount_w, rate_w = entries[0], entries[1]
amount_w.text = "1000"
rate_w.text = "80"
btn_usd = buttons[0]
btn_usd.invoke()
print("OK_CONVERTER")
`,
      validate: (code, output) => {
        if (output.includes("OK_CONVERTER")) {
          return {
            passed: true,
            message: "Превосходно! Конвертер валют на табличной сетке grid() работает! 💰",
          };
        }
        return {
          passed: false,
          message: "Проверь работу функций перевода в доллары и рубли.",
        };
      },
    },
  },

  // ==========================================
  // УРОК 6: СДАЧА ПРОЕКТА (TODO-ЛИСТ)
  // ==========================================
  {
    id: "tkinter_todo_list",
    moduleId: "module_tkinter",
    title: "6. Сдача проекта (ToDo-лист): виджет Listbox, отметка «сделано» и удаление",
    icon: "CheckCircle2",
    shortDesc: "Сборка всего модуля в одно готовое приложение с Listbox",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nНапоминаю первое письмо: мне нужен был трекер задач. Получил терминал, игру про угадайку и конвертер.\nВсё хорошее. Но срок — сегодня.\nЖду трекер. С окном. Сегодня принимаю.",
        task: "Собрать всё, чему научились за модуль, в одно приложение. Список, добавление, отметка «сделано», удаление, счётчик.",
        quotes: [
          {
            speaker: "Макс, техлид",
            text: "Можно было бы менять строки по одной. Но тогда пришлось бы помнить, какая где. Проще стереть и нарисовать заново.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Шесть рабочих дней назад вы не знали, что такое рабочая папка. Посмотрите на список.",
          },
          {
            speaker: "Заказчик",
            text: "Принято. Вопросов нет. Следующий заказ пришлю на неделе.",
          },
        ],
      },
      summary:
        "Что такое Listbox: готовый список со скроллом и выделением строки мышью. Собирать такое вручную из Label заняло бы слишком много сил.\n\nТри главные команды Listbox:\n1. listbox.delete(0, 'end') — стереть все строки\n2. listbox.insert('end', text) — добавить строку в конец\n3. listbox.itemconfig(i, fg='gray') — покрасить строку i в серый цвет (ТОЛЬКО ПОСЛЕ того, как вставили!)\n\nГлавный принцип современных интерфейсов: стереть и нарисовать заново! Функция refresh() очищает весь listbox, пробегает по списку tasks, заново рисует задачи и красит выполненные.\n\nlistbox.curselection() возвращает кортеж выбранных индексов. Если ничего не выбрано, кортеж пуст. Обязательна проверка: if len(selected) == 0: return.\n\ntasks[index]['done'] = not tasks[index]['done'] — оператор not легко переключает True на False и обратно.",
      keyRule:
        "Данные отдельно, экран отдельно! Удалять и менять нужно в списке tasks, а listbox просто перерисовывать через refresh().",
      sections: [
        {
          heading: "Виджет списка Listbox",
          text: "Listbox хранит строки. Мы считываем выделенный индекс через listbox.curselection()[0], вставляем через listbox.insert('end', text) и красим через listbox.itemconfig(i, fg='gray').",
          codeExample: {
            title: "Работа со списком Listbox",
            code: `import tkinter as tk\n\nwindow = tk.Tk()\nlbox = tk.Listbox(window)\nlbox.pack()\nlbox.insert("end", "Первое дело")\nlbox.insert("end", "Второе дело")\nlbox.itemconfig(0, fg="gray")\nwindow.mainloop()`,
            explanation: "itemconfig(0, fg='gray') окрашивает первую задачу в серый цвет.",
          },
        },
      ],
      steps: [
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\n\ntasks = []\n\nwindow = tk.Tk()\nwindow.title("Задачи ProTeam Labs")\nwindow.geometry("520x480")\n\ntitle = tk.Label(window, text="Задачи студии", font=("Arial", 18))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\nentry = tk.Entry(window, font=("Arial", 13), width=28)\nentry.grid(row=1, column=0, padx=10, pady=8)\n\nadd_button = tk.Button(window, text="Добавить", font=("Arial", 12))\nadd_button.grid(row=1, column=1, padx=10, pady=8)\n\nlistbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)\nlistbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)\n\ncounter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))\ncounter.grid(row=4, column=0, columnspan=2, pady=10)\n\nwindow.mainloop()`,
          output: "Окно трекера с полем, пустым списком Listbox и счетчиком",
          explanation:
            "Шаг 1. Каркас ToDo-листа на сетке grid: поле ввода, список Listbox и надпись счётчика.",
        },
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\n\ntasks = []\n\nwindow = tk.Tk()\nwindow.title("Задачи ProTeam Labs")\nwindow.geometry("520x480")\n\ntitle = tk.Label(window, text="Задачи студии", font=("Arial", 18))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\nentry = tk.Entry(window, font=("Arial", 13), width=28)\nentry.grid(row=1, column=0, padx=10, pady=8)\n\nlistbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)\nlistbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)\n\ncounter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))\ncounter.grid(row=4, column=0, columnspan=2, pady=10)\n\ndef refresh():\n    listbox.delete(0, "end")\n    done_count = 0\n    for i in range(len(tasks)):\n        listbox.insert("end", tasks[i]["name"])\n        if tasks[i]["done"]:\n            listbox.itemconfig(i, fg="gray")\n            done_count = done_count + 1\n    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))\n\ndef add_task():\n    name = entry.get()\n    if name == "":\n        messagebox.showwarning("Пусто", "Сначала напишите задачу")\n        return\n    tasks.append({"name": name, "done": False})\n    entry.delete(0, "end")\n    refresh()\n\nadd_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)\nadd_button.grid(row=1, column=1, padx=10, pady=8)\n\nwindow.mainloop()`,
          output: "Задачи добавляются в Listbox и поле очищается",
          explanation:
            "Шаг 2. Функция refresh() перерисовывает весь список заново, а add_task() кладёт словарь в tasks.",
        },
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\n\ntasks = []\n\nwindow = tk.Tk()\nwindow.title("Задачи ProTeam Labs")\nwindow.geometry("520x480")\n\ntitle = tk.Label(window, text="Задачи студии", font=("Arial", 18))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\nentry = tk.Entry(window, font=("Arial", 13), width=28)\nentry.grid(row=1, column=0, padx=10, pady=8)\n\nlistbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)\nlistbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)\n\ncounter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))\ncounter.grid(row=4, column=0, columnspan=2, pady=10)\n\ndef refresh():\n    listbox.delete(0, "end")\n    done_count = 0\n    for i in range(len(tasks)):\n        listbox.insert("end", tasks[i]["name"])\n        if tasks[i]["done"]:\n            listbox.itemconfig(i, fg="gray")\n            done_count = done_count + 1\n    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))\n\ndef add_task():\n    name = entry.get()\n    if name == "":\n        messagebox.showwarning("Пусто", "Сначала напишите задачу")\n        return\n    tasks.append({"name": name, "done": False})\n    entry.delete(0, "end")\n    refresh()\n\ndef toggle_task():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")\n        return\n    index = selected[0]\n    tasks[index]["done"] = not tasks[index]["done"]\n    refresh()\n\ndef delete_task():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")\n        return\n    index = selected[0]\n    tasks.pop(index)\n    refresh()\n\nadd_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)\nadd_button.grid(row=1, column=1, padx=10, pady=8)\n\ndone_button = tk.Button(window, text="Сделано", font=("Arial", 12), command=toggle_task)\ndone_button.grid(row=3, column=0, padx=10, pady=5)\n\ndelete_button = tk.Button(window, text="Удалить", font=("Arial", 12), command=delete_task)\ndelete_button.grid(row=3, column=1, padx=10, pady=5)\n\nwindow.mainloop()`,
          output: "Готовое приложение: добавление, отметка «Сделано» и удаление",
          explanation:
            "Шаги 3–4. Полный проект ToDo-листа! Кнопка «Сделано» красит в серый, а «Удалить» убирает задачу из списка.",
        },
      ],
      mistakes: [
        {
          wrongCode: `def refresh():\n    for i in range(len(tasks)):\n        listbox.insert("end", tasks[i]["name"])`,
          error: "Задачи задваиваются при каждом добавлении",
          fixedCode: `def refresh():\n    listbox.delete(0, "end")\n    for i in range(len(tasks)):\n        listbox.insert("end", tasks[i]["name"])`,
          explanation:
            "Всегда вызывай listbox.delete(0, 'end') первой строкой refresh(), чтобы стереть старый список перед отрисовкой.",
        },
        {
          wrongCode: `def toggle_task():\n    index = listbox.curselection()[0]`,
          error: "IndexError: tuple index out of range (когда ничего не выбрано мышью)",
          fixedCode: `def toggle_task():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        return\n    index = selected[0]`,
          explanation:
            "Если пользователь ничего не выделил, curselection() возвращает пустой кортеж (). Всегда проверяй len(selected) == 0.",
        },
        {
          wrongCode: `listbox.itemconfig(i, fg="gray")\nlistbox.insert("end", tasks[i]["name"])`,
          error: "Серый цвет строки не появляется (пытаемся покрасить строку, которой ещё нет)",
          fixedCode: `listbox.insert("end", tasks[i]["name"])\nlistbox.itemconfig(i, fg="gray")`,
          explanation:
            "Красить строку можно только ПОСЛЕ того, как она вставлена в Listbox.",
        },
      ],
      quiz: [
        {
          code: `selected = listbox.curselection()\n# В списке выбрана вторая строка (индекс 1). Что содержит selected?`,
          options: [
            "Кортеж (1,)",
            "Число 1",
            "Строку с текстом задачи",
            "Список ['1']",
          ],
          correct: 0,
          explanation:
            "curselection() всегда возвращает кортеж индексов, поэтому номер строки берётся как selected[0].",
        },
        {
          code: `# Как перевернуть булево значение задачи True/False в одну строчку?`,
          options: [
            "task[\"done\"] = not task[\"done\"]",
            "task[\"done\"] = reverse(task[\"done\"])",
            "task[\"done\"] = !task[\"done\"]",
          ],
          correct: 0,
          explanation:
            "Оператор not в Python инвертирует логическое значение: not False даёт True, а not True даёт False.",
        },
        {
          code: `# Почему удалять задачу нужно из списка tasks, а не только из listbox?`,
          options: [
            "tasks — это реальные данные, а listbox просто перерисовывается из них",
            "Из listbox нельзя удалять строки",
            "Иначе программа упадёт с ошибкой ListboxError",
          ],
          correct: 0,
          explanation:
            "Главный принцип архитектуры: данные отдельно, экран отдельно. При следующем вызове refresh() данные отрисуются заново.",
        },
      ],
      cheatsheet: [
        "listbox = tk.Listbox(window) — создание списка с выделением",
        "listbox.delete(0, 'end') — очистка всех строк списка",
        "listbox.insert('end', text) — добавление строки в конец",
        "listbox.itemconfig(i, fg='gray') — покраска строки i",
        "listbox.curselection() — кортеж индексов выделенных строк",
      ],
    },
    exercise: {
      task: "Собери ToDo-лист студии ProTeam Labs:\n1. Создай tasks = []\n2. Создай окно window = tk.Tk() с размером 520x480\n3. Создай поле entry на grid(row=1, column=0) и кнопку add_button на grid(row=1, column=1)\n4. Создай listbox = tk.Listbox(window, width=45, height=12) на grid(row=2, column=0, columnspan=2)\n5. Создай counter = tk.Label(window, text='Сделано 0 из 0') на grid(row=4, column=0, columnspan=2)\n6. Напиши refresh():\n   - listbox.delete(0, 'end')\n   - в цикле по tasks вставляй listbox.insert('end', tasks[i]['name'])\n   - если tasks[i]['done'], то listbox.itemconfig(i, fg='gray') и увеличивай done_count\n   - обновляй counter.config(text=f'Сделано {done_count} из {len(tasks)}')\n7. Напиши add_task(): tasks.append({'name': entry.get(), 'done': False}); entry.delete(0, 'end'); refresh()\n8. Добавь кнопки 'Сделано' (toggle_task) и 'Удалить' (delete_task) на row=3!",
      requirements: [
        "Создать список tasks и виджет tk.Listbox",
        "Реализовать refresh() с очисткой listbox.delete(0, 'end') и окраской выполненных в 'gray'",
        "Реализовать добавление add_task, переключение toggle_task и удаление delete_task",
        "Обновлять текст счетчика counter",
      ],
      starterCode: `import tkinter as tk\nfrom tkinter import messagebox\n\ntasks = []\n\nwindow = tk.Tk()\nwindow.title("Задачи ProTeam Labs")\nwindow.geometry("520x480")\n\ntitle = tk.Label(window, text="Задачи студии", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=10)\n\nentry = tk.Entry(window, font=("Arial", 13), width=28)\nentry.grid(row=1, column=0, padx=10, pady=5)\n\nlistbox = tk.Listbox(window, font=("Arial", 13), width=45, height=10)\nlistbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)\n\ncounter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))\ncounter.grid(row=4, column=0, columnspan=2, pady=5)\n\n# Реализуй refresh(), add_task(), toggle_task(), delete_task() и кнопки\n\nwindow.mainloop()\n`,
      hint: "def add_task():\n    name = entry.get()\n    if name:\n        tasks.append({'name': name, 'done': False})\n        entry.delete(0, 'end')\n        refresh()\n\nadd_btn = tk.Button(window, text='Добавить', command=add_task)\nadd_btn.grid(row=1, column=1)",
      solution: `import tkinter as tk\nfrom tkinter import messagebox\n\ntasks = []\n\nwindow = tk.Tk()\nwindow.title("Задачи ProTeam Labs")\nwindow.geometry("520x480")\n\ntitle = tk.Label(window, text="Задачи студии", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=10)\n\nentry = tk.Entry(window, font=("Arial", 13), width=28)\nentry.grid(row=1, column=0, padx=10, pady=5)\n\nlistbox = tk.Listbox(window, font=("Arial", 13), width=45, height=10)\nlistbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)\n\ncounter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))\ncounter.grid(row=4, column=0, columnspan=2, pady=5)\n\ndef refresh():\n    listbox.delete(0, "end")\n    done_count = 0\n    for i in range(len(tasks)):\n        listbox.insert("end", tasks[i]["name"])\n        if tasks[i]["done"]:\n            listbox.itemconfig(i, fg="gray")\n            done_count += 1\n    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))\n\ndef add_task():\n    name = entry.get()\n    if name == "":\n        return\n    tasks.append({"name": name, "done": False})\n    entry.delete(0, "end")\n    refresh()\n\ndef toggle_task():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        return\n    index = selected[0]\n    tasks[index]["done"] = not tasks[index]["done"]\n    refresh()\n\ndef delete_task():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        return\n    index = selected[0]\n    tasks.pop(index)\n    refresh()\n\nadd_btn = tk.Button(window, text="Добавить", command=add_task)\nadd_btn.grid(row=1, column=1, padx=10, pady=5)\n\ndone_btn = tk.Button(window, text="Сделано", command=toggle_task)\ndone_btn.grid(row=3, column=0, padx=10, pady=5)\n\ndel_btn = tk.Button(window, text="Удалить", command=delete_task)\ndel_btn.grid(row=3, column=1, padx=10, pady=5)\n\nwindow.mainloop()`,
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (!/tk\.Listbox\s*\(/.test(cleanCode))
          return { passed: false, message: "Создай виджет tk.Listbox." };
        if (!/listbox\.delete\s*\(/.test(cleanCode))
          return { passed: false, message: "В refresh() вызывай listbox.delete(0, 'end')." };
        if (!/listbox\.insert\s*\(/.test(cleanCode))
          return { passed: false, message: "Вставляй задачи через listbox.insert('end', ...)." };
        if (!/listbox\.curselection\s*\(/.test(cleanCode))
          return { passed: false, message: "Используй listbox.curselection() для получения выбранной задачи." };
        return null;
      },
      testCode: `
import tkinter
listboxes = [w for w in tkinter.WIDGETS if w.kind == "Listbox"]
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(listboxes) >= 1, "Listbox не найден"
assert len(entries) >= 1, "Entry не найден"
assert len(buttons) >= 3, "Должно быть 3 кнопки (Добавить, Сделано, Удалить)"
lbox = listboxes[0]
ent = entries[0]
ent.text = "Тестовая задача"
buttons[0].invoke()
assert len(tasks) >= 1, "Задача не добавилась в tasks"
assert lbox.size() >= 1, "Задача не появилась в listbox"
lbox.selection_set(0)
buttons[1].invoke()
print("OK_TODO_LIST")
`,
      validate: (code, output) => {
        if (output.includes("OK_TODO_LIST")) {
          return {
            passed: true,
            message: "Поздравляем! Финальный проект модуля 1 (ToDo-лист) успешно сдан Заказчику! 🏆",
          };
        }
        return {
          passed: false,
          message: "Проверь функции add_task, refresh и toggle_task.",
        };
      },
    },
  },

  // ==========================================
  // УРОК 7: ТАВЕРНА ГЕРОЕВ
  // ==========================================
  {
    id: "tkinter_heroes_tavern",
    moduleId: "module_tkinter",
    title: "7. Таверна героев: файлы, модуль JSON и вечное сохранение данных",
    icon: "FolderOpen",
    shortDesc: "Программа запоминает данные в JSON-файл после закрытия окна",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nВаш трекер отличный. Вбил туда двадцать дел на неделю, выключил ноутбук.\nУтром запускаю — список пустой. Мне каждый раз печатать заново?\nИ кстати: мы стартуем RPG. Нужен реестр персонажей. Чтобы ни один маг не исчез.",
        task: "Реестр персонажей RPG: имя, класс, уровень. Главное: файл heroes.json сохраняется сам при каждом изменении и не пропадает после перезапуска.",
        quotes: [
          {
            speaker: "Алёна, продюсер",
            text: "В прошлом модуле всё жило в оперативной памяти. Закрыли окно — память очистилась. Сегодня подключаем диск.",
          },
          {
            speaker: "Макс, техлид",
            text: "Паять батарейки к вашим ноутбукам не будем. У нас есть диск и встроенный модуль json.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Открыли файл в режиме 'w' и программа упала — файл уже пустой. Записать не успели, а стереть успели.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Седьмой день закрыт. Данные живут вечно на диске.",
          },
        ],
      },
      summary:
        "Откуда взялся JSON: Дуглас Крокфорд в 2001 году описал формат обмена данными между программами, понятный и человеку, и компьютеру. В нём хранятся настройки VS Code (settings.json), сохранения игр и ответы серверов.\n\nJSON — это почти Python: списки [] превращаются в массивы [], словари {} — в объекты {}, но true и false пишутся с маленькой буквы, а None называется null. Кавычки в JSON только двойные!\n\nПочему нельзя сохранить просто через str(heroes): строка '[{\"name\": \"Артас\"}]' станет плоским текстом, и data[0] вернёт квадратную скобку '[' вместо словаря героя!\n\nРежимы открытия файлов:\n- 'r' (read) — только чтение. Если файла нет, бросает FileNotFoundError.\n- 'w' (write) — запись. ВНИМАНИЕ: режим 'w' стирает всё содержимое файла сразу в момент открытия!\n\nКонструкция with open(...) as file: гарантирует, что файл закроется автоматически, даже если внутри произойдёт сбой.\n\nЧтобы в файле был красивый русский текст без иероглифов \\u0410, указываем encoding='utf-8', ensure_ascii=False и indent=4 для удобных отступов.\n\nПервый запуск: если файла heroes.json ещё нет, блок except FileNotFoundError перехватывает ошибку и программа спокойно начинает с пустого списка heroes = [].",
      keyRule:
        "Всегда открывай файлы через with open(...) as file: с параметрами encoding='utf-8' и ensure_ascii=False для сохранения русского текста!",
      sections: [
        {
          heading: "Модуль JSON и контекстный менеджер with",
          text: "Модуль json позволяет сохранять структуры данных (списки словарей) в текстовый файл через json.dump() и восстанавливать через json.load().",
          codeExample: {
            title: "Сохранение и чтение в JSON",
            code: `import json\n\nheroes = [{"name": "Артас", "role": "Паладин", "level": 5}]\n\n# Сохранение в файл\nwith open("heroes.json", "w", encoding="utf-8") as f:\n    json.dump(heroes, f, ensure_ascii=False, indent=4)\n\n# Чтение из файла\nwith open("heroes.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\nprint(loaded[0]["name"])  # Артас`,
            explanation: "ensure_ascii=False сохраняет русский текст, а indent=4 форматирует отступы.",
          },
        },
      ],
      steps: [
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\nimport json\n\nFILENAME = "heroes.json"\nheroes = []\n\ndef save_heroes():\n    with open(FILENAME, "w", encoding="utf-8") as file:\n        json.dump(heroes, file, ensure_ascii=False, indent=4)\n\ndef load_heroes():\n    global heroes\n    try:\n        with open(FILENAME, "r", encoding="utf-8") as file:\n            heroes = json.load(file)\n    except FileNotFoundError:\n        heroes = []\n    except json.JSONDecodeError:\n        heroes = []\n\nwindow = tk.Tk()\nwindow.title("Таверна героев")\nwindow.geometry("560x520")\n\ntitle = tk.Label(window, text="Таверна героев", font=("Arial", 18))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\nwindow.mainloop()`,
          output: "Функции save_heroes() и load_heroes() готовы",
          explanation:
            "Шаг 1. Функции сохранения и чтения JSON. FileNotFoundError перехватывается, чтобы программа не падала при первом старте.",
        },
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\nimport json\n\nFILENAME = "heroes.json"\nheroes = []\n\ndef save_heroes():\n    with open(FILENAME, "w", encoding="utf-8") as file:\n        json.dump(heroes, file, ensure_ascii=False, indent=4)\n\ndef load_heroes():\n    global heroes\n    try:\n        with open(FILENAME, "r", encoding="utf-8") as file:\n            heroes = json.load(file)\n    except FileNotFoundError:\n        heroes = []\n\ndef refresh():\n    listbox.delete(0, "end")\n    for i in range(len(heroes)):\n        hero = heroes[i]\n        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"] + " (Ур. " + str(hero["level"]) + ")"\n        listbox.insert("end", line)\n    status.config(text="Героев в таверне: " + str(len(heroes)))\n\nwindow = tk.Tk()\nwindow.title("Таверна героев")\nwindow.geometry("560x520")\n\nlistbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)\nlistbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)\nstatus = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))\nstatus.grid(row=7, column=0, columnspan=2, pady=5)\n\nwindow.mainloop()`,
          output: "Отображение списка героев с классами и уровнями",
          explanation:
            "Шаг 2. Функция refresh() рисует строку героя: номер, имя, класс и уровень, обновляя статусную строку.",
        },
        {
          code: `import tkinter as tk\nfrom tkinter import messagebox\nimport json\n\nFILENAME = "heroes.json"\nheroes = []\n\nwindow = tk.Tk()\nwindow.title("Таверна героев")\nwindow.geometry("560x520")\n\ntitle = tk.Label(window, text="Таверна героев", font=("Arial", 18))\ntitle.grid(row=0, column=0, columnspan=2, pady=15)\n\nname_label = tk.Label(window, text="Имя героя:", font=("Arial", 12))\nname_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")\nname_entry = tk.Entry(window, font=("Arial", 12), width=24)\nname_entry.grid(row=1, column=1, padx=10, pady=5)\n\nrole_label = tk.Label(window, text="Класс:", font=("Arial", 12))\nrole_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")\nrole_entry = tk.Entry(window, font=("Arial", 12), width=24)\nrole_entry.grid(row=2, column=1, padx=10, pady=5)\n\nlevel_label = tk.Label(window, text="Уровень:", font=("Arial", 12))\nlevel_label.grid(row=3, column=0, padx=10, pady=5, sticky="e")\nlevel_entry = tk.Entry(window, font=("Arial", 12), width=24)\nlevel_entry.grid(row=3, column=1, padx=10, pady=5)\n\nlistbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)\nlistbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)\n\nstatus = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))\nstatus.grid(row=7, column=0, columnspan=2, pady=5)\n\ndef save_heroes():\n    with open(FILENAME, "w", encoding="utf-8") as file:\n        json.dump(heroes, file, ensure_ascii=False, indent=4)\n\ndef load_heroes():\n    global heroes\n    try:\n        with open(FILENAME, "r", encoding="utf-8") as file:\n            heroes = json.load(file)\n    except FileNotFoundError:\n        heroes = []\n\ndef refresh():\n    listbox.delete(0, "end")\n    for i in range(len(heroes)):\n        hero = heroes[i]\n        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"] + " (Ур. " + str(hero["level"]) + ")"\n        listbox.insert("end", line)\n    status.config(text="Героев в таверне: " + str(len(heroes)))\n\ndef add_hero():\n    name = name_entry.get().strip()\n    role = role_entry.get().strip()\n    level_text = level_entry.get().strip()\n    if name == "" or role == "" or level_text == "":\n        messagebox.showwarning("Внимание", "Заполни все поля героя")\n        return\n    try:\n        level = int(level_text)\n    except ValueError:\n        messagebox.showerror("Ошибка", "Уровень должен быть числом")\n        return\n    heroes.append({"name": name, "role": role, "level": level})\n    save_heroes()\n    refresh()\n    name_entry.delete(0, "end")\n    role_entry.delete(0, "end")\n    level_entry.delete(0, "end")\n\ndef level_up():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showwarning("Внимание", "Выбери героя в списке")\n        return\n    index = selected[0]\n    heroes[index]["level"] = heroes[index]["level"] + 1\n    save_heroes()\n    refresh()\n    listbox.selection_set(index)\n\ndef delete_hero():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showwarning("Внимание", "Выбери героя для удаления")\n        return\n    index = selected[0]\n    heroes.pop(index)\n    save_heroes()\n    refresh()\n\nadd_button = tk.Button(window, text="Добавить в отряд", font=("Arial", 12), command=add_hero)\nadd_button.grid(row=4, column=0, columnspan=2, pady=8)\n\nlevel_button = tk.Button(window, text="Прокачать (+1 Ур.)", font=("Arial", 12), command=level_up)\nlevel_button.grid(row=6, column=0, padx=10, pady=5)\n\ndelete_button = tk.Button(window, text="Исключить", font=("Arial", 12), command=delete_hero)\ndelete_button.grid(row=6, column=1, padx=10, pady=5)\n\nload_heroes()\nrefresh()\n\nwindow.mainloop()`,
          output: "Полная таверна героев: вечное сохранение на диске в heroes.json",
          explanation:
            "Шаги 3–5. Полный проект! save_heroes() вызывается сразу при любом изменении. При следующем запуске load_heroes() загрузит данные с диска.",
        },
      ],
      mistakes: [
        {
          wrongCode: `def add_hero():\n    heroes.append({"name": name, "role": role, "level": level})\n    refresh()`,
          error: "Герои не сохраняются в файл (забыли вызвать save_heroes)",
          fixedCode: `def add_hero():\n    heroes.append({"name": name, "role": role, "level": level})\n    save_heroes()\n    refresh()`,
          explanation:
            "save_heroes() нужно вызывать в тот же момент, когда изменились данные в памяти.",
        },
        {
          wrongCode: `load_heroes()\nwindow.mainloop()`,
          error: "Список при старте пустой (загрузили данные, но забыли нарисовать)",
          fixedCode: `load_heroes()\nrefresh()\nwindow.mainloop()`,
          explanation:
            "После загрузки данных из файла обязательно вызови refresh() перед mainloop().",
        },
        {
          wrongCode: `def level_up():\n    index = selected[0]\n    heroes[index]["level"] += 1\n    save_heroes()\n    refresh()`,
          error: "Прокачать героя 2 раза подряд не получается (выделение строки слетает)",
          fixedCode: `def level_up():\n    index = selected[0]\n    heroes[index]["level"] += 1\n    save_heroes()\n    refresh()\n    listbox.selection_set(index)`,
          explanation:
            "После перерисовки списка вызови listbox.selection_set(index), чтобы вернуть выделение.",
        },
      ],
      quiz: [
        {
          code: `# Что произойдет с существующим файлом при open("heroes.json", "w")?`,
          options: [
            "Все данные в файле будут стёрты сразу в момент открытия",
            "Новые данные допишутся в конец файла",
            "Файл откроется только для чтения",
          ],
          correct: 0,
          explanation:
            "Режим 'w' (write) полностью очищает файл сразу при открытии!",
        },
        {
          code: `# Зачем указывать ensure_ascii=False при сохранении в JSON?`,
          options: [
            "Чтобы русские буквы сохранялись нормально, а не кодами \\u0410",
            "Чтобы файл сохранялся быстрее",
            "Чтобы в файле не было пробелов",
          ],
          correct: 0,
          explanation:
            "По умолчанию json кодирует нелатинские символы escape-последовательностями \\uXXXX. ensure_ascii=False отключает это.",
        },
        {
          code: `try:\n    with open("data.json", "r") as f: ...\n# Какая ошибка возникает, если файла data.json еще нет на диске?`,
          options: [
            "FileNotFoundError",
            "ZeroDivisionError",
            "NameError",
            "KeyError",
          ],
          correct: 0,
          explanation:
            "При попытке открыть несуществующий файл в режиме 'r' Python выбрасывает FileNotFoundError.",
        },
      ],
      cheatsheet: [
        "import json — встроенный модуль работы с форматом JSON",
        "with open('f.json', 'w', encoding='utf-8') as f: — безопасное открытие на запись",
        "json.dump(data, f, ensure_ascii=False, indent=4) — сохранение структуры в файл",
        "with open('f.json', 'r', encoding='utf-8') as f: — открытие на чтение",
        "data = json.load(f) — загрузка структуры из файла",
      ],
    },
    exercise: {
      task: "Создай приложение «Таверна героев» с сохранением данных в JSON:\n1. Задай константу FILENAME = 'heroes.json' и heroes = []\n2. Напиши функцию save_heroes():\n   with open(FILENAME, 'w', encoding='utf-8') as file:\n       json.dump(heroes, file, ensure_ascii=False, indent=4)\n3. Напиши функцию load_heroes():\n   global heroes\n   try:\n       with open(FILENAME, 'r', encoding='utf-8') as file:\n           heroes = json.load(file)\n   except FileNotFoundError:\n       heroes = []\n4. Создай окно и форму с name_entry, role_entry, level_entry\n5. Напиши add_hero(): добавляет {'name': ..., 'role': ..., 'level': ...}, вызывает save_heroes() и refresh()\n6. Перед window.mainloop() вызови load_heroes() и refresh()!",
      requirements: [
        "Использовать модуль json и константу FILENAME = 'heroes.json'",
        "Реализовать save_heroes() и load_heroes() с обработкой FileNotFoundError",
        "Сохранять данные при добавлении героя через add_hero",
        "Вызывать load_heroes() и refresh() перед window.mainloop()",
      ],
      starterCode: `import tkinter as tk\nfrom tkinter import messagebox\nimport json\n\nFILENAME = "heroes.json"\nheroes = []\n\n# 1. Реализуй save_heroes() и load_heroes()\n\nwindow = tk.Tk()\nwindow.title("Таверна героев")\nwindow.geometry("560x520")\n\ntitle = tk.Label(window, text="Таверна героев", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=10)\n\nname_entry = tk.Entry(window, width=20)\nname_entry.grid(row=1, column=1, padx=5, pady=5)\n\nrole_entry = tk.Entry(window, width=20)\nrole_entry.grid(row=2, column=1, padx=5, pady=5)\n\nlevel_entry = tk.Entry(window, width=20)\nlevel_entry.grid(row=3, column=1, padx=5, pady=5)\n\nlistbox = tk.Listbox(window, width=45, height=10)\nlistbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)\n\n# 2. Напиши refresh() и add_hero()\n\nwindow.mainloop()\n`,
      hint: "def save_heroes():\n    with open(FILENAME, 'w', encoding='utf-8') as f:\n        json.dump(heroes, f, ensure_ascii=False, indent=4)\n\ndef load_heroes():\n    global heroes\n    try:\n        with open(FILENAME, 'r', encoding='utf-8') as f:\n            heroes = json.load(f)\n    except FileNotFoundError:\n        heroes = []",
      solution: `import tkinter as tk\nfrom tkinter import messagebox\nimport json\n\nFILENAME = "heroes.json"\nheroes = []\n\ndef save_heroes():\n    with open(FILENAME, "w", encoding="utf-8") as file:\n        json.dump(heroes, file, ensure_ascii=False, indent=4)\n\ndef load_heroes():\n    global heroes\n    try:\n        with open(FILENAME, "r", encoding="utf-8") as file:\n            heroes = json.load(file)\n    except FileNotFoundError:\n        heroes = []\n\nwindow = tk.Tk()\nwindow.title("Таверна героев")\nwindow.geometry("560x520")\n\ntitle = tk.Label(window, text="Таверна героев", font=("Arial", 16))\ntitle.grid(row=0, column=0, columnspan=2, pady=10)\n\ntk.Label(window, text="Имя:").grid(row=1, column=0, sticky="e")\nname_entry = tk.Entry(window, width=20)\nname_entry.grid(row=1, column=1, padx=5, pady=5)\n\ntk.Label(window, text="Класс:").grid(row=2, column=0, sticky="e")\nrole_entry = tk.Entry(window, width=20)\nrole_entry.grid(row=2, column=1, padx=5, pady=5)\n\ntk.Label(window, text="Уровень:").grid(row=3, column=0, sticky="e")\nlevel_entry = tk.Entry(window, width=20)\nlevel_entry.grid(row=3, column=1, padx=5, pady=5)\n\nlistbox = tk.Listbox(window, width=45, height=10)\nlistbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)\n\ndef refresh():\n    listbox.delete(0, "end")\n    for i in range(len(heroes)):\n        h = heroes[i]\n        listbox.insert("end", h["name"] + " (" + h["role"] + ", ур. " + str(h["level"]) + ")")\n\ndef add_hero():\n    name = name_entry.get().strip()\n    role = role_entry.get().strip()\n    lvl_str = level_entry.get().strip()\n    if not name or not role or not lvl_str:\n        return\n    heroes.append({"name": name, "role": role, "level": int(lvl_str)})\n    save_heroes()\n    refresh()\n    name_entry.delete(0, "end")\n    role_entry.delete(0, "end")\n    level_entry.delete(0, "end")\n\nadd_btn = tk.Button(window, text="Нанять героя", command=add_hero)\nadd_btn.grid(row=4, column=0, columnspan=2, pady=5)\n\nload_heroes()\nrefresh()\n\nwindow.mainloop()`,
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (!/import\s+json\b/.test(cleanCode))
          return { passed: false, message: "Импортируй модуль json." };
        if (!/json\.dump\s*\(/.test(cleanCode))
          return { passed: false, message: "Используй json.dump(...) для сохранения героев." };
        if (!/json\.load\s*\(/.test(cleanCode))
          return { passed: false, message: "Используй json.load(...) для загрузки героев." };
        if (!/FileNotFoundError/.test(cleanCode))
          return { passed: false, message: "Обработай FileNotFoundError в блоке try/except функции load_heroes." };
        return null;
      },
      testCode: `
import tkinter
import _vfs
assert "heroes.json" in _vfs.FILES, "Файл heroes.json должен существовать в файловой системе"
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(entries) >= 3, "Должно быть 3 поля Entry (имя, класс, уровень)"
assert len(buttons) >= 1, "Кнопка добавления героя не найдена"
entries[0].text = "Маг"
entries[1].text = "Волшебник"
entries[2].text = "10"
buttons[0].invoke()
assert len(heroes) >= 1, "Герой не добавлен в heroes"
assert "heroes.json" in _vfs.FILES and len(_vfs.FILES["heroes.json"]) > 0, "heroes.json не сохранен"
print("OK_HEROES_TAVERN")
`,
      validate: (code, output) => {
        if (output.includes("OK_HEROES_TAVERN")) {
          return {
            passed: true,
            message: "Великолепно! Таверна героев успешно сохраняет персонажей в heroes.json! 🧙‍♂️⚔️",
          };
        }
        return {
          passed: false,
          message: "Проверь функции save_heroes, load_heroes и сохранение в heroes.json.",
        };
      },
    },
  },

  
  // ==========================================
  // УРОК 8: МУЗЫКАЛЬНЫЙ ПЛЕЕР
  // ==========================================
  {
    id: "tkinter_music_player",
    moduleId: "module_tkinter",
    title: "8. Музыкальный плеер: модуль os, диалог выбора папки и pygame.mixer",
    icon: "Music",
    shortDesc: "Программа читает папку на диске, фильтрует треки и играет музыку",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ\nОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nУ меня на диске лежит двести треков. Чтобы послушать, я каждый раз лезу в папку и щёлкаю по файлу.\n\nСделайте плеер. Пусть сам найдёт всю музыку в папке и покажет списком.",
        task: "Плеер: выбрать папку, увидеть список треков, играть, ставить на паузу, листать. И громкость ползунком.",
        quotes: [
          {
            speaker: "Алёна, продюсер",
            text: "До сих пор программа работала только со своими данными. Сегодня она впервые полезет в чужую папку на диске.",
          },
          {
            speaker: "Макс, техлид",
            text: "Внутри айпода была та же задача, что у вас: прочитать папку, показать список, нажать и играть.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Первым делом я всегда жму «Отмена». Половина программ на этом падает.",
          },
          {
            speaker: "Ева, QA-инженер",
            text: "Поставьте на паузу и подождите. Без проверки is_paused плеер решит, что песня кончилась, и включит следующую.",
          },
          {
            speaker: "Алёна, продюсер",
            text: "Восьмой день закрыт. На следующем занятии сделаем плейлисты — и вот там нам наконец понадобятся классы.",
          },
          {
            speaker: "Ответ Заказчика в конце",
            text: "Поставил вашу папку, нажал — играет. Громкость работает, листается. Одного не хватает: я хочу свой список. Не всю папку подряд, а выбранные треки в своём порядке.",
          },
        ],
      },
      summary:
        "В этом уроке мы создаем полноценный музыкальный плеер! Программа впервые выходит за рамки внутренних данных и учится работать с реальными файлами на компьютере.\n\nМодуль os и функция os.listdir(path) возвращают все имена файлов и подпапок в указанной директории. Но нам нужны только музыкальные треки, поэтому мы фильтруем их с помощью метода endswith('.mp3'). Чтобы не потерять файлы с расширением заглавными буквами (.MP3), мы приводим имя к нижнему регистру через .lower(), но в список для воспроизведения обязательно сохраняем оригинальное имя.\n\nПуть к папке никогда не зашивается жестко в коде. С помощью модуля from tkinter import filedialog мы вызываем filedialog.askdirectory(), открывая стандартное системное окно выбора папки. Если пользователь нажал «Отмена», функция возвращает пустую строку, и программу нужно аккуратно остановить без падения.\n\nВоспроизведением звука управляет библиотека pygame.mixer. Мы инициализируем её один раз через pygame.mixer.init(), а затем загружаем трек через pygame.mixer.music.load(path) и запускаем pygame.mixer.music.play(). Путь склеивается через os.path.join(folder, track_name).\n\nНовый виджет tk.Scale позволяет регулировать громкость ползунком от 0 до 100. Функция обратного вызова command=set_volume принимает новое значение в виде строки, поэтому мы переводим его в число и делим на 100: int(value) / 100.\n\nГлавная ловушка урока — автопереход между треками! Метод get_busy() возвращает False не только когда песня доиграла, но и когда она стоит на паузе. Поэтому автопереход требует трех условий: get_busy() == False, is_paused == False и current_index >= 0.",
      keyRule:
        "Автопереход требует 3 проверок: get_busy() == False and is_paused == False and current_index >= 0. Без флага is_paused плеер на паузе переключит трек через полсекунды!",
      sections: [
        {
          heading: "Модуль os и чтение содержимого папки",
          text: "Функция os.listdir(path) возвращает список всех имен файлов и папок в директории. Чтобы оставить только музыку, фильтруем имена по расширению.",
          codeExample: {
            title: "Фильтрация музыкальных файлов",
            code: "import os\n\nnames = os.listdir(\"C:/Music\")\nmusic = []\nfor name in names:\n    if name.lower().endswith((\".mp3\", \".wav\", \".ogg\")):\n        music.append(name)\nprint(music)",
            explanation:
              "name.lower() защищает от файлов вида SONG.MP3, а в список добавляется исходное имя.",
          },
        },
        {
          heading: "Диалог выбора папки filedialog.askdirectory()",
          text: "from tkinter import filedialog позволяет пользователю самому выбрать папку с музыкой на диске. При нажатии «Отмена» возвращается пустая строка, которую важно проверить.",
        },
        {
          heading: "Библиотека pygame.mixer",
          text: "pygame.mixer.init() инициализирует звуковой движок. load(path) загружает аудиофайл, play() запускает воспроизведение, pause() и unpause() ставят на паузу и снимают с неё.",
        },
        {
          heading: "Ползунок tk.Scale и кольцевой список",
          text: "Виджет Scale(window, from_=0, to=100, orient='horizontal') передает значение ползунка в коллбэк строкой. Листание треков закольцовывается оператором остатка: (index + 1) % len(tracks).",
        },
      ],
      steps: [
        {
          code: "import os\n\ndef get_tracks(path):\n    result = []\n    names = os.listdir(path)\n    for i in range(len(names)):\n        name = names[i]\n        small = name.lower()\n        if small.endswith(\".mp3\") or small.endswith(\".wav\") or small.endswith(\".ogg\"):\n            result.append(name)\n    result.sort()\n    return result\n\nmusic = get_tracks(\"C:/Music\")\nprint(\"Найдено треков:\", len(music))\nprint(music)",
          output: "Найдено треков: 5\n['01 Intro.mp3', '02 Synthwave Dream.mp3', '03 Cyberpunk City.ogg', '04 Neon Lights.wav', '05 Retro Funk.MP3']",
          explanation:
            "Шаг 1. Функция get_tracks читает папку C:/Music, отсеивает мусор (картинки, подпапки) и сортирует треки по алфавиту.",
        },
        {
          code: "import tkinter as tk\nfrom tkinter import filedialog\nimport os\n\nfolder = \"\"\ntracks = []\n\nwindow = tk.Tk()\nwindow.title(\"Выбор папки\")\nwindow.geometry(\"420x280\")\n\nlistbox = tk.Listbox(window, width=40, height=8)\nlistbox.pack(pady=10)\n\nstatus = tk.Label(window, text=\"Папка не выбрана\")\nstatus.pack(pady=5)\n\ndef get_tracks(path):\n    result = []\n    names = os.listdir(path)\n    for i in range(len(names)):\n        name = names[i]\n        small = name.lower()\n        if small.endswith(\".mp3\") or small.endswith(\".wav\") or small.endswith(\".ogg\"):\n            result.append(name)\n    result.sort()\n    return result\n\ndef refresh():\n    listbox.delete(0, \"end\")\n    for i in range(len(tracks)):\n        listbox.insert(\"end\", tracks[i])\n    status.config(text=\"Треков: \" + str(len(tracks)))\n\ndef choose_folder():\n    global folder, tracks\n    chosen = filedialog.askdirectory()\n    if chosen == \"\":\n        return\n    folder = chosen\n    tracks = get_tracks(folder)\n    refresh()\n\nbtn = tk.Button(window, text=\"Выбрать папку\", command=choose_folder)\nbtn.pack(pady=5)\n\nwindow.mainloop()",
          output: "При нажатии кнопки «Выбрать папку» открывается окно проводника и треки добавляются в список",
          explanation:
            "Шаг 2. Добавили выбор папки через filedialog.askdirectory(). При отмене выходим по return, сохраняя прежний список.",
        },
        {
          code: "import tkinter as tk\nfrom tkinter import messagebox\nimport pygame\nimport os\n\npygame.mixer.init()\n\nfolder = \"C:/Music\"\ntracks = [\"01 Intro.mp3\", \"02 Synthwave Dream.mp3\"]\ncurrent_index = -1\n\nwindow = tk.Tk()\nwindow.title(\"Плеер\")\nwindow.geometry(\"400x260\")\n\nlistbox = tk.Listbox(window, width=35, height=5)\nfor t in tracks:\n    listbox.insert(\"end\", t)\nlistbox.pack(pady=10)\n\nstatus = tk.Label(window, text=\"Готов к игре\")\nstatus.pack(pady=5)\n\ndef play_index(index):\n    global current_index\n    if len(tracks) == 0:\n        return\n    current_index = index\n    path = os.path.join(folder, tracks[current_index])\n    pygame.mixer.music.load(path)\n    pygame.mixer.music.play()\n    is_paused = False\n    listbox.selection_clear(0, \"end\")\n    listbox.selection_set(current_index)\n    status.config(text=\"Играет: \" + tracks[current_index])\n\ndef play():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showerror(\"Ошибка\", \"Выберите трек в списке\")\n        return\n    play_index(selected[0])\n\nbtn = tk.Button(window, text=\"Играть\", command=play)\nbtn.pack(pady=5)\n\nwindow.mainloop()",
          output: "Выбираем трек в Listbox и нажимаем «Играть» — песня загружается в pygame.mixer и начинает воспроизводиться",
          explanation:
            "Шаг 3. Функция play_index(index) собирает полный путь через os.path.join, загружает музыку и подсвечивает трек в Listbox.",
        },
        {
          code: "import tkinter as tk\nimport pygame\n\npygame.mixer.init()\n\nis_paused = False\ncurrent_index = 0\ntracks = [\"01 Intro.mp3\"]\n\nwindow = tk.Tk()\nwindow.title(\"Пауза\")\nwindow.geometry(\"320x180\")\n\nstatus = tk.Label(window, text=\"Играет: 01 Intro.mp3\")\nstatus.pack(pady=15)\n\ndef pause():\n    global is_paused\n    if current_index == -1:\n        return\n    if is_paused:\n        pygame.mixer.music.unpause()\n        is_paused = False\n        status.config(text=\"Играет: \" + tracks[current_index])\n    else:\n        pygame.mixer.music.pause()\n        is_paused = True\n        status.config(text=\"Пауза\")\n\nbtn = tk.Button(window, text=\"Пауза / Продолжить\", command=pause)\nbtn.pack(pady=10)\n\nwindow.mainloop()",
          output: "Кнопка «Пауза / Продолжить» переключает воспроизведение туда и обратно",
          explanation:
            "Шаг 4. Кнопка «Пауза»: одна кнопка, два действия. Переменная is_paused хранит текущее состояние.",
        },
        {
          code: "tracks = [\"01 Intro.mp3\", \"02 Beat.mp3\", \"03 Synth.mp3\"]\ncurrent = 2\n\n# Следующий трек (заворачивает в начало):\nnext_idx = (current + 1) % len(tracks)\nprint(\"Текущий:\", current, \"-> Следующий:\", next_idx)\n\n# Предыдущий трек с первого на последний:\nprev_idx = (0 - 1) % len(tracks)\nprint(\"С 0 назад ->\", prev_idx)",
          output: "Текущий: 2 -> Следующий: 0\nС 0 назад -> 2",
          explanation:
            "Шаг 5. Формула (current + 1) % len(tracks) замыкает список в кольцо, избавляя от лишних условий if.",
        },
        {
          code: "import tkinter as tk\nfrom tkinter import messagebox\nfrom tkinter import filedialog\nimport pygame\nimport os\nimport json\n\nSETTINGS = \"player_settings.json\"\n\nfolder = \"\"\ntracks = []\ncurrent_index = -1\nis_paused = False\n\npygame.mixer.init()\n\nwindow = tk.Tk()\nwindow.title(\"Плеер ProTeam Labs\")\nwindow.geometry(\"500x520\")\n\ndef get_tracks(path):\n    result = []\n    names = os.listdir(path)\n    for i in range(len(names)):\n        name = names[i]\n        small = name.lower()\n        if small.endswith(\".mp3\") or small.endswith(\".wav\") or small.endswith(\".ogg\"):\n            result.append(name)\n    result.sort()\n    return result\n\ndef refresh():\n    listbox.delete(0, \"end\")\n    for i in range(len(tracks)):\n        listbox.insert(\"end\", tracks[i])\n    status.config(text=\"Треков: \" + str(len(tracks)))\n\ndef choose_folder():\n    global folder, tracks, current_index\n    chosen = filedialog.askdirectory()\n    if chosen == \"\":\n        return\n    folder = chosen\n    tracks = get_tracks(folder)\n    current_index = -1\n    pygame.mixer.music.stop()\n    refresh()\n    save_settings()\n\ndef play_index(index):\n    global current_index, is_paused\n    if len(tracks) == 0:\n        return\n    current_index = index\n    path = os.path.join(folder, tracks[current_index])\n    pygame.mixer.music.load(path)\n    pygame.mixer.music.play()\n    is_paused = False\n    listbox.selection_clear(0, \"end\")\n    listbox.selection_set(current_index)\n    status.config(text=\"Играет: \" + tracks[current_index])\n\ndef play():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showerror(\"Ошибка\", \"Выберите трек в списке\")\n        return\n    play_index(selected[0])\n\ndef pause():\n    global is_paused\n    if current_index == -1:\n        return\n    if is_paused:\n        pygame.mixer.music.unpause()\n        is_paused = False\n        status.config(text=\"Играет: \" + tracks[current_index])\n    else:\n        pygame.mixer.music.pause()\n        is_paused = True\n        status.config(text=\"Пауза\")\n\ndef next_track():\n    if len(tracks) == 0:\n        return\n    play_index((current_index + 1) % len(tracks))\n\ndef prev_track():\n    if len(tracks) == 0:\n        return\n    play_index((current_index - 1) % len(tracks))\n\ndef set_volume(value):\n    pygame.mixer.music.set_volume(int(value) / 100)\n\ndef check_music():\n    if (pygame.mixer.music.get_busy() == False\n            and is_paused == False\n            and current_index >= 0):\n        next_track()\n    window.after(500, check_music)\n\ndef save_settings():\n    data = {\"folder\": folder, \"volume\": volume_scale.get()}\n    with open(SETTINGS, \"w\", encoding=\"utf-8\") as file:\n        json.dump(data, file, ensure_ascii=False, indent=4)\n\ndef load_settings():\n    global folder, tracks\n    try:\n        with open(SETTINGS, \"r\", encoding=\"utf-8\") as file:\n            data = json.load(file)\n    except FileNotFoundError:\n        return\n    folder = data.get(\"folder\", \"\")\n    volume_scale.set(data.get(\"volume\", 70))\n    if folder != \"\" and os.path.isdir(folder):\n        tracks = get_tracks(folder)\n        refresh()\n\ndef on_close():\n    save_settings()\n    pygame.mixer.music.stop()\n    window.destroy()\n\nfolder_button = tk.Button(window, text=\"Выбрать папку\", font=(\"Arial\", 12), command=choose_folder)\nfolder_button.pack(pady=8)\n\nlistbox = tk.Listbox(window, font=(\"Arial\", 11), width=45, height=10)\nlistbox.pack(pady=5)\n\nstatus = tk.Label(window, text=\"Папка не выбрана\", font=(\"Arial\", 11))\nstatus.pack(pady=4)\n\nbuttons = tk.Frame(window)\nbuttons.pack(pady=5)\n\nprev_button = tk.Button(buttons, text=\"<<\", width=4, command=prev_track)\nprev_button.grid(row=0, column=0, padx=3)\n\nplay_button = tk.Button(buttons, text=\"Играть\", width=8, command=play)\nplay_button.grid(row=0, column=1, padx=3)\n\npause_button = tk.Button(buttons, text=\"Пауза\", width=8, command=pause)\npause_button.grid(row=0, column=2, padx=3)\n\nnext_button = tk.Button(buttons, text=\">>\", width=4, command=next_track)\nnext_button.grid(row=0, column=3, padx=3)\n\nvolume_scale = tk.Scale(window, from_=0, to=100, orient=\"horizontal\", label=\"Громкость\", command=set_volume)\nvolume_scale.set(70)\nvolume_scale.pack(pady=5)\n\nwindow.protocol(\"WM_DELETE_WINDOW\", on_close)\n\nload_settings()\ncheck_music()\n\nwindow.mainloop()",
          output: "Полнофункциональный музыкальный плеер запущен в окне Tkinter!",
          explanation:
            "Шаг 6. Итоговая программа! Читает папку, воспроизводит выбранные песни, листает треки по кругу, регулирует звук ползунком и запоминает настройки в JSON.",
        },
      ],
      mistakes: [
        {
          wrongCode: "def check_music():\n    if pygame.mixer.music.get_busy() == False and current_index >= 0:\n        next_track()\n    window.after(500, check_music)",
          error: "Логическая ошибка: при паузе плеер через полсекунды переключает песню на следующую!",
          fixedCode: "def check_music():\n    if (pygame.mixer.music.get_busy() == False\n            and is_paused == False\n            and current_index >= 0):\n        next_track()\n    window.after(500, check_music)",
          explanation:
            "get_busy() возвращает False и когда трек закончился, и когда стоит пауза. Обязательно проверяй and is_paused == False!",
        },
        {
          wrongCode: "def check_music():\n    if pygame.mixer.music.get_busy() == False and is_paused == False:\n        next_track()\n    window.after(500, check_music)",
          error: "Логическая ошибка: плеер сам включает первый трек сразу при запуске программы",
          fixedCode: "def check_music():\n    if (pygame.mixer.music.get_busy() == False\n            and is_paused == False\n            and current_index >= 0):\n        next_track()\n    window.after(500, check_music)",
          explanation:
            "При старте ничего еще не играло, но get_busy() уже False. Добавь проверку and current_index >= 0.",
        },
        {
          wrongCode: "for i in range(len(names)):\n    name = names[i]\n    if name.endswith('.mp3'):\n        result.append(name)",
          error: "Файлы с заглавным расширением (SONG.MP3) бесследно пропадают из списка",
          fixedCode: "for i in range(len(names)):\n    name = names[i]\n    small = name.lower()\n    if small.endswith('.mp3'):\n        result.append(name)",
          explanation:
            "Проверяй расширение через small = name.lower(), но в список result добавляй оригинальное имя name.",
        },
        {
          wrongCode: "def set_volume():\n    pygame.mixer.music.set_volume(0.5)",
          error: "TypeError: set_volume() takes 0 positional arguments but 1 was given",
          fixedCode: "def set_volume(value):\n    pygame.mixer.music.set_volume(int(value) / 100)",
          explanation:
            "Виджет Scale при вызове command передает новое значение ползунка в качестве строкового аргумента. Функция обязана принимать параметр value!",
        },
        {
          wrongCode: "def set_volume(value):\n    pygame.mixer.music.set_volume(int(value))",
          error: "Логическая ошибка: громкость всегда максимальная (70 воспринимается как 7000% громкости)",
          fixedCode: "def set_volume(value):\n    pygame.mixer.music.set_volume(int(value) / 100)",
          explanation:
            "pygame.mixer.music.set_volume ожидает число от 0.0 до 1.0. Дели значение ползунка на 100.",
        },
        {
          wrongCode: "volume_scale = tk.Scale(window, from=0, to=100)",
          error: "SyntaxError: invalid syntax on line 1 (from — служебное слово)",
          fixedCode: "volume_scale = tk.Scale(window, from_=0, to=100)",
          explanation:
            "В Python слово 'from' зарезервировано для импорта. В Tkinter параметр пишется с подчеркиванием: from_=0.",
        },
      ],
      quiz: [
        {
          code: 'names = ["01 song.mp3", "COVER.JPG", "02 BEAT.MP3", "notes.txt"]\nmusic = [n for n in names if n.lower().endswith(".mp3")]\nprint(len(music))',
          options: ["1", "2", "3", "4"],
          correct: 1,
          explanation:
            "И '01 song.mp3', и '02 BEAT.MP3' при вызове .lower() заканчиваются на '.mp3', поэтому в списке окажется ровно 2 трека.",
        },
        {
          code: "current = 4\ntracks_count = 5\nnext_track = (current + 1) % tracks_count\nprint(next_track)",
          options: ["0", "4", "5", "1"],
          correct: 0,
          explanation:
            "(4 + 1) % 5 = 5 % 5 = 0. Формула закольцовывает список: после последнего (4) трека начинает играть самый первый (0).",
        },
        {
          code: "# Почему в check_music важна проверка is_paused == False?\n# Что будет без нее?",
          options: [
            "На паузе плеер через полсекунды переключит песню на следующую",
            "Плеер перестанет воспроизводить звук",
            "Возникнет ошибка SyntaxError",
            "Окно сразу закроется",
          ],
          correct: 0,
          explanation:
            "get_busy() возвращает False не только когда трек завершился, но и когда нажата пауза! Без флага is_paused плеер решит, что трек доиграл до конца.",
        },
      ],
      cheatsheet: [
        "from tkinter import filedialog — диалог выбора папки filedialog.askdirectory()",
        "import os — os.listdir(path) читает имена файлов, os.path.join(a, b) склеивает путь",
        "import pygame — pygame.mixer.init(), music.load(), play(), pause(), unpause(), set_volume()",
        "tk.Scale(window, from_=0, to=100, orient='horizontal') — ползунок (from_ с подчеркиванием!)",
        "window.after(500, check_music) — вызов функции через таймер 500 мс без зависания окна",
      ],
    },
    exercise: {
      task: "Собери музыкальный плеер ProTeam Music Player:\n1. Импортируй tkinter, filedialog, pygame, os\n2. Инициализируй звук: pygame.mixer.init()\n3. Напиши get_tracks(path): возвращает отсортированный список файлов с расширениями .mp3, .wav, .ogg (используй small = name.lower())\n4. Напиши play_index(index): загружает os.path.join(folder, tracks[index]), вызывает play(), ставит is_paused = False и подсвечивает трек в listbox\n5. Напиши pause(): переключает unpause() и pause() через флаг is_paused\n6. Напиши next_track() и prev_track() с кольцевым переходом через % len(tracks)\n7. Создай кнопки <<, Играть, Пауза, >> и ползунок volume_scale = tk.Scale(window, from_=0, to=100, orient='horizontal', label='Громкость', command=set_volume)\n8. Запусти check_music() с проверками get_busy() == False, is_paused == False и current_index >= 0 перед window.mainloop()!",
      requirements: [
        "Использовать модули os, pygame, filedialog",
        "Инициализировать pygame.mixer.init()",
        "Реализовать get_tracks с фильтрацией расширений .mp3, .wav, .ogg",
        "Реализовать play_index, pause, next_track, prev_track",
        "Создать виджет tk.Scale с from_=0, to=100 для регулировки громкости",
        "Реализовать функцию check_music с тройным условием автоперехода",
      ],
      starterCode: "import tkinter as tk\nfrom tkinter import messagebox\nfrom tkinter import filedialog\nimport pygame\nimport os\n\nfolder = \"C:/Music\"\ntracks = []\ncurrent_index = -1\nis_paused = False\n\npygame.mixer.init()\n\n# 1. Напиши get_tracks(path)\n\nwindow = tk.Tk()\nwindow.title(\"ProTeam Music Player\")\nwindow.geometry(\"500x480\")\n\nlistbox = tk.Listbox(window, font=(\"Arial\", 11), width=45, height=9)\nlistbox.pack(pady=10)\n\nstatus = tk.Label(window, text=\"Готов к воспроизведению\", font=(\"Arial\", 11))\nstatus.pack(pady=5)\n\nbuttons = tk.Frame(window)\nbuttons.pack(pady=5)\n\n# 2. Напиши play_index(index), play(), pause(), next_track(), prev_track(), set_volume(val)\n\n# 3. Добавь кнопки <<, Играть, Пауза, >> и volume_scale\n\n# 4. Напиши check_music()\n\nwindow.mainloop()",
      hint: "Не забудь: def set_volume(value): pygame.mixer.music.set_volume(int(value) / 100), а у Scale пиши from_=0, to=100.",
      solution: "import tkinter as tk\nfrom tkinter import messagebox\nfrom tkinter import filedialog\nimport pygame\nimport os\n\nfolder = \"C:/Music\"\ntracks = []\ncurrent_index = -1\nis_paused = False\n\npygame.mixer.init()\n\ndef get_tracks(path):\n    result = []\n    names = os.listdir(path)\n    for i in range(len(names)):\n        name = names[i]\n        small = name.lower()\n        if small.endswith(\".mp3\") or small.endswith(\".wav\") or small.endswith(\".ogg\"):\n            result.append(name)\n    result.sort()\n    return result\n\ntracks = get_tracks(folder)\n\nwindow = tk.Tk()\nwindow.title(\"ProTeam Music Player\")\nwindow.geometry(\"500x480\")\n\nlistbox = tk.Listbox(window, font=(\"Arial\", 11), width=45, height=9)\nfor t in tracks:\n    listbox.insert(\"end\", t)\nlistbox.pack(pady=10)\n\nstatus = tk.Label(window, text=\"Треков: \" + str(len(tracks)), font=(\"Arial\", 11))\nstatus.pack(pady=5)\n\ndef play_index(index):\n    global current_index, is_paused\n    if len(tracks) == 0:\n        return\n    current_index = index\n    path = os.path.join(folder, tracks[current_index])\n    pygame.mixer.music.load(path)\n    pygame.mixer.music.play()\n    is_paused = False\n    listbox.selection_clear(0, \"end\")\n    listbox.selection_set(current_index)\n    status.config(text=\"Играет: \" + tracks[current_index])\n\ndef play():\n    selected = listbox.curselection()\n    if len(selected) == 0:\n        messagebox.showerror(\"Ошибка\", \"Выберите трек в списке\")\n        return\n    play_index(selected[0])\n\ndef pause():\n    global is_paused\n    if current_index == -1:\n        return\n    if is_paused:\n        pygame.mixer.music.unpause()\n        is_paused = False\n        status.config(text=\"Играет: \" + tracks[current_index])\n    else:\n        pygame.mixer.music.pause()\n        is_paused = True\n        status.config(text=\"Пауза\")\n\ndef next_track():\n    if len(tracks) == 0:\n        return\n    play_index((current_index + 1) % len(tracks))\n\ndef prev_track():\n    if len(tracks) == 0:\n        return\n    play_index((current_index - 1) % len(tracks))\n\ndef set_volume(value):\n    pygame.mixer.music.set_volume(int(value) / 100)\n\nbuttons = tk.Frame(window)\nbuttons.pack(pady=5)\n\nprev_btn = tk.Button(buttons, text=\"<<\", width=4, command=prev_track)\nprev_btn.grid(row=0, column=0, padx=3)\n\nplay_btn = tk.Button(buttons, text=\"Играть\", width=8, command=play)\nplay_btn.grid(row=0, column=1, padx=3)\n\npause_btn = tk.Button(buttons, text=\"Пауза\", width=8, command=pause)\npause_btn.grid(row=0, column=2, padx=3)\n\nnext_btn = tk.Button(buttons, text=\">>\", width=4, command=next_track)\nnext_btn.grid(row=0, column=3, padx=3)\n\nvolume_scale = tk.Scale(window, from_=0, to=100, orient=\"horizontal\", label=\"Громкость\", command=set_volume)\nvolume_scale.set(70)\nvolume_scale.pack(pady=5)\n\ndef check_music():\n    if (pygame.mixer.music.get_busy() == False\n            and is_paused == False\n            and current_index >= 0):\n        next_track()\n    window.after(500, check_music)\n\ncheck_music()\n\nwindow.mainloop()",
      tests: [{ inputs: [], expected: "" }],
      codeCheck: (cleanCode) => {
        if (!/import\s+os\b/.test(cleanCode))
          return { passed: false, message: "Импортируй модуль os." };
        if (!/import\s+pygame\b/.test(cleanCode))
          return { passed: false, message: "Импортируй модуль pygame." };
        if (!/pygame\.mixer\.init/.test(cleanCode))
          return { passed: false, message: "Вызови pygame.mixer.init() для инициализации звука." };
        if (!/def\s+get_tracks\b/.test(cleanCode))
          return { passed: false, message: "Объяви функцию get_tracks(path)." };
        if (!/tk\.Scale\b/.test(cleanCode))
          return { passed: false, message: "Создай виджет tk.Scale для громкости." };
        return null;
      },
      testCode: "import tkinter\nimport pygame\nassert callable(get_tracks), \"get_tracks должна быть функцией\"\nt = get_tracks(\"C:/Music\")\nassert len(t) >= 4, \"get_tracks должна возвращать музыкальные треки из C:/Music\"\nscales = [w for w in tkinter.WIDGETS if w.kind == \"Scale\"]\nassert len(scales) >= 1, \"Виджет Scale не найден в окне\"\nbuttons = [w for w in tkinter.WIDGETS if w.kind == \"Button\"]\nassert len(buttons) >= 3, \"Должны присутствовать кнопки управления (<<, Играть, Пауза, >>)\"\nif \"play_index\" in globals():\n    play_index(0)\n    assert current_index == 0, \"current_index должен стать 0\"\n    assert pygame.mixer.music.get_busy() == True, \"Музыка должна начать воспроизведение\"\nif \"pause\" in globals():\n    pause()\n    assert is_paused == True, \"is_paused должен стать True при первой паузе\"\n    pause()\n    assert is_paused == False, \"is_paused должен стать False при продолжении\"\nprint(\"OK_MUSIC_PLAYER\")",
      validate: (code, output) => {
        if (output.includes("OK_MUSIC_PLAYER")) {
          return {
            passed: true,
            message: "Браво! Музыкальный плеер ProTeam полностью собран и играет треки! 🎵🎧📻",
          };
        }
        return {
          passed: false,
          message: "Проверь функции get_tracks, play_index, pause, а также Scale и кнопки управления.",
        };
      },
    },
  },
];
