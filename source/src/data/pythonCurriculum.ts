/**
 * ============================================================================
 * УЧЕБНЫЙ КУРС PYTHON 3: МОДУЛИ, ТЕОРИЯ И ЗАДАНИЯ С АВТОПРОВЕРКОЙ
 * ============================================================================
 * Чтобы добавить новый урок или изменить существующий, просто отредактируйте
 * объекты в массиве PYTHON_MODULES ниже.
 * Каждый урок содержит:
 *  - id: уникальный идентификатор (например: "variables_intro")
 *  - title: заголовок урока
 *  - exercise: задание для ученика с автопроверкой решения (валидатор вывода и кода)
 */

import { TKINTER_LESSONS } from "./tkinterLessons";

export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface LessonStep {
  code: string;
  output: string;
  explanation: string;
}

export interface LessonMistake {
  wrongCode: string;
  error: string;
  fixedCode: string;
  explanation: string;
}

export interface LessonQuizItem {
  code: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonStoryQuote {
  speaker: string;
  text: string;
}

export interface LessonStory {
  letter?: string;
  task?: string;
  quotes?: LessonStoryQuote[];
}

export interface LessonTheory {
  story?: LessonStory;
  summary: string;
  keyRule: string;
  sections: {
    heading: string;
    text: string;
    codeExample?: CodeExample;
  }[];
  tips?: string[];
  commonMistakes?: string[];
  steps?: LessonStep[];
  mistakes?: LessonMistake[];
  quiz?: LessonQuizItem[];
  cheatsheet?: string[];
}

export interface LessonTest {
  inputs: string[];
  expected: string;
}

export interface LessonValidationResult {
  passed: boolean;
  message: string;
  hint?: string;
}

export interface LessonExercise {
  task: string;
  requirements: string[];
  starterCode: string;
  hint: string;
  solution: string;
  tests: LessonTest[];
  codeCheck?: (cleanCode: string, rawCode: string) => LessonValidationResult | null;
  testCode?: string;
  /**
   * Функция проверки решения ученика:
   * @param code - исходный код, написанный учеником
   * @param output - текст, выведенный программой в консоль
   * @param logs - массив строк вывода
   */
  validate: (
    code: string,
    output: string,
    logs: string[]
  ) => LessonValidationResult;
}

export interface PythonLesson {
  id: string;
  moduleId: string;
  title: string;
  icon: string;
  shortDesc: string;
  theory: LessonTheory;
  exercise: LessonExercise;
}

export interface PythonCurriculumModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: PythonLesson[];
}

export const PYTHON_MODULES: PythonCurriculumModule[] = [
  // ==========================================
  // МОДУЛЬ 1: ПЕРВЫЕ ШАГИ И ВЫВОД ДАННЫХ
  // ==========================================
  {
    id: "module_intro",
    title: "1. Первые шаги и вывод данных",
    description: "Знакомство с Python, функция print(), отображение строк и чисел",
    icon: "Terminal",
    color: "#2F6FD0",
    lessons: [
      {
        id: "print_hello",
        moduleId: "module_intro",
        title: "Функция print() и первая программа",
        icon: "Terminal",
        shortDesc: "Учимся выводить приветствие и фразы в терминал",
        theory: {
          summary:
            "Компьютер сам по себе не умеет угадывать мысли. Если ты хочешь, чтобы он что-то показал тебе на экране, ему нужно дать прямую команду.\n\nВ Python такая команда называется функцией print(). Слово «print» переводится с английского как «печать». Представь, что внутри компьютера сидит маленький робот, который выводит твои сообщения на экран монитора.\n\nКруглые скобки после print — это коробочка. Всё, что ты положишь внутрь скобок, робот сразу напечатает.\n\nЕсли мы хотим напечатать обычные слова или фразы, их обязательно нужно упаковать в кавычки: \"Привет\" или 'Привет'. Кавычки показывают компьютеру: это просто человеческий текст, не пытайся искать в нём команды.\n\nЧисла можно писать прямо без кавычек. Например, print(42) напечатает число 42.",
          keyRule:
            "Текст всегда пишется внутри кавычек: print(\"Привет\"). Числа пишутся без кавычек: print(42).",
          sections: [
            {
              heading: "Как работает print()",
              text: "Чтобы компьютер напечатал что-то на экране, мы пишем команду print, а внутри круглых скобок указываем то, что хотим вывести.",
              codeExample: {
                title: "Пример вывода текста и чисел",
                code: `print("Привет, мир!")\nprint(42)`,
                explanation:
                  "Первая строка напечатает текст 'Привет, мир!', а вторая — число 42 на новой строке.",
              },
            },
            {
              heading: "Одинарные и двойные кавычки",
              text: "В Python нет разницы между одинарными и двойными кавычками для строк. Главное — чтобы строка начиналась и заканчивалась одинаковым типом кавычек.",
            },
          ],
          steps: [
            {
              code: 'print("Привет!")',
              output: "Привет!",
              explanation: "Самая простая программа. Робот берет текст из кавычек и печатает его на экране.",
            },
            {
              code: 'print("Привет, меня зовут Артём!")\nprint(10)',
              output: "Привет, меня зовут Артём!\n10",
              explanation: "Каждая новая команда print печатает свой результат с новой строчки. Сначала напечатается текст, а под ним — число 10.",
            },
            {
              code: 'print("3 + 2 =")\nprint(3 + 2)',
              output: "3 + 2 =\n5",
              explanation: "В первой строке в кавычках написан текст — компьютер напечатает его как есть: 3 + 2 =. Во второй строке кавычек нет, поэтому Python сам посчитает пример и выведет готовый ответ: 5.",
            },
          ],
          mistakes: [
            {
              wrongCode: 'Print("Привет, мир!")',
              error: "NameError: name 'Print' is not defined on line 1",
              fixedCode: 'print("Привет, мир!")',
              explanation: "В Python все команды пишутся маленькими буквами. Компьютер не знает команду Print с большой буквы.",
            },
            {
              wrongCode: 'print("Привет)',
              error: "SyntaxError: bad token T_OP on line 1",
              fixedCode: 'print("Привет")',
              explanation: "Кавычки всегда должны быть парными: открыл кавычку — не забудь закрыть её в конце слова.",
            },
            {
              wrongCode: 'print(hello)',
              error: "NameError: name 'hello' is not defined on line 1",
              fixedCode: 'print("hello")',
              explanation: "Без кавычек Python думает, что это имя переменной, которой ещё не существует. Обычные слова всегда бери в кавычки.",
            },
            {
              wrongCode: 'print("Привет"))',
              error: "SyntaxError: bad input on line 1",
              fixedCode: 'print("Привет")',
              explanation: "Скобок должно быть ровно столько же, сколько открывалось. Здесь была лишняя закрывающая скобка.",
            },
          ],
          quiz: [
            {
              code: "print(5 + 5)",
              options: ["5 + 5", "10", "55", "Ошибка"],
              correct: 1,
              explanation: "Здесь нет кавычек, поэтому Python выполняет сложение чисел и печатает 10.",
            },
            {
              code: 'print("Game")\nprint("Over")',
              options: ["GameOver", "Game Over", "Game и Over на двух строках", "Ничего не выведет"],
              correct: 2,
              explanation: "Каждый вызов print() по умолчанию переходит на новую строку.",
            },
            {
              code: 'print("10 + 20")',
              options: ["30", "10 + 20", "1020", "Ошибка"],
              correct: 1,
              explanation: "Всё, что заключено в кавычки, считается текстом и выводится в точности так, как написано.",
            },
          ],
          cheatsheet: [
            'print("текст") — вывести текст на экран (кавычки обязательны)',
            "print(123) — вывести число (кавычки не нужны)",
            "print(5 + 2) — посчитает пример и выведет результат (7)",
            "Все команды пишем маленькими буквами: print, а не Print",
          ],
        },
        exercise: {
          task: "Напишите программу, которая выводит в консоль ровно две строки:\nПервая строка: Привет, Python!\nВторая строка: Я начинаю программировать",
          requirements: [
            "Использовать вызов функции print()",
            "Вывести первую строку: 'Привет, Python!'",
            "Вывести вторую строку: 'Я начинаю программировать'",
          ],
          starterCode: `# Напиши свой код здесь:\n`,
          hint: "Используй два отдельных вызова команды print(...). Обрати внимание на восклицательный знак в конце первой фразы.",
          solution: `print("Привет, Python!")\nprint("Я начинаю программировать")`,

          tests: [{"inputs":[],"expected":"Привет, Python!\nЯ начинаю программировать"}],
          codeCheck: (cleanCode) => {
      const prints = cleanCode.match(/\bprint\s*\(/g) || [];
            if (prints.length < 2) return { passed: false, message: 'Используй два отдельных вызова функции print() для вывода каждой строки.' };
      return null;
    },
          validate: (code, output, logs) => {
            if (!code.includes("print")) {
              return {
                passed: false,
                message: "В коде не найдена функция print().",
                hint: "Используй команду print(\"...\") для вывода текста.",
              };
            }
            const cleanOut = output.toLowerCase();
            const hasFirst = cleanOut.includes("привет, python") || cleanOut.includes("привет, python!");
            const hasSecond = cleanOut.includes("начинаю программировать");

            if (hasFirst && hasSecond) {
              return {
                passed: true,
                message: "Отлично! Твоя первая программа на Python успешно вывела текст в консоль! 🎉",
              };
            }
            return {
              passed: false,
              message: "Вывод не полностью совпадает с заданием.",
              hint: "Проверь точный текст: 'Привет, Python!' и 'Я начинаю программировать'.",
            };
          },
        },
      },
      {
        id: "print_arguments",
        moduleId: "module_intro",
        title: "Несколько аргументов в print()",
        icon: "Layers",
        shortDesc: "Вывод нескольких значений через запятую и разделители",
        theory: {
          summary:
            "В игре ты можешь собирать инвентарь: меч, щит и зелье. В функцию print() тоже можно положить сразу несколько предметов через запятую.\n\nВсё, что мы передаем в круглые скобки команды print, программисты называют аргументами. Например, print(\"Счёт:\", 100) выведет оба значения.\n\nЗаметил, что между словами сам собой появился пробел? Это работает стандартный разделитель sep. Слово «sep» — это сокращение от английского separator (разделитель).\n\nМы можем изменить этот разделитель на любой другой символ. Например, если написать sep=\"-\", слова склеятся через дефис, а sep=\"\" склеит их совсем без пробела.\n\nА параметр end отвечает за то, что происходит в самом конце строки. Слово «end» переводится как «конец». По умолчанию после каждого print курсор прыгает на новую строку. Но если написать end=\" \", следующий print напечатает свой текст на той же самой строке!",
          keyRule:
            "Запятая внутри скобок разделяет разные аргументы: print(\"Счёт:\", 100). sep меняет разделитель, end меняет конец строки.",
          sections: [
            {
              heading: "Печать нескольких значений",
              text: "Когда нужно объединить текст и числа, просто перечислите их через запятую.",
              codeExample: {
                title: "Пример с несколькими аргументами",
                code: `print("Мой возраст:", 14, "года")\nprint("Координаты:", 10, 20)`,
                explanation: "Python сам подставит пробелы между аргументами при выводе.",
              },
            },
          ],
          steps: [
            {
              code: 'print("Уровень", 5, "Победа!")',
              output: "Уровень 5 Победа!",
              explanation: "Через запятую можно передавать сколько угодно аргументов. По умолчанию Python ставит между ними ровно один пробел.",
            },
            {
              code: 'print("12", "45", "00", sep=":")',
              output: "12:45:00",
              explanation: 'Параметр sep=":" заменил обычные пробелы на двоеточия. Так удобно выводить время или даты.',
            },
            {
              code: 'print("Загрузка", end="... ")\nprint("Готово!")',
              output: "Загрузка... Готово!",
              explanation: 'Благодаря end="... " первая строчка не перевела курсор вниз. Слово "Готово!" напечаталось сразу следом за загрузкой.',
            },
          ],
          mistakes: [
            {
              wrongCode: 'print(1, 2 sep=", ")',
              error: "SyntaxError: bad input on line 1",
              fixedCode: 'print(1, 2, sep=", ")',
              explanation: "Все параметры внутри print() должны обязательно разделяться запятыми.",
            },
            {
              wrongCode: "print(1, 2, sep=)",
              error: "SyntaxError: bad input on line 1",
              fixedCode: 'print(1, 2, sep=" ")',
              explanation: "После знака равно нужно обязательно указать строку-разделитель в кавычках.",
            },
            {
              wrongCode: 'print("Привет", end=" )',
              error: "SyntaxError: bad token T_OP on line 1",
              fixedCode: 'print("Привет", end=" ")',
              explanation: "Значение end — это тоже строка, кавычки должны быть открыты и закрыты.",
            },
            {
              wrongCode: 'print(1, 2, separater="-")',
              error: "TypeError: print() got an unexpected keyword argument 'separater' on line 1",
              fixedCode: 'print(1, 2, sep="-")',
              explanation: "Параметр называется только sep, а не separator или separater.",
            },
          ],
          quiz: [
            {
              code: 'print("A", "B", "C", sep="-")',
              options: ["A B C", "A-B-C", "ABC", "A - B - C"],
              correct: 1,
              explanation: 'Параметр sep="-" вставляет символ дефиса между каждым переданным аргументом.',
            },
            {
              code: 'print("1", "2", end="")\nprint("3")',
              options: ["1 2\\n3", "1 2 3", "1 23", "123"],
              correct: 2,
              explanation: 'Между "1" и "2" стоит пробел по умолчанию, а в конце первой строки перехода нет. Поэтому "3" приклеилась сразу к "2": получается 1 23.',
            },
            {
              code: 'print("A", "B", sep="", end="!")\nprint("C")',
              options: ["AB!C", "A B ! C", "AB!\\nC", "Ошибка"],
              correct: 0,
              explanation: 'sep="" убирает пробел между A и B, end="!" ставит восклицательный знак без переноса строки, и следом печатается C.',
            },
          ],
          cheatsheet: [
            "print(a, b, c) — выводит значения через пробел",
            'sep="..." — меняет разделитель между элементами (по умолчанию пробел)',
            'end="..." — меняет символ в конце строки (по умолчанию перенос строки \\n)',
            'sep="" — склеивает слова вплотную без пробелов',
          ],
        },
        exercise: {
          task: "Выведите в одну строку через запятую в print(): название языка, пробел не нужен вручную — передайте строку \"Python\" и версию числом 3.\nРезультат должен быть: Python 3",
          requirements: [
            "Использовать один вызов print с двумя аргументами через запятую",
            "Первый аргумент — строка \"Python\", второй — число 3",
          ],
          starterCode: `# Выведи: Python 3 с помощью одного print()\n`,
          hint: "Напиши: print(\"Python\", 3)",
          solution: `print("Python", 3)`,

          tests: [{"inputs":[],"expected":"Python 3"}],
          codeCheck: (cleanCode, rawCode) => {
      if (/["']Python\s+3["']/.test(rawCode)) return { passed: false, message: 'Нужно вывести строку "Python" и число 3 как отдельные аргументы через запятую: print("Python", 3)', hint: 'Не пиши всю фразу "Python 3" в одних кавычках.' };
      if (!/,/.test(cleanCode) || !/\b3\b/.test(cleanCode)) return { passed: false, message: 'Передай строку и число 3 через запятую внутри одного print().' };
      return null;
    },
          validate: (code, output) => {
            if (output.trim() === "Python 3") {
              return {
                passed: true,
                message: "Превосходно! Ты освоил передачу нескольких аргументов в print! 🚀",
              };
            }
            return {
              passed: false,
              message: "Ожидался вывод: 'Python 3'",
              hint: "Передай в print два аргумента: строку \"Python\" и число 3.",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 2: ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ
  // ==========================================
  {
    id: "module_variables",
    title: "2. Переменные в Python",
    description: "Хранение данных, имена переменных, перезапись значений и типы",
    icon: "Box",
    color: "#B0700C",
    lessons: [
      {
        id: "variables_intro",
        moduleId: "module_variables",
        title: "Что такое переменная и как её создать",
        icon: "Box",
        shortDesc: "Создаем переменные, сохраняем в них числа и текст",
        theory: {
          summary:
            "В играх вроде Minecraft или Brawl Stars у твоего персонажа есть количество монет, здоровья или очков опыта. Компьютер должен где-то хранить эти данные, пока ты играешь.\n\nВ программировании для хранения данных придумали переменные. Переменная — это подписанная коробочка в памяти компьютера. На коробочке написано имя (ярлык), а внутри лежит значение.\n\nЧтобы положить что-то в коробочку, используют знак равно =. В Python этот знак называется знаком присваивания.\n\nВажное правило: слева от знака = всегда пишется имя коробочки, а справа — то, что мы в неё кладём. Например, coins = 100 создаёт коробочку coins и кладёт туда число 100.\n\nКогда ты пишешь print(coins), компьютер открывает коробочку с этим именем, смотрит, что внутри, и выводит на экран число 100. Имя переменной пишется без кавычек! Если написать \"coins\" в кавычках, напечатается просто слово coins.",
          keyRule:
            "Переменная — это коробочка с именем. Слева пишем имя, справа значение: coins = 100. Имя переменной выводим без кавычек.",
          sections: [
            {
              heading: "Как создать переменную",
              text: "В Python не нужно специально объявлять тип переменной. Компьютер сам поймёт, число это или строка.",
              codeExample: {
                title: "Создание переменных и вывод",
                code: `hero_name = "Рыцарь"\nhealth = 100\n\nprint("Имя героя:", hero_name)\nprint("Здоровье:", health)`,
                explanation:
                  "Мы создали две переменные: hero_name со строковым значением и health с числом 100.",
              },
            },
            {
              heading: "Правила для имён переменных",
              text: "Имя переменной должно начинаться с буквы или знака подчеркивания '_'. Не может начинаться с цифры. Не должно содержать пробелов (вместо пробела используем подчеркивание: total_score).",
            },
          ],
          steps: [
            {
              code: "score = 50\nprint(score)",
              output: "50",
              explanation: "Создали переменную score со значением 50 и напечатали её содержимое на экране.",
            },
            {
              code: 'hero = "Рыцарь"\nhp = 100\nprint(hero, "имеет здоровье:", hp)',
              output: "Рыцарь имеет здоровье: 100",
              explanation: "В переменные можно сохранять и текст, и числа. Затем их можно выводить вместе через запятую.",
            },
            {
              code: 'coins = 20\nbonus = 5\ntotal = coins + bonus\nprint("Всего монет:", total)',
              output: "Всего монет: 25",
              explanation: "Python умеет складывать значения из двух коробочек и сохранять результат в третью переменную total.",
            },
          ],
          mistakes: [
            {
              wrongCode: "10 = x",
              error: "SyntaxError: can't assign to literal on line 1",
              fixedCode: "x = 10",
              explanation: "Слева от знака = всегда должно стоять имя переменной, а значение — справа.",
            },
            {
              wrongCode: "score = 100\nprint(Score)",
              error: "NameError: name 'Score' is not defined on line 2",
              fixedCode: "score = 100\nprint(score)",
              explanation: "В Python заглавные и строчные буквы различаются. score и Score — это две разные переменные.",
            },
            {
              wrongCode: 'level = 5\nprint("level")',
              error: "Логическая ошибка: программа напечатает слово level вместо числа 5",
              fixedCode: "level = 5\nprint(level)",
              explanation: "В кавычках Python видит обычный текст. Чтобы получить значение переменной, пиши её имя без кавычек.",
            },
            {
              wrongCode: '1player = "Alex"',
              error: "SyntaxError: bad input on line 1",
              fixedCode: 'player1 = "Alex"',
              explanation: "Имя переменной не может начинаться с цифры. Используй буквы или ставь цифру в конец.",
            },
          ],
          quiz: [
            {
              code: 'gold = 25\nprint("gold")',
              options: ["25", "gold", "Ошибка", "Ничего не выведет"],
              correct: 1,
              explanation: '"gold" в кавычках — это просто текст, поэтому напечатается само слово gold.',
            },
            {
              code: "a = 4\nb = 6\nprint(a + b)",
              options: ["a + b", "46", "10", "4 + 6"],
              correct: 2,
              explanation: "Python берёт 4 из коробки a, 6 из коробки b, складывает их и получает 10.",
            },
            {
              code: "x = 7\nprint(x + y)",
              options: ["7y", "7", "None", "NameError: name 'y' is not defined"],
              correct: 3,
              explanation: "Переменной y ещё не существует в программе, поэтому Python выдаст ошибку NameError.",
            },
          ],
          cheatsheet: [
            "имя = значение — положить значение в переменную",
            "Слева от = всегда пишется имя, справа — значение",
            "print(score) — выведет то, что лежит в переменной (без кавычек)",
            "Имя переменной не может начинаться с цифры",
          ],
        },
        exercise: {
          task: "1. Создайте переменную с именем city и присвойте ей название вашего любимого города (например, \"Москва\" или любой другой).\n2. Создайте переменную temperature и присвойте ей число 25.\n3. С помощью print() выведите эти переменные так, чтобы в консоли получилось:\nГород: Москва, Температура: 25",
          requirements: [
            "Создать переменную city со строковым значением",
            "Создать переменную temperature с числовым значением",
            "Вывести с помощью print фразу с этими переменными",
          ],
          starterCode: `# 1. Создай переменную city\n\n# 2. Создай переменную temperature\n\n# 3. Выведи результат через print\n`,
          hint: "Создай city = \"Москва\", temperature = 25 и напиши: print(\"Город:\", city, \", Температура:\", temperature) или используй f-строку.",
          solution: `city = "Москва"\ntemperature = 25\nprint(f"Город: {city}, Температура: {temperature}")`,

          tests: [{"inputs":[],"expected":"Город: Москва, Температура: 25"}],
          codeCheck: (cleanCode) => {
      if (!/\bcity\s*=/.test(cleanCode)) return { passed: false, message: 'Создай переменную city: city = "Москва".' };
      if (!/\btemperature\s*=/.test(cleanCode)) return { passed: false, message: 'Создай переменную temperature: temperature = 25.' };
      return null;
    },
          validate: (code, output) => {
            const hasCity = /\bcity\s*=/.test(code);
            const hasTemp = /\btemperature\s*=/.test(code);

            if (!hasCity) {
              return {
                passed: false,
                message: "Не найдена переменная city.",
                hint: "Объяви переменную: city = \"Название\"",
              };
            }
            if (!hasTemp) {
              return {
                passed: false,
                message: "Не найдена переменная temperature.",
                hint: "Объяви переменную: temperature = 25",
              };
            }
            if (!output.toLowerCase().includes("город") || !output.toLowerCase().includes("температура")) {
              return {
                passed: false,
                message: "Вывод программы должен содержать слова 'Город' и 'Температура'.",
                hint: "Проверь вызов функции print().",
              };
            }
            return {
              passed: true,
              message: "Отлично! Ты успешно создал переменные и вывел их значения! 🎉",
            };
          },
        },
      },
      {
        id: "variables_reassign",
        moduleId: "module_variables",
        title: "Перезапись значений и изменение переменных",
        icon: "RotateCcw",
        shortDesc: "Как менять значение переменной по ходу программы",
        theory: {
          summary:
            "Вспомни телефонные заметки или черновик в тетради. Ты можешь стереть старую запись ластиком и написать на её месте новую.\n\nПеременная называется «переменной» именно потому, что её значение может меняться в процессе работы программы.\n\nВ одной коробочке не могут одновременно лежать два значения. Когда ты кладёшь в переменную новое значение, старое значение исчезает навсегда.\n\nКомпьютер читает программу строго сверху вниз, строка за строкой, как ты читаешь книгу. Если на 1-й строчке было x = 5, а на 2-й строчке x = 10, то с этого момента x равен 10.\n\nМы даже можем изменять переменную на основе её прошлого значения! Например, строка coins = coins + 1 означает: «возьми старое количество монет, добавь 1 и положи обратно в ту же коробку».",
          keyRule:
            "Переменная хранит только самое последнее значение. Новое присваивание стирает старое значение.",
          sections: [
            {
              heading: "Перезапись значения",
              text: "Достаточно повторно использовать знак '=', чтобы обновить переменную.",
              codeExample: {
                title: "Пример изменения переменной",
                code: `coins = 10\nprint("Было монет:", coins)\n\ncoins = 25\nprint("Стало монет:", coins)`,
                explanation: "Сначала coins хранила 10, а затем получила 25.",
              },
            },
            {
              heading: "Увеличение на значение: += ",
              text: "Конструкция coins = coins + 5 или сокращенно coins += 5 прибавляет число к текущему значению переменной.",
              codeExample: {
                title: "Операторы += и -=",
                code: `score = 0\nscore += 10  # score = score + 10\nscore -= 2   # score = score - 2\nprint(score) # 8`,
                explanation: "Удобный способ обновлять счетчики.",
              },
            },
          ],
          steps: [
            {
              code: "level = 1\nlevel = 2\nprint(level)",
              output: "2",
              explanation: "Сначала положили 1, затем заменили на 2. Напечатается последнее актуальное значение — 2.",
            },
            {
              code: 'score = 100\nprint("Счёт в начале:", score)\nscore = score + 50\nprint("Счёт после бонуса:", score)',
              output: "Счёт в начале: 100\nСчёт после бонуса: 150",
              explanation: "Строка score = score + 50 увеличила значение на 50. Новое значение стало 150.",
            },
            {
              code: 'a = 5\nb = a\na = 10\nprint("a =", a)\nprint("b =", b)',
              output: "a = 10\nb = 5",
              explanation: "Когда мы написали b = a, в переменную b скопировалось число 5. Последующее изменение a на b уже никак не влияет.",
            },
          ],
          mistakes: [
            {
              wrongCode: "hp = 100\nhp - 20\nprint(hp)",
              error: "Логическая ошибка: hp останется 100, потому что вычитание не сохранено",
              fixedCode: "hp = 100\nhp = hp - 20\nprint(hp)",
              explanation: "Чтобы значение переменной изменилось, нужно обязательно использовать знак присваивания =.",
            },
            {
              wrongCode: "score = score + 10\nprint(score)",
              error: "NameError: name 'score' is not defined on line 1",
              fixedCode: "score = 0\nscore = score + 10\nprint(score)",
              explanation: "Нельзя взять значение из пустой коробки. Сначала нужно задать начальное значение, например score = 0.",
            },
            {
              wrongCode: "x = 5\nx + 1 = x",
              error: "SyntaxError: can't assign to operator on line 2",
              fixedCode: "x = 5\nx = x + 1",
              explanation: "Слева от знака = всегда должно быть только одно имя переменной.",
            },
          ],
          quiz: [
            {
              code: "x = 10\nx = 20\nx = 30\nprint(x)",
              options: ["10", "20", "30", "60"],
              correct: 2,
              explanation: "Каждая новая строчка перезаписывает старое значение. В конце в переменной осталось 30.",
            },
            {
              code: "a = 2\na = a * 3\nprint(a)",
              options: ["2", "6", "23", "a * 3"],
              correct: 1,
              explanation: "Python умножает старое значение (2) на 3 и сохраняет 6 обратно в a.",
            },
            {
              code: "c = 5\nd = c\nc = 20\nprint(d)",
              options: ["5", "20", "c", "Ошибка"],
              correct: 0,
              explanation: "В d было скопировано исходное число 5. Последующее изменение c не меняет d.",
            },
          ],
          cheatsheet: [
            "x = 10 — создали или перезаписали переменную",
            "x = x + 1 — увеличили значение переменной на 1",
            "Программа читается сверху вниз: работает самое свежее присваивание",
            "В переменной всегда хранится только одно последнее значение",
          ],
        },
        exercise: {
          task: "1. Создайте переменную balance со значением 100.\n2. Увеличьте balance на 50 (используя balance += 50 или balance = balance + 50).\n3. Выведите значение переменной balance в консоль.",
          requirements: [
            "Создать переменную balance = 100",
            "Увеличить balance на 50",
            "Вывести balance в консоль (должно быть 150)",
          ],
          starterCode: `balance = 100\n# Увеличь balance на 50:\n\n# Выведи balance:\n`,
          hint: "Напиши balance += 50, затем print(balance).",
          solution: `balance = 100\nbalance += 50\nprint(balance)`,

          tests: [{"inputs":[],"expected":"150"}],
          codeCheck: (cleanCode) => {
      if (!/\bbalance\s*(\+=|=.*balance)/.test(cleanCode)) return { passed: false, message: 'Нужно изменить значение переменной balance (например balance += 50).' };
      if (!/\bprint\s*\(\s*balance\s*\)/.test(cleanCode)) return { passed: false, message: 'Выведи значение balance через print(balance).' };
      return null;
    },
          validate: (code, output) => {
            if (output.trim() === "150") {
              return {
                passed: true,
                message: "Прекрасно! Ты понял, как изменять значения переменных! 💰",
              };
            }
            return {
              passed: false,
              message: "Ожидалось, что в консоли появится число 150.",
              hint: "Проверь: сначала balance = 100, затем добавь 50 и напечатай print(balance).",
            };
          },
        },
      },
      {
        id: "data_types",
        moduleId: "module_variables",
        title: "Основные типы данных: int, float, str, bool",
        icon: "Cpu",
        shortDesc: "Целые числа, дробные числа, строки и логические значения",
        theory: {
          summary:
            "В реальной жизни ты не станешь класть суп в рюкзак, а учебники — в кастрюлю. У каждой вещи есть своё назначение. В Python у данных тоже есть разные типы.\n\nПервый тип — целые числа (называются int, от integer). Это обычные числа без дробей: 5 яблок, 3 жизни, 10 монет.\n\nВторой тип — дробные числа с точкой (называются float). Это числа с остатком: температура 36.6, цена 99.99. Внимание: в Python в дробях ставится точка, а не запятая!\n\nТретий тип — строки (называются str, от string). Это любой текст в кавычках: \"Привет\", \"Игрок_1\", \"123\". Даже цифры в кавычках становятся текстом.\n\nЧетвёртый тип — логический (называется bool). В нём есть всего два значения: True (истина/да) и False (ложь/нет). Это как переключатель света: включено или выключено. Проверить тип любого значения можно функцией type().",
          keyRule:
            "int — целые числа (5), float — дроби с точкой (3.14), str — текст в кавычках (\"Привет\"), bool — True или False.",
          sections: [
            {
              heading: "Четыре главных базовых типа",
              text: "1. int — целые числа (42, -5, 0)\n2. float — вещественные (дробные) числа (3.14, 0.5)\n3. str — текст в кавычках (\"Привет\")\n4. bool — логические True (истина) или False (ложь).",
              codeExample: {
                title: "Проверка типов",
                code: `a = 100\nb = 3.14\nc = "Python"\nd = True\n\nprint(type(a))\nprint(type(b))`,
                explanation: "type(a) вернет <class 'int'>, а type(b) — <class 'float'>.",
              },
            },
          ],
          steps: [
            {
              code: 'age = 11\nprice = 19.5\nname = "Аня"\nis_online = True\nprint(age, price, name, is_online)',
              output: "11 19.5 Аня True",
              explanation: "Создали 4 переменные разных типов: целое число, дробь, строка и логическое значение.",
            },
            {
              code: 'print(type(42))\nprint(type(3.14))\nprint(type("Python"))',
              output: "<class 'int'>\n<class 'float'>\n<class 'str'>",
              explanation: "Функция type() показывает, к какому типу данных относится значение.",
            },
            {
              code: 'a = 10 + 5\nb = "10" + "5"\nprint("Числа:", a)\nprint("Строки:", b)',
              output: "Числа: 15\nСтроки: 105",
              explanation: 'Числа складываются математически (15), а строки склеиваются буква к букве ("105"). Поэтому тип данных очень важен!',
            },
          ],
          mistakes: [
            {
              wrongCode: 'age = 11\nprint("Мне " + age + " лет")',
              error: "TypeError: cannot concatenate 'str' and 'int' objects on line 2",
              fixedCode: 'age = 11\nprint("Мне " + str(age) + " лет")',
              explanation: "Нельзя складывать текст и число напрямую. Сначала нужно превратить число в строку через str().",
            },
            {
              wrongCode: 'score = 10\nprint(score + "5")',
              error: "TypeError: unsupported operand type(s) for +: 'int' and 'str' on line 2",
              fixedCode: "score = 10\nprint(score + 5)",
              explanation: '"5" в кавычках — это строка, а не число. Убери кавычки, чтобы сложить числа.',
            },
            {
              wrongCode: "pi = 3,14\nprint(type(pi))",
              error: "Логическая ошибка: Python создаст кортеж (tuple) вместо одной дроби",
              fixedCode: "pi = 3.14\nprint(type(pi))",
              explanation: "В Python дробная часть отделяется точкой: 3.14, а не запятой.",
            },
            {
              wrongCode: 'print(int("привет"))',
              error: "ValueError: invalid literal for int() with base 10: 'привет' on line 1",
              fixedCode: 'print(int("123"))',
              explanation: "Функция int() может превратить в число только строку, внутри которой записаны цифры.",
            },
          ],
          quiz: [
            {
              code: 'print("3" + "4")',
              options: ["7", "34", '"34"', "Ошибка"],
              correct: 1,
              explanation: 'Сложение двух строк склеивает их вместе, получается "34".',
            },
            {
              code: "x = 5.0\nprint(type(x))",
              options: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "<class 'str'>"],
              correct: 1,
              explanation: "Даже если после точки стоит ноль, любое число с точкой относится к типу float.",
            },
            {
              code: 'a = 10\nb = "2"\nprint(a * b)',
              options: ["20", "2222222222 (десять двоек)", "Ошибка", "None"],
              correct: 1,
              explanation: "Умножение числа на строку в Python повторяет строку указанное количество раз.",
            },
          ],
          cheatsheet: [
            "int — целое число: 10, -3, 0",
            "float — дробное число через точку: 2.5, 0.1",
            'str — строка в кавычках: "текст"',
            "bool — True или False (пишутся с большой буквы)",
            "type(x) — узнать тип данных значения x",
          ],
        },
        exercise: {
          task: "Создайте три переменные:\n- age со значением целого числа 16\n- height со значением дробного числа 1.75\n- is_student со значением True (логический тип)\nВыведите их типы через print(type(age)), print(type(height)), print(type(is_student)).",
          requirements: [
            "Создать age = 16",
            "Создать height = 1.75",
            "Создать is_student = True",
            "Вывести тип каждого значения",
          ],
          starterCode: `# Создай переменные и выведи их типы:\n`,
          hint: "Не забудь, что в дробных числах используется точка, а True пишется с большой буквы.",
          solution: `age = 16\nheight = 1.75\nis_student = True\nprint(type(age))\nprint(type(height))\nprint(type(is_student))`,

          tests: [{"inputs":[],"expected":"<class 'int'>\n<class 'float'>\n<class 'bool'>"}],
          codeCheck: (cleanCode) => {
      if (!/\btype\s*\(/.test(cleanCode)) return { passed: false, message: 'Используй функцию type(...) для вывода типов.' };
      if (!/\bage\b/.test(cleanCode) || !/\bheight\b/.test(cleanCode) || !/\bis_student\b/.test(cleanCode)) return { passed: false, message: 'Создай переменные age, height и is_student.' };
      return null;
    },
          validate: (code, output) => {
            const hasInt = output.includes("int");
            const hasFloat = output.includes("float");
            const hasBool = output.includes("bool");

            if (hasInt && hasFloat && hasBool) {
              return {
                passed: true,
                message: "Отлично! Ты познакомился с 4 главными типами данных Python! 🎯",
              };
            }
            return {
              passed: false,
              message: "В выводе должны присутствовать типы int, float и bool.",
              hint: "Используй вызовы print(type(age)), print(type(height)), print(type(is_student)).",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 3: ВВОД ДАННЫХ И КОНВЕРТАЦИЯ
  // ==========================================
  {
    id: "module_io",
    title: "3. Ввод данных: функция input()",
    description: "Взаимодействие с пользователем, чтение с клавиатуры и приведение типов",
    icon: "Keyboard",
    color: "#0A7A50",
    lessons: [
      {
        id: "input_strings",
        moduleId: "module_io",
        title: "Функция input() — ввод строки",
        icon: "Keyboard",
        shortDesc: "Спрашиваем имя у пользователя и отвечаем ему",
        theory: {
          summary:
            "Функция input() останавливает выполнение программы и ждёт, пока пользователь напечатает текст в консоли и нажмет Enter.",
          keyRule:
            "input() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл цифры, они будут строкой.",
          sections: [
            {
              heading: "Как использовать input()",
              text: "В скобках input() можно передать подсказку — текст вопроса, который увидит пользователь перед вводом.",
              codeExample: {
                title: "Пример диалога",
                code: `name = input("Как тебя зовут? ")\nprint("Привет,", name, "приятно познакомиться!")`,
                explanation:
                  "Значение, которое наберет пользователь, сохранится в переменной name.",
              },
            },
          ],
          tips: ["Добавляйте пробел в конце текста подсказки, чтобы вводимый текст не прилипал к вопросу."],
        },
        exercise: {
          task: "Напишите программу, которая с помощью input() спрашивает: 'Твое имя: ', а затем выводит строку:\nЗдравствуй, <имя>!\n(например, если ввести 'Анна', должно вывести 'Здравствуй, Анна!')",
          requirements: [
            "Использовать функцию input() для сохранения имени",
            "Вывести приветствие 'Здравствуй, <имя>!'",
          ],
          starterCode: `name = input("Твое имя: ")\n# Выведи приветствие:\n`,
          hint: "Используй f-строку: print(f\"Здравствуй, {name}!\") или print(\"Здравствуй,\", name + \"!\")",
          solution: `name = input("Твое имя: ")\nprint(f"Здравствуй, {name}!")`,

          tests: [{"inputs":["Иван"],"expected":"Здравствуй, Иван!"},{"inputs":["Алиса"],"expected":"Здравствуй, Алиса!"}],
          codeCheck: (cleanCode) => {
      if (!/\binput\s*\(/.test(cleanCode)) return { passed: false, message: 'Используй функцию input() для ввода имени с клавиатуры.' };
      return null;
    },
          validate: (code, output) => {
            if (!code.includes("input")) {
              return {
                passed: false,
                message: "В коде должна использоваться функция input().",
              };
            }
            if (output.toLowerCase().includes("здравствуй")) {
              return {
                passed: true,
                message: "Великолепно! Ты научился запрашивать данные у пользователя! 🤝",
              };
            }
            return {
              passed: false,
              message: "Вывод должен содержать слово 'Здравствуй, ...!'.",
            };
          },
        },
      },
      {
        id: "input_numbers",
        moduleId: "module_io",
        title: "Ввод чисел: int() и float()",
        icon: "Hash",
        shortDesc: "Превращаем введенный текст в настоящие числа для расчетов",
        theory: {
          summary:
            "Так как input() возвращает строку, операция '5' + '5' даст строку '55', а не число 10! Чтобы производить математические вычисления, введенную строку нужно обернуть в int() или float().",
          keyRule:
            "Для целых чисел используем int(input()), для дробных — float(input()).",
          sections: [
            {
              heading: "Сравнение: без int() и с int()",
              text: "Посмотрите, какая разница между сложением строк и сложением чисел:",
              codeExample: {
                title: "Оборачивание input в int",
                code: `# Неправильно для математики:\na = input()  # "5"\nb = input()  # "3"\nprint(a + b) # Напечатает "53"\n\n# Правильно:\nx = int(input())\ny = int(input())\nprint(x + y) # Напечатает 8`,
                explanation: "int() превращает текст из цифр в настоящее математическое число.",
              },
            },
          ],
        },
        exercise: {
          task: "Напишите программу, которая запрашивает число с помощью n = int(input()), а затем выводит его квадрат (число, умноженное само на себя).\nНапример, если ввели 7, программа выводит: 49.",
          requirements: [
            "Преобразовать ввод через int(input())",
            "Вычислить и вывести квадрат числа",
          ],
          starterCode: `num = int(input("Введите число: "))\n# Посчитай квадрат и выведи его:\n`,
          hint: "Умножь num * num или используй степень num ** 2, затем вызови print.",
          solution: `num = int(input("Введите число: "))\nprint(num ** 2)`,

          tests: [{"inputs":["5"],"expected":"25"},{"inputs":["8"],"expected":"64"},{"inputs":["12"],"expected":"144"}],
          codeCheck: (cleanCode) => {
      if (!/\bint\s*\(/.test(cleanCode) || !/\binput\s*\(/.test(cleanCode)) return { passed: false, message: 'Преобразуй ввод в целое число: int(input(...)).' };
      if (!/\*\*|pow|\*/.test(cleanCode)) return { passed: false, message: 'Вычисли квадрат числа с помощью ** 2 или * num.' };
      return null;
    },
          validate: (code, output) => {
            if (!code.includes("int")) {
              return {
                passed: false,
                message: "Не забудь использовать int() для превращения ввода в число.",
              };
            }
            // If output has any number or result
            return {
              passed: true,
              message: "Отлично! Теперь ты умеешь считывать числа и производить с ними вычисления! 🧮",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 4: АРИФМЕТИКА И МАТЕМАТИКА
  // ==========================================
  {
    id: "module_math",
    title: "4. Арифметика и математические действия",
    description: "Сложение, вычитание, умножение, деление, целочисленное деление, остаток от деления и степень",
    icon: "Calculator",
    color: "#C4581D",
    lessons: [
      {
        id: "arithmetic_operators",
        moduleId: "module_math",
        title: "Арифметические операторы: +, -, *, /, //, %, **",
        icon: "Calculator",
        shortDesc: "Все математические знаки Python и их особенности",
        theory: {
          summary:
            "Python поддерживает все классические математические операции, а также деление нацело и остаток.",
          keyRule:
            "Обычное деление '/' ВСЕГДА возвращает float (даже 4 / 2 вернет 2.0). Деление нацело '//' отбрасывает дробь. Процент '%' находит остаток.",
          sections: [
            {
              heading: "Сводка операторов",
              text: "+ сложение (5 + 2 = 7)\n- вычитание (5 - 2 = 3)\n* умножение (5 * 2 = 10)\n/ деление (5 / 2 = 2.5)\n// деление нацело (7 // 3 = 2)\n% остаток от деления (7 % 3 = 1)\n** возведение в степень (2 ** 3 = 8).",
              codeExample: {
                title: "Работа со временем через // и %",
                code: `total_seconds = 130\nminutes = total_seconds // 60\nseconds = total_seconds % 60\n\nprint("Минут:", minutes, "Секунд:", seconds)`,
                explanation: "130 секунд — это 2 минуты (130 // 60) и 10 секунд (130 % 60).",
              },
            },
          ],
          tips: ["Приоритет операций такой же, как в математике: скобки () имеют высший приоритет, затем **, затем *, /, //, %, затем +, -."],
        },
        exercise: {
          task: "Даны переменные a = 17 и b = 5.\nВычислите и напечатайте:\n1. Результат деления нацело a // b\n2. Результат остатка от деления a % b\nВыведите оба результата через запятую в одном print().",
          requirements: [
            "Использовать a = 17 и b = 5",
            "Вычислить a // b (будет 3)",
            "Вычислить a % b (будет 2)",
            "Вывести: 3 2",
          ],
          starterCode: `a = 17\nb = 5\n# Выведи результат a // b и a % b:\n`,
          hint: "Напиши: print(a // b, a % b)",
          solution: `a = 17\nb = 5\nprint(a // b, a % b)`,

          tests: [{"inputs":[],"expected":"3 2"}],
          codeCheck: (cleanCode) => {
      if (!/\/\//.test(cleanCode)) return { passed: false, message: 'Используй оператор целочисленного деления //.' };
      if (!/%/.test(cleanCode)) return { passed: false, message: 'Используй оператор остатка от деления %.' };
      return null;
    },
          validate: (code, output) => {
            if (output.trim() === "3 2" || output.includes("3") && output.includes("2")) {
              return {
                passed: true,
                message: "Превосходно! Ты освоил целочисленное деление и нахождение остатка! 📐",
              };
            }
            return {
              passed: false,
              message: "Ожидался вывод: 3 2",
              hint: "Проверь: 17 // 5 дает 3, а 17 % 5 дает 2.",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 5: УСЛОВИЯ (IF / ELIF / ELSE)
  // ==========================================
  {
    id: "module_conditions",
    title: "5. Условия и логика: if, elif, else",
    description: "Ветвление программ, проверка условий, операторы сравнения и логические связки",
    icon: "GitBranch",
    color: "#5636E0",
    lessons: [
      {
        id: "if_else_intro",
        moduleId: "module_conditions",
        title: "Условный оператор if и блок else",
        icon: "GitBranch",
        shortDesc: "Принятие решений в коде в зависимости от условия",
        theory: {
          summary:
            "Конструкция if позволяет выполнять блок кода только тогда, когда выполняется определённое условие (оно истинно — True). Если условие ложно (False), срабатывает блок else (иначе).",
          keyRule:
            "В конце строки с if и else ВСЕГДА ставится двоеточие ':', а команды внутри блока пишутся С ОТСТУПОМ в 4 пробела!",
          sections: [
            {
              heading: "Синтаксис и отступы",
              text: "Отступы в Python критически важны. По отступу Python понимает, какие строки принадлежат к условию.",
              codeExample: {
                title: "Проверка возраста",
                code: `age = 18\n\nif age >= 18:\n    print("Доступ разрешен")\nelse:\n    print("Доступ ограничен")`,
                explanation:
                  "Так как age равно 18, условие age >= 18 истинно, и напечатается 'Доступ разрешен'.",
              },
            },
            {
              heading: "Операторы сравнения",
              text: "== равно (внимание: два знака равно!)\n!= не равно\n> больше\n< меньше\n>= больше или равно\n<= меньше или равно.",
            },
          ],
          tips: ["Не путайте '=' (присваивание) и '==' (проверка на равенство). В условии всегда '=='!"],
          commonMistakes: ["Забыть двоеточие ':' после if или else.", "Забыть сделать отступ внутри блока."],
        },
        exercise: {
          task: "Напишите программу, которая проверяет переменную score = 85.\nЕсли score >= 50, программа должна выводить: Экзамен сдан!\nИначе (в блоке else) программа должна выводить: Нужно пересдать.",
          requirements: [
            "Задать переменную score = 85",
            "Использовать конструкцию if score >= 50: с отступом",
            "Использовать блок else: с отступом",
          ],
          starterCode: `score = 85\n\n# Напиши проверку if / else:\n`,
          hint: "if score >= 50:\n    print(\"Экзамен сдан!\")\nelse:\n    print(\"Нужно пересдать.\")",
          solution: `score = 85\nif score >= 50:\n    print("Экзамен сдан!")\nelse:\n    print("Нужно пересдать.")`,

          tests: [{"inputs":[],"expected":"Экзамен сдан!"}],
          codeCheck: (cleanCode) => {
      if (!/\bif\b/.test(cleanCode)) return { passed: false, message: 'В коде должен быть условный оператор if.' };
      if (!/\belse\s*:/.test(cleanCode)) return { passed: false, message: 'В коде должен присутствовать блок else:.' };
      if (!/>=|>/.test(cleanCode)) return { passed: false, message: 'Проверь условие score >= 50.' };
      return null;
    },
          validate: (code, output) => {
            if (!code.includes("if") || !code.includes("else")) {
              return {
                passed: false,
                message: "Не найдена конструкция if и else.",
              };
            }
            if (output.includes("Экзамен сдан")) {
              return {
                passed: true,
                message: "Отлично! Условие сработало верно! 🎉",
              };
            }
            return {
              passed: false,
              message: "Вывод должен быть: 'Экзамен сдан!'",
            };
          },
        },
      },
      {
        id: "elif_ladder",
        moduleId: "module_conditions",
        title: "Каскадные условия: elif",
        icon: "ListFilter",
        shortDesc: "Проверка нескольких условий по очереди",
        theory: {
          summary:
            "Когда вариантов больше двух, используется elif (сокращение от else if — 'иначе если'). Можно ставить сколько угодно блоков elif подряд.",
          keyRule:
            "Python проверяет условия сверху вниз. Как только найдено первое верное условие, его блок выполняется, а все остальные пропускаются.",
          sections: [
            {
              heading: "Пример шкалы оценок",
              text: "Разбор баллов на словесную оценку:",
              codeExample: {
                title: "Шкала баллов",
                code: `points = 75\n\nif points >= 90:\n    print("Отлично (5)")\nelif points >= 75:\n    print("Хорошо (4)")\nelif points >= 50:\n    print("Удовлетворительно (3)")\nelse:\n    print("Неудовлетворительно (2)")`,
                explanation: "Так как points = 75, сработает первый подходящий блок elif points >= 75.",
              },
            },
          ],
        },
        exercise: {
          task: "Напишите программу, которая по значению переменной grade (от 1 до 5) выводит слово:\nЕсли grade == 5: 'Отлично'\nЕсли grade == 4: 'Хорошо'\nИначе: 'Нужно подучить'\nПроверьте для grade = 5.",
          requirements: [
            "Использовать if и elif или else",
            "Для grade = 5 вывести 'Отлично'",
          ],
          starterCode: `grade = 5\n\n# Напиши проверку:\n`,
          hint: "if grade == 5:\n    print(\"Отлично\")\nelif grade == 4:\n    print(\"Хорошо\")\nelse:\n    print(\"Нужно подучить\")",
          solution: `grade = 5\nif grade == 5:\n    print("Отлично")\nelif grade == 4:\n    print("Хорошо")\nelse:\n    print("Нужно подучить")`,

          tests: [{"inputs":[],"expected":"Отлично"}],
          codeCheck: (cleanCode) => {
      if (!/\bif\b/.test(cleanCode)) return { passed: false, message: 'В коде должен быть оператор if.' };
      if (!/\belif\b/.test(cleanCode)) return { passed: false, message: 'В коде должен быть блок elif.' };
      if (!/\belse\s*:/.test(cleanCode)) return { passed: false, message: 'В коде должен присутствовать блок else:.' };
      return null;
    },
          validate: (code, output) => {
            if (output.includes("Отлично")) {
              return {
                passed: true,
                message: "Замечательно! Ты освоил разветвленные проверки с elif! 🌟",
              };
            }
            return {
              passed: false,
              message: "Ожидался вывод: 'Отлично'",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 6: СПИСКИ (LISTS)
  // ==========================================
  {
    id: "module_lists",
    title: "6. Списки (Lists)",
    description: "Коллекции элементов, квадратные скобки [], индексы с нуля и методы append, len, pop",
    icon: "ListOrdered",
    color: "#2F6FD0",
    lessons: [
      {
        id: "lists_basics",
        moduleId: "module_lists",
        title: "Создание списка и обращение по индексу",
        icon: "ListOrdered",
        shortDesc: "Храним несколько значений в одной переменной",
        theory: {
          summary:
            "Список (list) — это упорядоченная коллекция элементов в квадратных скобках []. Элементы перечисляются через запятую.",
          keyRule:
            "В программировании нумерация элементов (индексация) ВСЕГДА начинается с 0! Первый элемент имеет индекс [0], второй [1], третий [2].",
          sections: [
            {
              heading: "Индексы и доступ к элементам",
              text: "Чтобы достать нужный элемент из списка, пишем имя списка и в квадратных скобках номер индекса.",
              codeExample: {
                title: "Индексация элементов",
                code: `fruits = ["яблоко", "банан", "апельсин"]\n\nprint("Первый фрукт:", fruits[0]) # яблоко\nprint("Второй фрукт:", fruits[1]) # банан\nprint("Последний:", fruits[-1])   # апельсин (индекс -1 берет с конца!)`,
                explanation: "Индекс -1 — это удобный способ получить самый последний элемент списка.",
              },
            },
          ],
          tips: ["Функция len(my_list) возвращает количество элементов в списке."],
        },
        exercise: {
          task: "1. Создайте список planets с четырьмя планетами: [\"Меркурий\", \"Венера\", \"Земля\", \"Марс\"].\n2. С помощью print() выведите первую планету по индексу 0.\n3. С помощью print() выведите последнюю планету по индексу -1.",
          requirements: [
            "Создать список planets с 4 названиями",
            "Вывести planets[0]",
            "Вывести planets[-1]",
          ],
          starterCode: `# Создай список planets и выведи первый и последний элементы:\n`,
          hint: "planets = [\"Меркурий\", \"Венера\", \"Земля\", \"Марс\"]\nprint(planets[0])\nprint(planets[-1])",
          solution: `planets = ["Меркурий", "Венера", "Земля", "Марс"]\nprint(planets[0])\nprint(planets[-1])`,

          tests: [{"inputs":[],"expected":"Меркурий\nМарс"}],
          codeCheck: (cleanCode) => {
      if (!/\bplanets\s*=/.test(cleanCode)) return { passed: false, message: 'Создай список planets.' };
      if (!/\bplanets\s*\[\s*0\s*\]/.test(cleanCode)) return { passed: false, message: 'Получи первый элемент списка по индексу: planets[0].' };
      if (!/\bplanets\s*\[\s*-1\s*\]/.test(cleanCode)) return { passed: false, message: 'Получи последний элемент списка по индексу: planets[-1].' };
      return null;
    },
          validate: (code, output) => {
            const hasMercury = output.includes("Меркурий");
            const hasMars = output.includes("Марс");
            if (hasMercury && hasMars) {
              return {
                passed: true,
                message: "Отлично! Ты успешно получил доступ к элементам списка по индексам! 🪐",
              };
            }
            return {
              passed: false,
              message: "Вывод должен содержать 'Меркурий' и 'Марс'.",
            };
          },
        },
      },
      {
        id: "lists_methods",
        moduleId: "module_lists",
        title: "Методы списков: append(), pop() и len()",
        icon: "PlusCircle",
        shortDesc: "Добавляем и удаляем элементы из списка",
        theory: {
          summary:
            "Списки можно изменять: добавлять в них новые элементы или удалять старые.",
          keyRule:
            "Метод .append(x) добавляет элемент x в конец списка. Метод .pop() удаляет последний элемент.",
          sections: [
            {
              heading: "Пример изменения списка",
              text: "Работа с инвентарем персонажа:",
              codeExample: {
                title: "Добавление и длина",
                code: `backpack = ["фонарик", "карта"]\nbackpack.append("компас") # Добавили компас\n\nprint("Вещей в рюкзаке:", len(backpack))\nprint("Список:", backpack)`,
                explanation: "len(backpack) вернет 3, так как теперь в списке три предмета.",
              },
            },
          ],
        },
        exercise: {
          task: "1. Создайте пустой список numbers = []\n2. Добавьте в него числа 10, 20 и 30 с помощью трех вызовов метода numbers.append(...)\n3. Напечатайте получившийся список через print(numbers).",
          requirements: [
            "Создать пустой список numbers = []",
            "Использовать numbers.append() трижды",
            "Вывести [10, 20, 30]",
          ],
          starterCode: `numbers = []\n# Добавь 10, 20, 30:\n\n# Выведи numbers:\n`,
          hint: "numbers.append(10)\nnumbers.append(20)\nnumbers.append(30)\nprint(numbers)",
          solution: `numbers = []\nnumbers.append(10)\nnumbers.append(20)\nnumbers.append(30)\nprint(numbers)`,

          tests: [{"inputs":[],"expected":"[10, 20, 30]"}],
          codeCheck: (cleanCode) => {
      const appends = cleanCode.match(/\bnumbers\.append\s*\(/g) || [];
      if (appends.length < 3) return { passed: false, message: 'Добавь элементы с помощью трех вызовов numbers.append(...).' };
      if (!/\bprint\s*\(\s*numbers\s*\)/.test(cleanCode)) return { passed: false, message: 'Выведи список через print(numbers).' };
      return null;
    },
          validate: (code, output) => {
            if (output.includes("10") && output.includes("20") && output.includes("30")) {
              return {
                passed: true,
                message: "Отлично! Список [10, 20, 30] успешно сформирован с помощью append! 🚀",
              };
            }
            return {
              passed: false,
              message: "Ожидался список [10, 20, 30]",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 7: ЦИКЛЫ (FOR И WHILE)
  // ==========================================
  {
    id: "module_loops",
    title: "7. Циклы: for и while",
    description: "Многократное повторение действий, обход коллекций и генератор чисел range()",
    icon: "Repeat",
    color: "#B0700C",
    lessons: [
      {
        id: "for_range",
        moduleId: "module_loops",
        title: "Цикл for и функция range()",
        icon: "Repeat",
        shortDesc: "Повторяем действие заданное число раз",
        theory: {
          summary:
            "Цикл for используется, когда нужно повторить блок кода известное число раз или перебрать все элементы в списке.",
          keyRule:
            "range(n) генерирует числа от 0 до n-1 (ровно n повторений). Например, range(5) даст числа: 0, 1, 2, 3, 4.",
          sections: [
            {
              heading: "Синтаксис цикла for",
              text: "Каждый шаг цикла называется 'итерацией'.",
              codeExample: {
                title: "Повторение 5 раз",
                code: `for i in range(5):\n    print("Шаг номер:", i)`,
                explanation: "Переменная i на каждом шаге автоматически принимает очередное число из диапазона.",
              },
            },
            {
              heading: "Диапазон от и до: range(start, stop)",
              text: "range(1, 6) сгенерирует числа от 1 до 5 (правая граница не включается!).",
            },
          ],
          tips: ["Если нужно напечатать числа в одну строку, добавьте end=' ': print(i, end=' ')."],
        },
        exercise: {
          task: "С помощью цикла for и функции range() выведите числа от 1 до 5 включительно (каждое число на новой строке).\nВывод должен быть:\n1\n2\n3\n4\n5",
          requirements: [
            "Использовать цикл for",
            "Использовать range(1, 6)",
            "Вывести числа от 1 до 5",
          ],
          starterCode: `# Напиши цикл for для вывода чисел от 1 до 5:\n`,
          hint: "for i in range(1, 6):\n    print(i)",
          solution: `for i in range(1, 6):\n    print(i)`,

          tests: [{"inputs":[],"expected":"1\n2\n3\n4\n5"}],
          codeCheck: (cleanCode) => {
      if (!/\bfor\b/.test(cleanCode)) return { passed: false, message: 'Используй цикл for.' };
      if (!/\brange\s*\(/.test(cleanCode)) return { passed: false, message: 'Используй функцию range(1, 6).' };
      return null;
    },
          validate: (code, output, logs) => {
            if (!code.includes("for") || !code.includes("range")) {
              return {
                passed: false,
                message: "Используй цикл for и функцию range().",
              };
            }
            const clean = output.replace(/\s+/g, " ").trim();
            if (clean === "1 2 3 4 5" || (output.includes("1") && output.includes("5") && output.includes("3"))) {
              return {
                passed: true,
                message: "Превосходно! Ты освоил цикл for и range! 🔄",
              };
            }
            return {
              passed: false,
              message: "Ожидались числа 1, 2, 3, 4, 5.",
            };
          },
        },
      },
      {
        id: "while_loop",
        moduleId: "module_loops",
        title: "Цикл while (пока условие верно)",
        icon: "PlayCircle",
        shortDesc: "Повторение кода, пока выполняется условие",
        theory: {
          summary:
            "Цикл while работает до тех пор, пока его условие остаётся истинным (True). Как только условие становится ложным (False), цикл завершается.",
          keyRule:
            "Обязательно изменяйте переменную условия внутри цикла (например, count += 1), иначе цикл станет бесконечным и программа зависнет!",
          sections: [
            {
              heading: "Пример таймера",
              text: "Обратный отсчет:",
              codeExample: {
                title: "Отсчет с помощью while",
                code: `timer = 3\nwhile timer > 0:\n    print(timer)\n    timer -= 1 # Уменьшаем на 1\nprint("Старт!")`,
                explanation: "Цикл выполнится для значений 3, 2, 1, затем timer станет 0, условие 0 > 0 станет ложным, и цикл закончится.",
              },
            },
          ],
        },
        exercise: {
          task: "Напишите цикл while, который выводит удвоенное число n, начиная с 1, пока n <= 16 (то есть: 1, 2, 4, 8, 16).\nВнутри цикла умножайте n на 2: n *= 2.",
          requirements: [
            "Задать n = 1 перед циклом",
            "Использовать while n <= 16:",
            "Печатать print(n) и умножать n *= 2",
          ],
          starterCode: `n = 1\nwhile n <= 16:\n    # Выведи n и умножь n на 2:\n`,
          hint: "while n <= 16:\n    print(n)\n    n *= 2",
          solution: `n = 1\nwhile n <= 16:\n    print(n)\n    n *= 2`,

          tests: [{"inputs":[],"expected":"1\n2\n4\n8\n16"}],
          codeCheck: (cleanCode) => {
      if (!/\bwhile\b/.test(cleanCode)) return { passed: false, message: 'Используй цикл while.' };
      if (!/\*=\s*2|\b=\s*n\s*\*\s*2/.test(cleanCode)) return { passed: false, message: 'Умножай n на 2 внутри цикла: n *= 2.' };
      return null;
    },
          validate: (code, output) => {
            if (!code.includes("while")) {
              return {
                passed: false,
                message: "В коде должен использоваться цикл while.",
              };
            }
            if (output.includes("1") && output.includes("2") && output.includes("4") && output.includes("16")) {
              return {
                passed: true,
                message: "Отличная работа! Цикл while отработал безупречно! ⏱️",
              };
            }
            return {
              passed: false,
              message: "Ожидались числа: 1, 2, 4, 8, 16.",
            };
          },
        },
      },
    ],
  },

  // ==========================================
  // МОДУЛЬ 8: ФУНКЦИИ (DEF И RETURN)
  // ==========================================
  {
    id: "module_functions",
    title: "8. Функции: def и return",
    description: "Создание собственных переиспользуемых функций, параметры и возврат значений",
    icon: "Code2",
    color: "#0A7A50",
    lessons: [
      {
        id: "func_intro",
        moduleId: "module_functions",
        title: "Объявление функции через def",
        icon: "Code2",
        shortDesc: "Учимся объединять команды в именованную функцию",
        theory: {
          summary:
            "Функция — это обособленный блок кода, которому мы даем имя. Функцию можно вызывать многократно из разных мест программы.",
          keyRule:
            "Функция объявляется ключевым словом def, затем имя_функции(параметры):. Оператор return возвращает результат работы функции.",
          sections: [
            {
              heading: "Как создать и вызвать функцию",
              text: "Объявление функции не запускает её сразу — оно лишь учит компьютер новому действию. Чтобы код сработал, функцию нужно вызвать по имени со скобками.",
              codeExample: {
                title: "Функция сложения двух чисел",
                code: `def add(a, b):\n    return a + b\n\nresult = add(10, 25)\nprint("Результат:", result) # 35`,
                explanation: "Параметры a и b принимают числа 10 и 25, а return возвращает их сумму 35.",
              },
            },
          ],
          tips: ["Если функция ничего явно не возвращает через return, она автоматически возвращает значение None."],
        },
        exercise: {
          task: "1. Напишите функцию square(x), которая принимает одно число x и возвращает его квадрат (x * x или x ** 2).\n2. Вызовите функцию для числа 6 и выведите результат через print(square(6)). В консоли должно появиться 36.",
          requirements: [
            "Объявить функцию def square(x):",
            "Использовать return для возврата x * x",
            "Вывести print(square(6)) (должно быть 36)",
          ],
          starterCode: `# 1. Объяви функцию square(x):\n\n# 2. Вызови её для числа 6 и выведи результат:\n`,
          hint: "def square(x):\n    return x * x\n\nprint(square(6))",
          solution: `def square(x):\n    return x * x\n\nprint(square(6))`,

          tests: [{"inputs":[],"expected":"36"}],
          codeCheck: (cleanCode) => {
      if (!/\bdef\s+square\s*\(/.test(cleanCode)) return { passed: false, message: 'Объяви функцию square: def square(x):' };
      if (!/\breturn\b/.test(cleanCode)) return { passed: false, message: 'Функция должна возвращать результат через return.' };
      return null;
    },
          testCode: "assert callable(square), \"Функция square должна быть объявлена\"\nassert square(3) == 9, \"square(3) должна возвращать 9\"\nassert square(10) == 100, \"square(10) должна возвращать 100\"",
          validate: (code, output) => {
            if (!code.includes("def") || !code.includes("return")) {
              return {
                passed: false,
                message: "Функция должна быть объявлена через def и возвращать значение через return.",
              };
            }
            if (output.trim() === "36" || output.includes("36")) {
              return {
                passed: true,
                message: "Великолепно! Ты создал свою первую функцию в Python! 🎯",
              };
            }
            return {
              passed: false,
              message: "Ожидался вывод: 36",
            };
          },
        },
      },
    ],
  },
  // ==========================================
  // МОДУЛЬ 9: ГРАФИЧЕСКИЙ ИНТЕРФЕЙС С TKINTER
  // ==========================================
  {
    id: "module_tkinter",
    title: "9. Графический интерфейс с Tkinter",
    description: "Создание оконных приложений (GUI): виджеты, JSON, музыкальный плеер, классы в драм-машине и пошаговый секвенсор",
    icon: "AppWindow",
    color: "#5636E0",
    lessons: TKINTER_LESSONS,
  },
];

// Helper to find a lesson by ID
export function findLessonById(lessonId: string): PythonLesson | null {
  for (const mod of PYTHON_MODULES) {
    for (const l of mod.lessons) {
      if (l.id === lessonId) return l;
    }
  }
  return null;
}

// Get flattened list of all lessons
export function getAllLessons(): PythonLesson[] {
  const result: PythonLesson[] = [];
  for (const mod of PYTHON_MODULES) {
    for (const l of mod.lessons) {
      result.push(l);
    }
  }
  return result;
}
