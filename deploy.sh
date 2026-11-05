#!/usr/bin/env bash
# Собирает сайт из source/ и кладёт готовую сборку в корень репозитория
# (index.html + assets/), откуда её отдаёт GitHub Pages.
# После запуска останется сделать: git add -A && git commit && git push
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT/source"

[ -d node_modules ] || npm install --no-audit --no-fund

rm -rf dist
# --base=./ — сайт живёт в подпапке /python-station-site/, пути должны быть относительными
npx vite build --base=./

rm -rf "$ROOT/assets"
mkdir -p "$ROOT/assets"
cp dist/assets/index-*.js dist/assets/index-*.css "$ROOT/assets/"
cp dist/index.html "$ROOT/index.html"

echo "Готово: сборка лежит в $ROOT (index.html, assets/)."
