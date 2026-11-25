import type { PythonLesson } from "./pythonCurriculum";

/** Уроки 11–12 по презентациям о запросах к API и работе с изображениями. */
export const API_LESSONS: PythonLesson[] = [
  {
    id: "tkinter_weather_station",
    moduleId: "module_tkinter",
    title: "11. Погодная станция: запросы к API и прогноз на три дня",
    icon: "AppWindow",
    shortDesc: "Получи погоду по названию города, обработай ошибки и покажи прогноз",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ · ОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nСеквенсор забрали, команда в восторге. Теперь в офисе спорят, брать ли зонт. У нас ребята из разных городов, и каждый лезет в телефон. Сделайте окошко: вписал город — увидел температуру, небо и прогноз на три дня. Данные должны приходить из настоящего сервиса.",
        task: "Собрать погодную станцию: запрос по городу, понятный экран и защита от проблем с интернетом или неверным названием.",
        quotes: [
          { speaker: "Алёна, продюсер", text: "Погода по названию города и прогноз на три дня." },
          { speaker: "Макс, техлид", text: "API — как заказ в кафе: выбираешь из меню, отправляешь запрос и получаешь ответ." },
          { speaker: "Ева, QA-инженер", text: "Если пришёл неожиданный ответ, сначала посмотри, что именно пришло. Не обращайся к parts[1], пока не проверил длину списка." },
        ],
      },
      summary:
        "API — это способ попросить другую программу о данных. Мы отправим запрос погодному сервису по интернету и получим ответ. Ссылка указывает, к какому сервису обратиться, а параметры уточняют запрос: формат ответа и язык.\n\nКороткий ответ сервиса — обычная строка, например «-3°C|Пасмурно». Метод split('|') разрезает её на части: parts[0] — температура, parts[1] — описание неба.\n\nДля прогноза на несколько дней сервис возвращает JSON — структуру из словарей и списков. Ответ превращается в словарь методом response.json(), а список дней лежит в days. Для каждого дня можно взять минимальную и максимальную температуру.\n\nИнтернет может пропасть, а город может быть написан неверно. Сетевой запрос оборачиваем в try/except и задаём timeout=10, чтобы программа не ждала бесконечно. Перед обращением к parts[1] проверяем, что сервис действительно прислал две части.",
      keyRule:
        "Сначала проверь ответ API, потом разбирай его. Для запроса указывай timeout, а после split проверяй длину списка.",
      sections: [
        {
          heading: "API — заказ по адресу",
          text: "Запрос похож на ссылку, которую можно открыть в браузере. Параметры передаются словарём, чтобы requests сам добавил их к адресу.",
          codeExample: {
            title: "Запрос погоды в консоли",
            code: `import requests\n\ncity = "Москва"\nparams = {"format": "%t|%C", "lang": "ru"}\nresponse = requests.get(\n    "https://wttr.in/" + city,\n    params=params,\n    timeout=10\n)\nprint(response.text)`,
            explanation: "response.text — текстовый ответ. В учебном тренажёре сайт подставляет пример ответа, поэтому запуск работает без подключения к погодному сервису.",
          },
        },
        {
          heading: "Разбираем строку ответа",
          text: "Разделитель | отделяет температуру от описания неба. После split результат — список строк.",
          codeExample: {
            title: "Температура и небо отдельно",
            code: `answer = "-3°C|Пасмурно"\nparts = answer.split("|")\nprint(parts[0])\nprint(parts[1])`,
            explanation: "Если в ответе нет разделителя, parts[1] не существует. Поэтому длину списка нужно проверить заранее.",
          },
        },
        {
          heading: "Прогноз приходит в JSON",
          text: "Для прогноза просим формат j1. В days попадут три словаря с минимальной и максимальной температурой.",
          codeExample: {
            title: "Три дня прогноза",
            code: `response = requests.get(\n    "https://wttr.in/Москва",\n    params={"format": "j1"},\n    timeout=10\n)\ndays = response.json()["weather"]\nprint(days[0]["mintempC"], days[0]["maxtempC"])`,
            explanation: "Как и в уроке про JSON, сначала выбираем ключ словаря, потом элемент списка.",
          },
        },
      ],
      steps: [
        {
          code: `import requests\n\ncity = "Москва"\nparams = {"format": "%t|%C", "lang": "ru"}\nresponse = requests.get("https://wttr.in/" + city, params=params, timeout=10)\nprint(response.text)\nparts = response.text.split("|")\nprint(parts[0])\nprint(parts[1])`,
          output: "-3°C|Пасмурно\n-3°C\nПасмурно",
          explanation: "Шаг 1. Запрашиваем короткий ответ и делим его по символу |. Словарь params — дополнительные пожелания к запросу.",
        },
        {
          code: `import tkinter as tk\nimport requests\n\nwindow = tk.Tk()\nwindow.title("Погодная станция")\ncity_entry = tk.Entry(window, justify="center")\ncity_entry.insert(0, "Москва")\ncity_entry.pack(pady=10)\ntemp_label = tk.Label(window, text="—", font=("Arial", 32, "bold"))\ntemp_label.pack()\nsky_label = tk.Label(window, text="Введите город")\nsky_label.pack()\n\ndef update():\n    city = city_entry.get()\n    params = {"format": "%t|%C", "lang": "ru"}\n    response = requests.get("https://wttr.in/" + city, params=params, timeout=10)\n    parts = response.text.split("|")\n    temp_label.config(text=parts[0])\n    sky_label.config(text=parts[1])\n\nbutton = tk.Button(window, text="Узнать погоду", command=update)\nbutton.pack(pady=10)\nupdate()\nwindow.mainloop()`,
          output: "Окно показывает -3°C и «Пасмурно»",
          explanation: "Шаг 2. Поле Entry хранит название города. Обработчик кнопки получает текст, делает запрос и меняет надписи через config().",
        },
        {
          code: `def update():\n    city = city_entry.get()\n    params = {"format": "%t|%C", "lang": "ru"}\n    try:\n        response = requests.get("https://wttr.in/" + city, params=params, timeout=10)\n    except requests.RequestException:\n        sky_label.config(text="Нет связи со станцией")\n        return\n    parts = response.text.split("|")\n    if len(parts) < 2:\n        sky_label.config(text="Город не найден")\n        return\n    temp_label.config(text=parts[0])\n    sky_label.config(text=parts[1])`,
          output: "Без соединения появляется сообщение. Если сервис не узнал город, программа не падает.",
          explanation: "Шаг 3. Ошибка сети ловится в except. return завершает функцию, если продолжать нечего. Для проверки в браузерном тренажёре введи OFFLINE или Абырвалг.",
        },
        {
          code: `names = ["Сегодня", "Завтра", "Послезавтра"]\nresponse = requests.get("https://wttr.in/Москва", params={"format": "j1"}, timeout=10)\ndays = response.json()["weather"]\nfor i in range(3):\n    line = names[i] + ": от " + days[i]["mintempC"] + " до " + days[i]["maxtempC"] + "°C"\n    print(line)`,
          output: "Сегодня: от -5 до -1°C\nЗавтра: от -3 до 2°C\nПослезавтра: от 0 до 4°C",
          explanation: "Шаг 4. Список names сопоставляет номеру дня русское название, а days[i] содержит прогноз на тот же день.",
        },
      ],
      mistakes: [
        {
          wrongCode: `parts = response.text.split("|")\ntemp_label.config(text=parts[0])\nsky_label.config(text=parts[1])`,
          error: "IndexError: list index out of range",
          fixedCode: `parts = response.text.split("|")\nif len(parts) < 2:\n    sky_label.config(text="Город не найден")\n    return`,
          explanation: "Сервис может вернуть сообщение об ошибке вместо погоды. Проверяй форму ответа перед тем, как брать элементы списка.",
        },
        {
          wrongCode: `response = requests.get(url)`,
          error: "Программа может долго ждать ответа",
          fixedCode: `response = requests.get(url, timeout=10)`,
          explanation: "Тайм-аут ограничивает ожидание ответа десятью секундами.",
        },
      ],
      quiz: [
        {
          code: `parts = "-3°C|Пасмурно".split("|")\nprint(parts[1])`,
          options: ["-3°C", "Пасмурно", "1", "Ошибка"],
          correct: 1,
          explanation: "После split первый элемент имеет индекс 0, второй — индекс 1.",
        },
        {
          code: `try:\n    response = requests.get(url, timeout=10)\nexcept requests.RequestException:\n    print("Нет связи")`,
          options: ["Ловит ошибку запроса", "Разрезает ответ", "Повторяет запрос бесконечно", "Преобразует ответ в JSON"],
          correct: 0,
          explanation: "RequestException сообщает о проблеме во время сетевого запроса.",
        },
      ],
      cheatsheet: [
        "requests.get(url, params=словарь, timeout=10) — отправить запрос с ограничением ожидания",
        "response.text — получить текстовый ответ сервиса",
        "response.json() — превратить JSON-ответ в словарь и списки",
        "text.split('|') — разделить строку на части",
        "if len(parts) < 2: — проверить, что частей достаточно",
        "except requests.RequestException: — обработать сбой соединения",
      ],
    },
    exercise: {
      task: "Собери погодную станцию ProTeam Labs:\n1. Создай поле для названия города и кнопку «Узнать погоду».\n2. По нажатию запроси короткий формат %t|%C на русском языке с timeout=10.\n3. Раздели ответ и покажи температуру и описание неба в окне.\n4. Обработай отсутствие связи и ответ для неизвестного города.\n5. Запроси формат j1 и покажи в списке минимум и максимум на сегодня, завтра и послезавтра.",
      requirements: [
        "Создать поле Entry, кнопку и надписи для температуры и неба",
        "Использовать requests.get с params и timeout=10",
        "Проверить ответ перед чтением двух частей после split",
        "Обработать requests.RequestException и неизвестный город",
        "Показать прогноз из трёх дней в Listbox",
      ],
      starterCode: `import tkinter as tk
import requests

window = tk.Tk()
window.title("Погодная станция ProTeam Labs")

city_entry = tk.Entry(window, justify="center")
city_entry.insert(0, "Москва")
city_entry.pack(pady=8)

temp_label = tk.Label(window, text="—", font=("Arial", 28, "bold"))
temp_label.pack()
sky_label = tk.Label(window, text="Нажми кнопку")
sky_label.pack()
forecast_list = tk.Listbox(window, height=3, width=42)
forecast_list.pack(pady=8)

def show_forecast():
    # Запроси format=j1, возьми три дня и заполни forecast_list
    pass

def update():
    # Запроси погоду, проверь ответ и обнови надписи
    # В конце вызови show_forecast()
    pass

button = tk.Button(window, text="Узнать погоду", command=update)
button.pack(pady=8)
window.mainloop()
`,
      hint: "Сначала очисти список: forecast_list.delete(0, 'end'). Для запроса прогноза используй response.json()['weather']; название дня возьми из списка names по индексу i.",
      solution: `import tkinter as tk
import requests

window = tk.Tk()
window.title("Погодная станция ProTeam Labs")
city_entry = tk.Entry(window, justify="center")
city_entry.insert(0, "Москва")
city_entry.pack(pady=8)
temp_label = tk.Label(window, text="—", font=("Arial", 28, "bold"))
temp_label.pack()
sky_label = tk.Label(window, text="Нажми кнопку")
sky_label.pack()
forecast_list = tk.Listbox(window, height=3, width=42)
forecast_list.pack(pady=8)

def show_forecast():
    forecast_list.delete(0, "end")
    names = ["Сегодня", "Завтра", "Послезавтра"]
    response = requests.get("https://wttr.in/" + city_entry.get(), params={"format": "j1"}, timeout=10)
    days = response.json()["weather"]
    for i in range(3):
        forecast_list.insert("end", names[i] + ": от " + days[i]["mintempC"] + " до " + days[i]["maxtempC"] + "°C")

def update():
    city = city_entry.get()
    try:
        response = requests.get("https://wttr.in/" + city, params={"format": "%t|%C", "lang": "ru"}, timeout=10)
    except requests.RequestException:
        sky_label.config(text="Нет связи со станцией")
        return
    parts = response.text.split("|")
    if len(parts) < 2:
        sky_label.config(text="Город не найден")
        return
    temp_label.config(text=parts[0])
    sky_label.config(text=parts[1])
    show_forecast()

button = tk.Button(window, text="Узнать погоду", command=update)
button.pack(pady=8)
update()
window.mainloop()`,
      tests: [{ inputs: [], expected: "OK_WEATHER_STATION" }],
      testCode: `
assert callable(update) and callable(show_forecast), "Нужны функции update и show_forecast"
update()
assert temp_label.cget("text") == "-3°C", "Покажи температуру в temp_label"
assert sky_label.cget("text") == "Пасмурно", "Покажи описание погоды в sky_label"
assert forecast_list.size() == 3, "Покажи три дня в forecast_list"
city_entry.delete(0, "end")
city_entry.insert(0, "Абырвалг")
update()
assert sky_label.cget("text") == "Город не найден", "Обработай ответ неизвестного города"
city_entry.delete(0, "end")
city_entry.insert(0, "OFFLINE")
update()
assert sky_label.cget("text") == "Нет связи со станцией", "Обработай отсутствие связи"
print("OK_WEATHER_STATION")
`,
      codeCheck: (cleanCode) => {
        if (!/import\s+requests\b/.test(cleanCode)) return { passed: false, message: "Подключи модуль requests." };
        if (!/def\s+update\s*\(/.test(cleanCode)) return { passed: false, message: "Создай функцию update для кнопки." };
        if (!/requests\.get\s*\(/.test(cleanCode)) return { passed: false, message: "Отправь запрос с requests.get()." };
        if (!/timeout\s*=\s*10/.test(cleanCode)) return { passed: false, message: "Добавь timeout=10, чтобы запрос не ждал бесконечно." };
        if (!/def\s+show_forecast\s*\(/.test(cleanCode)) return { passed: false, message: "Создай функцию show_forecast для прогноза." };
        return null;
      },
      validate: (_code, output) => output.includes("OK_WEATHER_STATION")
        ? { passed: true, message: "Ачивка «Синоптик» получена! Погодная станция показывает текущую погоду и прогноз. ☁️🌦️" }
        : { passed: false, message: "Проверь запрос, обработку ошибок и список прогноза." },
    },
  },
  {
    id: "tkinter_dog_feed",
    moduleId: "module_tkinter",
    title: "12. Собачья лента: API, изображения и выбор породы",
    icon: "AppWindow",
    shortDesc: "Получи ссылку на собаку, скачай картинку, уменьши её и покажи в окне",
    theory: {
      story: {
        letter:
          "ВХОДЯЩЕЕ СООБЩЕНИЕ · ОТПРАВИТЕЛЬ: ЗАКАЗЧИК\n\nПогодная станция работает. Новая задача для настроения: нужна кнопка «Ещё собаку!» и выбор породы. Нажал — увидел случайную собаку, а фанаты корги могут выбрать корги.",
        task: "Сделать ленту фотографий собак: получать картинку из API, показывать её в окне и выбирать породу.",
        quotes: [
          { speaker: "Алёна, продюсер", text: "Случайная собака по кнопке и выбор породы." },
          { speaker: "Макс, техлид", text: "Сначала спрашиваем, где лежит картинка. Потом идём по адресу и забираем её." },
          { speaker: "Ева, QA-инженер", text: "Картинка пропала? Сохрани ссылку на PhotoImage в самом виджете — иначе Python может её удалить." },
        ],
      },
      summary:
        "API Dog CEO сначала возвращает JSON с адресом фотографии. Это ещё не сама картинка: по адресу нужно отправить второй запрос. Текстовый ответ читают через response.text, а содержимое файла — через response.content.\n\nTkinter умеет показывать PNG и GIF, а фотографии собак обычно приходят в JPG. Библиотека Pillow открывает изображение из байтов, а BytesIO делает для неё файл в памяти. Метод thumbnail((400, 400)) уменьшает большую фотографию, сохраняя пропорции. ImageTk.PhotoImage подготавливает картинку для Tkinter.\n\nЕсть важная ловушка: Python может удалить PhotoImage, если на неё не осталось ссылок. Поэтому после dog_label.config(image=photo) сохрани её ещё и так: dog_label.image = photo.\n\nНазвания пород API принимает по-английски. Словарь breeds связывает русское название из списка с английским названием в адресе запроса. Если ничего не выбрано, используем случайную собаку.",
      keyRule:
        "Получаем JSON с адресом, отдельным запросом скачиваем response.content, уменьшаем фото и сохраняем ссылку: dog_label.image = photo.",
      sections: [
        {
          heading: "Ссылка на фото — это ещё не фотография",
          text: "Первый запрос возвращает JSON. Значение ключа message — адрес файла картинки. Чтобы получить сами байты изображения, нужен второй запрос.",
          codeExample: {
            title: "Узнать адрес случайной собаки",
            code: `import requests\n\nresponse = requests.get(\n    "https://dog.ceo/api/breeds/image/random",\n    timeout=10\n)\ndata = response.json()\nprint(data["message"])`,
            explanation: "В браузерном тренажёре API отвечает учебным примером, который не требует интернета.",
          },
        },
        {
          heading: "Из байтов в окно Tkinter",
          text: "BytesIO передаёт байты в Pillow как файл в памяти. thumbnail уменьшает картинку, а ImageTk превращает её в объект, который можно поместить в Label.",
          codeExample: {
            title: "Открыть, уменьшить и показать фото",
            code: `from io import BytesIO\nimport requests\nfrom PIL import Image, ImageTk\n\nurl = "https://images.dog.ceo/breeds/husky/dog.jpg"\npicture = requests.get(url, timeout=10)\nimage = Image.open(BytesIO(picture.content))\nimage.thumbnail((400, 400))\nphoto = ImageTk.PhotoImage(image)\ndog_label.config(image=photo)\ndog_label.image = photo`,
            explanation: "Последняя строка удерживает фото в памяти. Без неё картинка может исчезнуть после выхода из функции.",
          },
        },
        {
          heading: "Русские названия и английские породы",
          text: "Словарь переводит подпись для человека в часть адреса API. Для корги сервис использует название pembroke.",
          codeExample: {
            title: "Собрать адрес для выбранной породы",
            code: `breeds = {"Хаски": "husky", "Корги": "pembroke", "Мопс": "pug"}\nname = "Корги"\nurl = "https://dog.ceo/api/breed/" + breeds[name] + "/images/random"\nprint(url)`,
            explanation: "Если пользователь не выбрал породу, обращаемся к адресу случайной собаки.",
          },
        },
      ],
      steps: [
        {
          code: `import requests\n\nresponse = requests.get("https://dog.ceo/api/breeds/image/random", timeout=10)\ndata = response.json()\nprint(data["message"])`,
          output: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
          explanation: "Шаг 1. Получили JSON с адресом фотографии. Пока что сама картинка ещё не скачана.",
        },
        {
          code: `import tkinter as tk\nfrom io import BytesIO\nimport requests\nfrom PIL import Image, ImageTk\n\nwindow = tk.Tk()\nwindow.config(bg="#2B2B3D")\ndata = requests.get("https://dog.ceo/api/breeds/image/random", timeout=10).json()\npicture = requests.get(data["message"], timeout=10)\nimage = Image.open(BytesIO(picture.content))\nphoto = ImageTk.PhotoImage(image)\ndog_label = tk.Label(window, image=photo, bg="#2B2B3D")\ndog_label.pack(padx=20, pady=20)\ndog_label.image = photo\nwindow.mainloop()`,
          output: "В окне появится фотография собаки",
          explanation: "Шаг 2. Первый запрос возвращает ссылку, второй — содержимое картинки. В учебном предпросмотре ссылка отображается как изображение.",
        },
        {
          code: `image = Image.open(BytesIO(picture.content))\nimage.thumbnail((400, 400))\nphoto = ImageTk.PhotoImage(image)`,
          output: "Изображение вписано в квадрат 400 × 400 без искажения пропорций",
          explanation: "Шаг 3. thumbnail ограничивает размер, но не растягивает и не сплющивает собаку.",
        },
        {
          code: `def new_dog():\n    try:\n        data = requests.get("https://dog.ceo/api/breeds/image/random", timeout=10).json()\n        picture = requests.get(data["message"], timeout=10)\n    except requests.RequestException:\n        status_label.config(text="Нет связи")\n        return\n    image = Image.open(BytesIO(picture.content))\n    image.thumbnail((400, 400))\n    photo = ImageTk.PhotoImage(image)\n    dog_label.config(image=photo)\n    dog_label.image = photo\n    status_label.config(text="")`,
          output: "Кнопка загружает новую собаку. При потере соединения появляется сообщение.",
          explanation: "Шаг 4. Создаём пустую надпись и кнопку с command=new_dog. Сохраняем PhotoImage в dog_label.image, чтобы картинка не пропала.",
        },
        {
          code: `breeds = {"Хаски": "husky", "Корги": "pembroke", "Мопс": "pug"}\nfor name in breeds:\n    breed_list.insert("end", name)\n\nselected = breed_list.curselection()\nif len(selected) > 0:\n    name = breed_list.get(selected[0])\n    breed = breeds[name]\n    print("Выбрана порода:", breed)\nelse:\n    print("Случайная собака")`,
          output: "Выбранная русская подпись превращается в английское название породы для API",
          explanation: "Шаг 5. Если список пустой, оставляем случайный адрес. Для корги в API используется порода pembroke.",
        },
      ],
      mistakes: [
        {
          wrongCode: `photo = ImageTk.PhotoImage(image)\ndog_label.config(image=photo)`,
          error: "Фотография появляется и сразу исчезает",
          fixedCode: `photo = ImageTk.PhotoImage(image)\ndog_label.config(image=photo)\ndog_label.image = photo`,
          explanation: "Tkinter не всегда удерживает объект картинки сам. Сохрани ссылку на нём или в другой долгоживущей переменной.",
        },
        {
          wrongCode: `image = Image.open(picture.content)`,
          error: "Pillow ожидает файл или файловый объект",
          fixedCode: `image = Image.open(BytesIO(picture.content))`,
          explanation: "BytesIO оборачивает полученные байты так, чтобы Pillow могла прочитать их как файл.",
        },
      ],
      quiz: [
        {
          code: `data = {"message": "https://images.dog.ceo/dog.jpg"}\nprint(data["message"])`,
          options: ["Сама картинка", "Адрес картинки", "Имя породы", "Размер файла"],
          correct: 1,
          explanation: "API возвращает ссылку в поле message. По ней отправляется второй запрос за изображением.",
        },
        {
          code: `photo = ImageTk.PhotoImage(image)\ndog_label.config(image=photo)\ndog_label.image = photo`,
          options: ["Сохраняет ссылку на картинку", "Меняет породу", "Уменьшает картинку", "Отправляет запрос"],
          correct: 0,
          explanation: "Атрибут dog_label.image удерживает объект PhotoImage, пока существует надпись.",
        },
      ],
      cheatsheet: [
        "response.json() — словарь с данными API",
        "response.content — байты файла; response.text — строка",
        "BytesIO(response.content) — файл в оперативной памяти",
        "Image.open(...) — открыть картинку Pillow",
        "image.thumbnail((400, 400)) — уменьшить, сохранив пропорции",
        "dog_label.image = photo — сохранить ссылку, чтобы Tkinter не потерял изображение",
        "breeds = {'Корги': 'pembroke'} — перевод названия породы для API",
      ],
    },
    exercise: {
      task: "Собери собачью ленту ProTeam Labs:\n1. При запуске покажи случайную собаку.\n2. Добавь кнопку «Ещё собаку!», которая загружает новое фото.\n3. Скачай содержимое по ссылке API, открой его через BytesIO и Pillow, уменьши до 400 × 400.\n4. Сохраняй объект PhotoImage в dog_label.image, чтобы изображение оставалось видимым.\n5. Добавь список пород: Хаски, Корги и Мопс. Если выбрана порода — запрашивай её; если нет — случайную.\n6. При проблеме соединения покажи сообщение в status_label.",
      requirements: [
        "Сделать два запроса: за JSON с адресом и за содержимым изображения",
        "Использовать BytesIO, Image.open, thumbnail и ImageTk.PhotoImage",
        "Сохранять PhotoImage в dog_label.image",
        "Добавить Listbox пород и словарь с английскими именами",
        "Сделать кнопку «Ещё собаку!» и обработать RequestException",
      ],
      starterCode: `import tkinter as tk
from io import BytesIO
import requests
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Собачья лента ProTeam Labs")
window.config(bg="#2B2B3D")

breeds = {"Хаски": "husky", "Корги": "pembroke", "Мопс": "pug"}
dog_label = tk.Label(window, bg="#2B2B3D")
dog_label.pack(padx=16, pady=12)
status_label = tk.Label(window, text="", bg="#2B2B3D", fg="white")
status_label.pack()
breed_list = tk.Listbox(window, height=3)
breed_list.pack(pady=8)
for name in breeds:
    breed_list.insert("end", name)

def new_dog():
    # Выбери адрес случайной собаки или выбранной породы
    # Загрузи изображение, уменьши его и покажи в dog_label
    pass

dog_button = tk.Button(window, text="Ещё собаку!", command=new_dog)
dog_button.pack(pady=8)
new_dog()
window.mainloop()
`,
      hint: "Сначала выбери API-адрес. Затем получи data = response.json(), скачай picture = requests.get(data['message']), открой Image.open(BytesIO(picture.content)) и не забудь dog_label.image = photo.",
      solution: `import tkinter as tk
from io import BytesIO
import requests
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Собачья лента ProTeam Labs")
window.config(bg="#2B2B3D")
breeds = {"Хаски": "husky", "Корги": "pembroke", "Мопс": "pug"}
dog_label = tk.Label(window, bg="#2B2B3D")
dog_label.pack(padx=16, pady=12)
status_label = tk.Label(window, text="", bg="#2B2B3D", fg="white")
status_label.pack()
breed_list = tk.Listbox(window, height=3)
breed_list.pack(pady=8)
for name in breeds:
    breed_list.insert("end", name)

def new_dog():
    selected = breed_list.curselection()
    if len(selected) > 0:
        name = breed_list.get(selected[0])
        url = "https://dog.ceo/api/breed/" + breeds[name] + "/images/random"
    else:
        url = "https://dog.ceo/api/breeds/image/random"
    try:
        data = requests.get(url, timeout=10).json()
        picture = requests.get(data["message"], timeout=10)
    except requests.RequestException:
        status_label.config(text="Нет связи")
        return
    image = Image.open(BytesIO(picture.content))
    image.thumbnail((400, 400))
    photo = ImageTk.PhotoImage(image)
    dog_label.config(image=photo)
    dog_label.image = photo
    status_label.config(text="")

dog_button = tk.Button(window, text="Ещё собаку!", command=new_dog)
dog_button.pack(pady=8)
new_dog()
window.mainloop()`,
      tests: [{ inputs: [], expected: "OK_DOG_FEED" }],
      testCode: `
assert callable(new_dog), "Создай функцию new_dog"
new_dog()
image_url = dog_label.cget("image")
assert image_url.startswith("https://images.dog.ceo/breeds/"), "Покажи загруженное изображение в dog_label"
assert dog_label.image == image_url, "Сохрани PhotoImage в dog_label.image"
assert breed_list.size() >= 3, "Добавь в список минимум три породы"
breed_list.selection_set(1)
new_dog()
assert "/pembroke/" in dog_label.cget("image"), "Для Корги используй название породы pembroke"
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(buttons) >= 1, "Добавь кнопку для загрузки собаки"
print("OK_DOG_FEED")
`,
      codeCheck: (cleanCode) => {
        if (!/import\s+requests\b/.test(cleanCode)) return { passed: false, message: "Подключи модуль requests." };
        if (!/from\s+io\s+import\s+BytesIO/.test(cleanCode)) return { passed: false, message: "Подключи BytesIO из io." };
        if (!/from\s+PIL\s+import\s+Image\s*,\s*ImageTk/.test(cleanCode)) return { passed: false, message: "Подключи Image и ImageTk из PIL." };
        if (!/def\s+new_dog\s*\(/.test(cleanCode)) return { passed: false, message: "Создай функцию new_dog." };
        if (!/ImageTk\.PhotoImage\s*\(/.test(cleanCode)) return { passed: false, message: "Подготовь фото через ImageTk.PhotoImage." };
        return null;
      },
      validate: (_code, output) => output.includes("OK_DOG_FEED")
        ? { passed: true, message: "Ачивка «Собаковод» получена! Собачья лента показывает фото и умеет выбирать породу. 🐶📸" }
        : { passed: false, message: "Проверь два запроса, обработку картинки и выбор породы." },
    },
  },
];
