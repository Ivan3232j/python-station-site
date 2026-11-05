// База данных функций, методов и операторов Python для интерактивного справочника и поиска

export interface PythonFunctionItem {
  id: string;
  name: string;
  category: "io" | "math" | "types" | "strings" | "lists" | "dicts" | "iter" | "modules" | "tkinter";
  categoryLabel: string;
  syntax: string;
  shortDesc: string;
  fullDesc: string;
  params?: { name: string; type: string; desc: string }[];
  returns: string;
  example: string;
  output: string;
  tags: string[];
}

export const PYTHON_CATEGORIES = [
  { id: "all", label: "Все" },
  { id: "io", label: "Ввод и вывод" },
  { id: "types", label: "Типы данных" },
  { id: "math", label: "Математика" },
  { id: "strings", label: "Строки" },
  { id: "lists", label: "Списки" },
  { id: "dicts", label: "Словари" },
  { id: "iter", label: "Циклы и итерации" },
  { id: "modules", label: "Модули (math, random)" },
  { id: "tkinter", label: "Графика (Tkinter)" },
] as const;

export const PYTHON_FUNCTIONS_DB: PythonFunctionItem[] = [
  // 1. Ввод и вывод
  {
    id: "print",
    name: "print()",
    category: "io",
    categoryLabel: "Ввод и вывод",
    syntax: "print(*objects, sep=' ', end='\\n')",
    shortDesc: "Выводит переданные объекты в консоль.",
    fullDesc: "Главная функция для отображения информации. Можно передавать несколько аргументов через запятую. Параметр sep задает разделитель (по умолчанию пробел), а end — символ в конце (по умолчанию перенос строки).",
    params: [
      { name: "*objects", type: "any", desc: "Один или несколько объектов для вывода" },
      { name: "sep", type: "str", desc: "Разделитель между значениями (по умолчанию ' ')" },
      { name: "end", type: "str", desc: "Символ окончания строки (по умолчанию '\\n')" },
    ],
    returns: "None",
    example: `# Вывод текста и чисел
name = "Алексей"
age = 15
print("Привет,", name, "тебе", age, "лет!")
print("1", "2", "3", sep="-")`,
    output: `Привет, Алексей тебе 15 лет!\n1-2-3`,
    tags: ["печать", "вывод", "консоль", "терминал", "print", "display", "отобразить"],
  },
  {
    id: "input",
    name: "input()",
    category: "io",
    categoryLabel: "Ввод и вывод",
    syntax: "input([prompt])",
    shortDesc: "Считывает строку, введенную пользователем с клавиатуры.",
    fullDesc: "Приостанавливает выполнение программы и ждет, пока пользователь напечатает текст и нажмет Enter. Всегда возвращает значение строкового типа (str). Для чисел требуется преобразование через int() или float().",
    params: [
      { name: "prompt", type: "str", desc: "Текст подсказки, который увидит пользователь" },
    ],
    returns: "str (введенная строка)",
    example: `name = input("Как тебя зовут? ")
age = int(input("Сколько тебе лет? "))
print(f"Привет, {name}! В следующем году тебе будет {age + 1}.")`,
    output: `Привет, Анна! В следующем году тебе будет 15.`,
    tags: ["ввод", "клавиатура", "считать", "пользователь", "запрос", "input", "read", "ask"],
  },

  // 2. Типы данных и преобразование
  {
    id: "type",
    name: "type()",
    category: "types",
    categoryLabel: "Типы данных",
    syntax: "type(object)",
    shortDesc: "Возвращает тип переданного объекта.",
    fullDesc: "Позволяет узнать, к какому типу принадлежит переменная или значение (например, int, float, str, list, bool).",
    returns: "type (тип объекта)",
    example: `x = 42
y = 3.14
s = "Python"
print(type(x))  # <class 'int'>
print(type(y))  # <class 'float'>
print(type(s))  # <class 'str'>`,
    output: `<class 'int'>\n<class 'float'>\n<class 'str'>`,
    tags: ["тип", "проверка", "int", "str", "float", "класс", "type"],
  },
  {
    id: "int",
    name: "int()",
    category: "types",
    categoryLabel: "Типы данных",
    syntax: "int(x, base=10)",
    shortDesc: "Преобразует строку или дробное число в целое число.",
    fullDesc: "Отбрасывает дробную часть у чисел float или переводит строку, состоящую из цифр, в целое число (int). Вызывает ValueError, если строку нельзя преобразовать.",
    returns: "int (целое число)",
    example: `num_str = "120"
num = int(num_str)
print(num + 30)

f = 9.99
print(int(f))  # 9 (дробная часть отбрасывается)`,
    output: `150\n9`,
    tags: ["целое", "число", "конвертация", "перевод", "int", "integer"],
  },
  {
    id: "float",
    name: "float()",
    category: "types",
    categoryLabel: "Типы данных",
    syntax: "float(x)",
    shortDesc: "Преобразует число или строку в вещественное (дробное) число.",
    fullDesc: "Создает число с плавающей точкой из целого числа или строки. В качестве разделителя дроби в Python всегда используется точка.",
    returns: "float (дробное число)",
    example: `x = float("3.14")
y = float(10)
print(x * 2)
print(y)`,
    output: `6.28\n10.0`,
    tags: ["дробь", "плавающая точка", "вещественное", "float", "decimal"],
  },
  {
    id: "str",
    name: "str()",
    category: "types",
    categoryLabel: "Типы данных",
    syntax: "str(object='')",
    shortDesc: "Преобразует переданный объект в строку.",
    fullDesc: "Позволяет превратить число, список или любой другой объект в строковое представление для склеивания или форматирования.",
    returns: "str (строка)",
    example: `score = 98
msg = "Твой рекорд: " + str(score) + " очков"
print(msg)`,
    output: `Твой рекорд: 98 очков`,
    tags: ["строка", "текст", "конвертация", "str", "string"],
  },
  {
    id: "bool",
    name: "bool()",
    category: "types",
    categoryLabel: "Типы данных",
    syntax: "bool(x)",
    shortDesc: "Возвращает логическое значение (True или False).",
    fullDesc: "Число 0, пустые строки \"\", пустые списки [] и None превращаются в False. Все непустые значения превращаются в True.",
    returns: "bool (True / False)",
    example: `print(bool(0))      # False
print(bool(42))     # True
print(bool(""))     # False
print(bool("Hi"))   # True`,
    output: `False\nTrue\nFalse\nTrue`,
    tags: ["логика", "булево", "истина", "ложь", "true", "false", "bool"],
  },

  // 3. Математика
  {
    id: "len",
    name: "len()",
    category: "lists",
    categoryLabel: "Списки и коллекции",
    syntax: "len(s)",
    shortDesc: "Возвращает количество элементов в последовательности (длину).",
    fullDesc: "Работает со строками (количество символов), списками (количество элементов), словарями (количество ключей), кортежами и множествами.",
    returns: "int (количество элементов)",
    example: `word = "Программирование"
print("Символов в слове:", len(word))

items = ["яблоко", "банан", "груша"]
print("Элементов в списке:", len(items))`,
    output: `Символов в слове: 16\nЭлементов в списке: 3`,
    tags: ["длина", "размер", "количество", "элементы", "len", "length", "size", "count"],
  },
  {
    id: "sum",
    name: "sum()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "sum(iterable, start=0)",
    shortDesc: "Суммирует все числовые элементы в коллекции.",
    fullDesc: "Принимает список, кортеж или range чисел и возвращает их общую сумму.",
    returns: "число (int или float)",
    example: `marks = [5, 4, 5, 5, 4]
total = sum(marks)
average = total / len(marks)
print(f"Сумма: {total}, Средний балл: {average}")`,
    output: `Сумма: 23, Средний балл: 4.6`,
    tags: ["сумма", "сложить", "все", "итог", "sum", "total", "average"],
  },
  {
    id: "min",
    name: "min()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "min(arg1, arg2, *args) или min(iterable)",
    shortDesc: "Возвращает наименьший элемент среди переданных значений.",
    fullDesc: "Можно передавать элементы отдельными аргументами или целый список. У строк сравнивает по алфавиту (кодам символов).",
    returns: "наименьший элемент",
    example: `print(min(12, 5, 89, 3, 21))
scores = [120, 80, 240, 65]
print("Худший результат:", min(scores))`,
    output: `3\nХудший результат: 65`,
    tags: ["минимум", "наименьший", "минимальный", "min", "smallest"],
  },
  {
    id: "max",
    name: "max()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "max(arg1, arg2, *args) или max(iterable)",
    shortDesc: "Возвращает наибольший элемент среди переданных значений.",
    fullDesc: "Находит рекорд или максимальное число в списке или среди аргументов.",
    returns: "наибольший элемент",
    example: `print(max(10, 42, 17))
temperatures = [22.5, 26.1, 25.4, 28.0]
print("Пик жары:", max(temperatures))`,
    output: `42\nПик жары: 28.0`,
    tags: ["максимум", "наибольший", "рекорд", "max", "largest"],
  },
  {
    id: "abs",
    name: "abs()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "abs(x)",
    shortDesc: "Возвращает модуль (абсолютную величину) числа.",
    fullDesc: "Превращает любое отрицательное число в положительное. Положительные числа оставляет без изменений.",
    returns: "число >= 0",
    example: `delta = 10 - 25
print("Разница:", abs(delta))
print(abs(-3.14))`,
    output: `Разница: 15\n3.14`,
    tags: ["модуль", "абсолютное", "знак", "abs", "absolute"],
  },
  {
    id: "round",
    name: "round()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "round(number, ndigits=None)",
    shortDesc: "Округляет число до указанного количества знаков после запятой.",
    fullDesc: "Если ndigits опущен, округляет до ближайшего целого. Если указан, сохраняет указанное число знаков.",
    returns: "int или float",
    example: `pi = 3.14159265
print(round(pi))       # 3
print(round(pi, 2))    # 3.14
print(round(pi, 4))    # 3.1416`,
    output: `3\n3.14\n3.1416`,
    tags: ["округление", "знаки", "дробь", "round", "approx"],
  },
  {
    id: "pow",
    name: "pow()",
    category: "math",
    categoryLabel: "Математика",
    syntax: "pow(base, exp, mod=None)",
    shortDesc: "Возводит число base в степень exp.",
    fullDesc: "Эквивалентно оператору `base ** exp`. Третий необязательный параметр mod позволяет взять остаток по модулю: `(base ** exp) % mod`.",
    returns: "число",
    example: `print(pow(2, 8))   # 256
print(pow(5, 3))   # 125
print(2 ** 8)      # То же самое: 256`,
    output: `256\n125\n256`,
    tags: ["степень", "возведение", "pow", "power", "квадрат", "куб"],
  },

  // 4. Циклы и итерации
  {
    id: "range",
    name: "range()",
    category: "iter",
    categoryLabel: "Циклы и итерации",
    syntax: "range(stop) или range(start, stop[, step])",
    shortDesc: "Генерирует последовательность чисел для цикла for.",
    fullDesc: "Создает неизменяемую арифметическую прогрессию от start до stop (не включая stop) с шагом step. Незаменима для циклов for.",
    params: [
      { name: "start", type: "int", desc: "Начальное число (по умолчанию 0)" },
      { name: "stop", type: "int", desc: "Конечное число (НЕ включается)" },
      { name: "step", type: "int", desc: "Шаг приращения (по умолчанию 1)" },
    ],
    returns: "range (итерируемый объект)",
    example: `# От 0 до 4
for i in range(5):
    print(i, end=" ")
print()

# От 10 до 20 с шагом 2
for x in range(10, 21, 2):
    print(x, end=" ")`,
    output: `0 1 2 3 4 \n10 12 14 16 18 20 `,
    tags: ["диапазон", "цикл", "шаг", "числа", "for", "range", "итерация"],
  },
  {
    id: "enumerate",
    name: "enumerate()",
    category: "iter",
    categoryLabel: "Циклы и итерации",
    syntax: "enumerate(iterable, start=0)",
    shortDesc: "Возвращает пары (номер, элемент) при проходе по списку.",
    fullDesc: "Позволяет в цикле for сразу получать и индекс элемента, и само значение без использования ручных счётчиков.",
    returns: "итератор пар (индекс, элемент)",
    example: `fruits = ["яблоко", "груша", "апельсин"]
for index, item in enumerate(fruits, start=1):
    print(f"{index}. {item}")`,
    output: `1. яблоко\n2. груша\n3. апельсин`,
    tags: ["нумерация", "индекс", "счетчик", "enumerate", "номер"],
  },
  {
    id: "sorted",
    name: "sorted()",
    category: "iter",
    categoryLabel: "Циклы и итерации",
    syntax: "sorted(iterable, key=None, reverse=False)",
    shortDesc: "Возвращает новый отсортированный список из элементов коллекции.",
    fullDesc: "Не изменяет исходный список, а создает новый. Флаг reverse=True сортирует по убыванию.",
    returns: "новый list",
    example: `nums = [9, 1, 4, 3, 7]
sorted_nums = sorted(nums)
descending = sorted(nums, reverse=True)
print("По возрастанию:", sorted_nums)
print("По убыванию:", descending)
print("Исходный остался цел:", nums)`,
    output: `По возрастанию: [1, 3, 4, 7, 9]\nПо убыванию: [9, 7, 4, 3, 1]\nИсходный остался цел: [9, 1, 4, 3, 7]`,
    tags: ["сортировка", "порядок", "упорядочить", "sorted", "sort", "алфавит"],
  },
  {
    id: "reversed",
    name: "reversed()",
    category: "iter",
    categoryLabel: "Циклы и итерации",
    syntax: "reversed(seq)",
    shortDesc: "Возвращает обратный итератор для последовательности.",
    fullDesc: "Позволяет обойти список или строку с конца к началу без создания копии.",
    returns: "итератор",
    example: `words = ["начало", "середина", "конец"]
for w in reversed(words):
    print(w)`,
    output: `конец\nсередина\nначало`,
    tags: ["разворот", "обратный", "с конца", "reversed", "reverse"],
  },
  {
    id: "zip",
    name: "zip()",
    category: "iter",
    categoryLabel: "Циклы и итерации",
    syntax: "zip(*iterables)",
    shortDesc: "Сшивает несколько списков в пары (кортежи).",
    fullDesc: "Объединяет элементы из нескольких списков с одинаковыми индексами в кортежи. Останавливается, когда заканчивается самый короткий список.",
    returns: "итератор кортежей",
    example: `names = ["Аня", "Боря", "Вова"]
scores = [95, 87, 91]
for name, score in zip(names, scores):
    print(f"{name}: {score} баллов")`,
    output: `Аня: 95 баллов\nБоря: 87 баллов\nВова: 91 баллов`,
    tags: ["склеить", "пары", "кортеж", "параллельно", "zip"],
  },

  // 5. Строковые методы
  {
    id: "str_upper",
    name: "str.upper()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.upper()",
    shortDesc: "Переводит все символы строки в верхний регистр (ЗАГЛАВНЫЕ).",
    fullDesc: "Возвращает новую копию строки, где все буквы стали заглавными.",
    returns: "str",
    example: `msg = "привет, мир!"
print(msg.upper())`,
    output: `ПРИВЕТ, МИР!`,
    tags: ["регистр", "заглавные", "капс", "upper", "uppercase"],
  },
  {
    id: "str_lower",
    name: "str.lower()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.lower()",
    shortDesc: "Переводит все символы строки в нижний регистр (строчные).",
    fullDesc: "Удобно использовать для сравнения строк без учета регистра (например, при проверке ответов пользователя).",
    returns: "str",
    example: `answer = "ДА"
if answer.lower() == "да":
    print("Пользователь согласился!")`,
    output: `Пользователь согласился!`,
    tags: ["регистр", "строчные", "маленькие", "lower", "lowercase"],
  },
  {
    id: "str_strip",
    name: "str.strip()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.strip([chars])",
    shortDesc: "Удаляет пробелы и переносы строк с начала и с конца строки.",
    fullDesc: "Очень полезен после вызова input(), чтобы убрать случайные пробелы, набранные пользователем.",
    returns: "str",
    example: `dirty = "   секретный пароль   \\n"
clean = dirty.strip()
print(f"[{clean}]")`,
    output: `[секретный пароль]`,
    tags: ["очистка", "пробелы", "края", "strip", "trim"],
  },
  {
    id: "str_replace",
    name: "str.replace()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.replace(old, new[, count])",
    shortDesc: "Заменяет все вхождения подстроки old на подстроку new.",
    fullDesc: "Не меняет оригинальную строку, а возвращает новую. Необязательный аргумент count ограничивает число замен.",
    returns: "str",
    example: `text = "Я люблю Java. Java классный язык."
result = text.replace("Java", "Python")
print(result)`,
    output: `Я люблю Python. Python классный язык.`,
    tags: ["замена", "подстрока", "поменять", "replace", "substitute"],
  },
  {
    id: "str_split",
    name: "str.split()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.split(sep=None, maxsplit=-1)",
    shortDesc: "Разбивает строку на список подстрок по разделителю.",
    fullDesc: "Если разделитель sep не указан, делит строку по любым пробельным символам (пробелы, табы, переносы).",
    returns: "list[str]",
    example: `raw = "10 20 30 40 50"
numbers = raw.split()
print(numbers)  # ['10', '20', '30', '40', '50']

tags = "игры,код,питон,учеба"
print(tags.split(","))`,
    output: `['10', '20', '30', '40', '50']\n['игры', 'код', 'питон', 'учеба']`,
    tags: ["разбить", "разделитель", "список", "split", "деление"],
  },
  {
    id: "str_join",
    name: "str.join()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "separator.join(iterable)",
    shortDesc: "Склеивает элементы списка в единую строку через разделитель.",
    fullDesc: "Все элементы в списке должны быть строками (str).",
    returns: "str",
    example: `words = ["Я", "изучаю", "Python", "3"]
sentence = " ".join(words)
print(sentence)

csv_line = ";".join(["1", "Иван", "100"])
print(csv_line)`,
    output: `Я изучаю Python 3\n1;Иван;100`,
    tags: ["склеить", "объединить", "соединить", "join", "строка"],
  },
  {
    id: "str_find",
    name: "str.find()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.find(sub[, start[, end]])",
    shortDesc: "Ищет индекс первого вхождения подстроки sub. Возвращает -1, если не найдено.",
    fullDesc: "Позволяет быстро узнать позицию символа или слова внутри строки.",
    returns: "int (индекс или -1)",
    example: `email = "student@school.ru"
at_index = email.find("@")
print("Символ @ на позиции:", at_index)
print("Домен:", email[at_index + 1:])`,
    output: `Символ @ на позиции: 7\nДомен: school.ru`,
    tags: ["поиск", "индекс", "найти", "find", "search", "позиция"],
  },
  {
    id: "str_startswith",
    name: "str.startswith()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.startswith(prefix)",
    shortDesc: "Проверяет, начинается ли строка с указанного префикса.",
    fullDesc: "Возвращает True или False. Полезно для фильтрации команд, ссылок или расширений.",
    returns: "bool",
    example: `url = "https://python.org"
if url.startswith("https://"):
    print("Безопасное соединение")`,
    output: `Безопасное соединение`,
    tags: ["префикс", "начало", "startswith", "проверка"],
  },
  {
    id: "str_isdigit",
    name: "str.isdigit()",
    category: "strings",
    categoryLabel: "Строки",
    syntax: "string.isdigit()",
    shortDesc: "Проверяет, состоит ли строка только из цифр.",
    fullDesc: "Идеально подходит для валидации ввода перед вызовом int().",
    returns: "bool",
    example: `user_val = "12345"
if user_val.isdigit():
    num = int(user_val)
    print("Число корректно:", num)
else:
    print("Ошибка: введите только цифры!")`,
    output: `Число корректно: 12345`,
    tags: ["цифры", "валидация", "isdigit", "проверка числа"],
  },

  // 6. Списки (методы списков)
  {
    id: "list_append",
    name: "list.append()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.append(item)",
    shortDesc: "Добавляет один новый элемент в самый конец списка.",
    fullDesc: "Изменяет сам список на месте и возвращает None.",
    returns: "None",
    example: `inventory = ["меч", "щит"]
inventory.append("зелье здоровья")
print(inventory)`,
    output: `['меч', 'щит', 'зелье здоровья']`,
    tags: ["добавить", "конец", "список", "append", "добавление"],
  },
  {
    id: "list_pop",
    name: "list.pop()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.pop([index])",
    shortDesc: "Удаляет элемент по индексу и возвращает его значение.",
    fullDesc: "Если индекс не указан, удаляет и возвращает самый последний элемент списка.",
    returns: "удаленный элемент",
    example: `stack = [10, 20, 30]
last = stack.pop()
print("Удален:", last)
print("Осталось в списке:", stack)`,
    output: `Удален: 30\nОсталось в списке: [10, 20]`,
    tags: ["удалить", "извлечь", "стек", "pop", "remove"],
  },
  {
    id: "list_insert",
    name: "list.insert()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.insert(index, item)",
    shortDesc: "Вставляет элемент в список по указанному индексу.",
    fullDesc: "Все элементы, начиная с указанного индекса, сдвигаются вправо.",
    returns: "None",
    example: `players = ["Алиса", "Чарли"]
players.insert(1, "Боб")  # Вставляем на позицию 1
print(players)`,
    output: `['Алиса', 'Боб', 'Чарли']`,
    tags: ["вставить", "позиция", "индекс", "insert"],
  },
  {
    id: "list_remove",
    name: "list.remove()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.remove(value)",
    shortDesc: "Удаляет первое вхождение элемента со значением value из списка.",
    fullDesc: "Если элемента нет в списке, возникает ошибка ValueError.",
    returns: "None",
    example: `colors = ["красный", "синий", "зеленый", "синий"]
colors.remove("синий")  # удалит только первый синий
print(colors)`,
    output: `['красный', 'зеленый', 'синий']`,
    tags: ["удаление", "значение", "remove", "стереть"],
  },
  {
    id: "list_count",
    name: "list.count()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.count(value)",
    shortDesc: "Считает, сколько раз значение value встречается в списке.",
    fullDesc: "Возвращает целое неотрицательное число.",
    returns: "int",
    example: `grades = [5, 4, 5, 3, 5, 4]
print("Количество пятерок:", grades.count(5))`,
    output: `Количество пятерок: 3`,
    tags: ["подсчет", "вхождения", "сколько", "count"],
  },
  {
    id: "list_sort",
    name: "list.sort()",
    category: "lists",
    categoryLabel: "Списки",
    syntax: "list.sort(key=None, reverse=False)",
    shortDesc: "Сортирует список на месте (изменяя сам список).",
    fullDesc: "В отличие от функции sorted(), не создает новый список, а меняет текущий и возвращает None.",
    returns: "None",
    example: `numbers = [42, 10, 5, 99, 1]
numbers.sort()
print(numbers)`,
    output: `[1, 5, 10, 42, 99]`,
    tags: ["сортировать", "порядок", "sort", "на месте"],
  },

  // 7. Словари
  {
    id: "dict_keys",
    name: "dict.keys()",
    category: "dicts",
    categoryLabel: "Словари",
    syntax: "dict.keys()",
    shortDesc: "Возвращает коллекцию всех ключей словаря.",
    fullDesc: "Позволяет итерироваться по всем ключам словаря в цикле for или проверить наличие ключа оператором `in`.",
    returns: "dict_keys",
    example: `hero = {"имя": "Артур", "класс": "Воин", "сила": 18}
print(list(hero.keys()))`,
    output: `['имя', 'класс', 'сила']`,
    tags: ["ключи", "словарь", "keys", "список ключей"],
  },
  {
    id: "dict_values",
    name: "dict.values()",
    category: "dicts",
    categoryLabel: "Словари",
    syntax: "dict.values()",
    shortDesc: "Возвращает коллекцию всех значений словаря.",
    fullDesc: "Позволяет суммировать значения словаря (например, цены товаров) или выводить их без ключей.",
    returns: "dict_values",
    example: `prices = {"хлеб": 40, "молоко": 80, "сыр": 150}
print("Общая сумма:", sum(prices.values()))`,
    output: `Общая сумма: 270`,
    tags: ["значения", "словарь", "values", "данные"],
  },
  {
    id: "dict_items",
    name: "dict.items()",
    category: "dicts",
    categoryLabel: "Словари",
    syntax: "dict.items()",
    shortDesc: "Возвращает пары (ключ, значение) словаря.",
    fullDesc: "Очень удобен в цикле: `for key, val in d.items(): ...`",
    returns: "dict_items",
    example: `capitals = {"Россия": "Москва", "Франция": "Париж"}
for country, city in capitals.items():
    print(f"Столица страны {country} — {city}")`,
    output: `Столица страны Россия — Москва\nСтолица страны Франция — Париж`,
    tags: ["пары", "ключ-значение", "items", "обход словаря"],
  },
  {
    id: "dict_get",
    name: "dict.get()",
    category: "dicts",
    categoryLabel: "Словари",
    syntax: "dict.get(key, default=None)",
    shortDesc: "Безопасно извлекает значение по ключу без ошибки KeyError.",
    fullDesc: "Если ключ отсутствует в словаре, возвращает значение по умолчанию (default), а не вызывает ошибку.",
    returns: "значение или default",
    example: `user = {"name": "Ольга"}
age = user.get("age", "Не указан")
print("Возраст:", age)`,
    output: `Возраст: Не указан`,
    tags: ["получить", "безопасно", "default", "get", "по умолчанию"],
  },

  // 8. Модули: math и random
  {
    id: "math_sqrt",
    name: "math.sqrt()",
    category: "modules",
    categoryLabel: "Модули",
    syntax: "math.sqrt(x)",
    shortDesc: "Вычисляет квадратный корень из неотрицательного числа x.",
    fullDesc: "Требует предварительного `import math`. Число x должно быть >= 0.",
    returns: "float",
    example: `import math

c = math.sqrt(25)
print(c)  # 5.0

# Теорема Пифагора
a, b = 3, 4
hypotenuse = math.sqrt(a**2 + b**2)
print("Гипотенуза:", hypotenuse)`,
    output: `5.0\nГипотенуза: 5.0`,
    tags: ["корень", "квадратный", "math", "sqrt", "пифагор"],
  },
  {
    id: "math_pi",
    name: "math.pi",
    category: "modules",
    categoryLabel: "Модули",
    syntax: "math.pi",
    shortDesc: "Константа числа Пи (≈ 3.141592653589793).",
    fullDesc: "Отношение длины окружности к ее диаметру.",
    returns: "float",
    example: `import math

radius = 5
circle_area = math.pi * (radius ** 2)
print(f"Площадь круга: {circle_area:.2f}")`,
    output: `Площадь круга: 78.54`,
    tags: ["пи", "число пи", "math", "pi", "круг"],
  },
  {
    id: "random_randint",
    name: "random.randint()",
    category: "modules",
    categoryLabel: "Модули",
    syntax: "random.randint(a, b)",
    shortDesc: "Возвращает случайное целое число N такое, что a <= N <= b.",
    fullDesc: "Обе границы a и b ВКЛЮЧАЮТСЯ в диапазон. Требует `import random`.",
    returns: "int",
    example: `import random

random.seed(42)
dice = random.randint(1, 6)
print("Бросок кубика:", dice)`,
    output: `Бросок кубика: 3`,
    tags: ["рандом", "случайное", "кубик", "randint", "random", "генерация"],
  },
  {
    id: "random_choice",
    name: "random.choice()",
    category: "modules",
    categoryLabel: "Модули",
    syntax: "random.choice(sequence)",
    shortDesc: "Выбирает один случайный элемент из непустого списка или строки.",
    fullDesc: "Требует `import random`. Список не должен быть пустым.",
    returns: "один элемент",
    example: `import random

random.seed(42)
options = ["Камень", "Ножницы", "Бумага"]
bot_move = random.choice(options)
print("Ход бота:", bot_move)`,
    output: `Ход бота: Ножницы`,
    tags: ["выбор", "случайный", "элемент", "choice", "random"],
  },
  {
    id: "random_shuffle",
    name: "random.shuffle()",
    category: "modules",
    categoryLabel: "Модули",
    syntax: "random.shuffle(x)",
    shortDesc: "Перемешивает элементы списка в случайном порядке на месте.",
    fullDesc: "Изменяет сам переданный список и возвращает None.",
    returns: "None",
    example: `import random

random.seed(42)
deck = [1, 2, 3, 4, 5]
random.shuffle(deck)
print("Перемешанная колода:", deck)`,
    output: `Перемешанная колода: [1, 5, 3, 4, 2]`,
    tags: ["перемешать", "колода", "тасовать", "shuffle", "random"],
  },

  // 9. Tkinter (GUI)
  {
    id: "tkinter_tk",
    name: "tkinter.Tk()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "root = tkinter.Tk()",
    shortDesc: "Создает главное базовое окно графического приложения. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Корневой объект любого GUI-приложения в Tkinter. Инициализирует графическую подсистему и создает окно на рабочем столе. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    returns: "Tk (объект окна)",
    example: `import tkinter as tk

root = tk.Tk()
root.title("Мое окно")
root.geometry("300x200")
root.mainloop()
print("Окно Tkinter успешно создано!")`,
    output: `Окно Tkinter успешно создано!`,
    tags: ["окно", "главное", "tkinter", "tk", "gui", "интерфейс", "создать окно"],
  },
  {
    id: "tkinter_mainloop",
    name: "window.mainloop()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "root.mainloop()",
    shortDesc: "Запускает цикл обработки событий окна. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Слушает действия пользователя: клики мыши, ввод текста, закрытие окна. Без вызова этого метода окно не будет реагировать или сразу закроется. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    returns: "None",
    example: `import tkinter as tk

root = tk.Tk()
# Все виджеты создаются до mainloop!
root.mainloop()
print("Цикл событий mainloop завершен")`,
    output: `Цикл событий mainloop завершен`,
    tags: ["цикл", "события", "запуск", "mainloop", "tkinter", "слушать"],
  },
  {
    id: "tkinter_label",
    name: "tkinter.Label()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "label = tk.Label(master, text='...', font=(...))",
    shortDesc: "Текстовая надпись для отображения текста. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Один из базовых виджетов Tkinter. Позволяет выводить подсказки, заголовки и результаты расчетов в окне. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    params: [
      { name: "master", type: "widget", desc: "Родительский элемент (окно или фрейм)" },
      { name: "text", type: "str", desc: "Отображаемый текст надписи" },
      { name: "font", type: "tuple", desc: "Шрифт, например ('Arial', 14, 'bold')" },
      { name: "bg / fg", type: "str", desc: "Цвет фона (bg) и текста (fg)" },
    ],
    returns: "Label (виджет)",
    example: `import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text="Привет, ученик!", fg="blue")
label.pack(pady=10)
root.mainloop()
print("Надпись Label размещена")`,
    output: `Надпись Label размещена`,
    tags: ["текст", "надпись", "label", "лейбл", "tkinter", "виджет"],
  },
  {
    id: "tkinter_button",
    name: "tkinter.Button()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "button = tk.Button(master, text='...', command=func)",
    shortDesc: "Интерактивная кнопка для выполнения функции при нажатии. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Параметр command связывает кнопку с функцией в коде. Важно передавать имя функции без круглых скобок! Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    params: [
      { name: "master", type: "widget", desc: "Родительское окно" },
      { name: "text", type: "str", desc: "Текст на кнопке" },
      { name: "command", type: "callable", desc: "Функция, вызываемая при клике мышью" },
    ],
    returns: "Button (виджет)",
    example: `import tkinter as tk

def say_hi():
    print("Кнопка нажата!")

root = tk.Tk()
btn = tk.Button(root, text="Нажми меня", command=say_hi)
btn.pack(pady=10)
btn.invoke()
root.mainloop()`,
    output: `Кнопка нажата!`,
    tags: ["кнопка", "клик", "нажатие", "button", "command", "действие", "tkinter"],
  },
  {
    id: "tkinter_entry",
    name: "tkinter.Entry()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "entry = tk.Entry(master, width=20)",
    shortDesc: "Однострочное текстовое поле для ввода данных пользователем. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Аналог функции input() в графическом интерфейсе. Считывается методом entry.get(). Очищается через entry.delete(0, tk.END). Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    params: [
      { name: "master", type: "widget", desc: "Родительское окно" },
      { name: "width", type: "int", desc: "Ширина поля в символах" },
      { name: "show", type: "str", desc: "Символ маскировки, например '*' для паролей" },
    ],
    returns: "Entry (виджет)",
    example: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root, width=25)
entry.pack(pady=5)
entry.insert(0, "Python")

def print_text():
    print("Введено:", entry.get())

btn = tk.Button(root, text="Считать", command=print_text)
btn.pack()
btn.invoke()
root.mainloop()`,
    output: `Введено: Python`,
    tags: ["ввод", "поле ввода", "entry", "текст", "get", "форма", "tkinter"],
  },
  {
    id: "tkinter_pack",
    name: "widget.pack()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "widget.pack(side='top', fill='none', padx=0, pady=0)",
    shortDesc: "Менеджер геометрии для простой последовательной упаковки виджетов. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Автоматически упаковывает виджеты друг под другом (по умолчанию) или в ряд. Параметры padx и pady задают отступы. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    params: [
      { name: "side", type: "str", desc: "'top', 'bottom', 'left', 'right'" },
      { name: "padx / pady", type: "int", desc: "Отступы по горизонтали и вертикали" },
      { name: "fill", type: "str", desc: "'x', 'y' или 'both' — растяжение виджета" },
    ],
    returns: "None",
    example: `import tkinter as tk

root = tk.Tk()
tk.Label(root, text="Сверху").pack(side="top", pady=5)
tk.Button(root, text="Кнопка").pack(pady=10)
root.mainloop()
print("Виджеты упакованы через pack()")`,
    output: `Виджеты упакованы через pack()`,
    tags: ["упаковать", "размещение", "pack", "отступы", "позиционирование", "tkinter"],
  },
  {
    id: "tkinter_grid",
    name: "widget.grid()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "widget.grid(row=0, column=0, padx=5, pady=5)",
    shortDesc: "Табличный менеджер геометрии (строки и столбцы). (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Размещает виджеты в ячейках таблицы. Идеален для аккуратных форм и калькуляторов. Нельзя смешивать с pack() в одном окне! Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    params: [
      { name: "row", type: "int", desc: "Номер строки (с 0)" },
      { name: "column", type: "int", desc: "Номер столбца (с 0)" },
      { name: "columnspan", type: "int", desc: "Объединение нескольких колонок" },
      { name: "padx / pady", type: "int", desc: "Отступы между ячейками" },
    ],
    returns: "None",
    example: `import tkinter as tk

root = tk.Tk()
tk.Label(root, text="Имя:").grid(row=0, column=0)
tk.Entry(root).grid(row=0, column=1)
tk.Button(root, text="OK").grid(row=1, column=0, columnspan=2)
root.mainloop()
print("Виджеты размещены в сетке grid()")`,
    output: `Виджеты размещены в сетке grid()`,
    tags: ["сетка", "таблица", "grid", "строки", "столбцы", "ячейка", "tkinter"],
  },
  {
    id: "tkinter_geometry",
    name: "window.geometry()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "root.geometry('ширинаxвысота+x+y')",
    shortDesc: "Устанавливает размеры окна и его положение на экране. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Принимает строку вида 'ШиринаxВысота' в пикселях с маленькой латинской буквой 'x' (например: '400x300'). Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    returns: "None",
    example: `import tkinter as tk

root = tk.Tk()
root.geometry("500x400") # Ширина 500px, высота 400px
root.mainloop()
print("Размер окна установлен: 500x400")`,
    output: `Размер окна установлен: 500x400`,
    tags: ["размер", "ширина", "высота", "geometry", "пиксели", "tkinter"],
  },
  {
    id: "tkinter_config",
    name: "widget.config()",
    category: "tkinter",
    categoryLabel: "Графика (Tkinter)",
    syntax: "widget.config(text='...', bg='...')",
    shortDesc: "Динамически изменяет свойства уже созданного виджета. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",
    fullDesc: "Позволяет обновлять текст, цвета и шрифты надписей или кнопок во время работы программы. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",
    returns: "None",
    example: `import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text="Старый текст")
label.pack()

def update():
    label.config(text="Новый текст!", fg="green")
    print("Текст надписи обновлен:", label.opts.get("text"))

btn = tk.Button(root, text="Обновить", command=update)
btn.pack()
btn.invoke()
root.mainloop()`,
    output: `Текст надписи обновлен: Новый текст!`,
    tags: ["изменить", "свойства", "текст", "цвет", "config", "configure", "tkinter"],
  },
];
