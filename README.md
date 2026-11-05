# python-station-site

«Python Станция» — интерактивный курс Python 3 с автопроверкой заданий, справочником функций и песочницей.

Сайт: https://ivan3232j.github.io/python-station-site/

## Структура

- `source/` — исходники (React + Vite + Tailwind). Править нужно здесь.
- `index.html`, `assets/` — готовая сборка, её отдаёт GitHub Pages. Руками не редактировать.

## Разработка

```bash
cd source
npm install
npm run dev
```

## Выкладка

```bash
./deploy.sh
git add -A
git commit -m "..."
git push
```
