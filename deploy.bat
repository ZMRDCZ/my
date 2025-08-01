@echo off
echo 🚀 Начинаем деплой на GitHub Pages...

REM Проверяем, что мы в правильной директории
if not exist "nuxt.config.ts" (
    echo ❌ Ошибка: nuxt.config.ts не найден. Убедитесь, что вы в корневой папке проекта.
    pause
    exit /b 1
)

REM Устанавливаем переменную окружения для production
set NODE_ENV=production

REM Очищаем кэш npm
echo 🧹 Очищаем кэш npm...
npm cache clean --force

REM Устанавливаем зависимости
echo 📦 Устанавливаем зависимости...
npm ci

REM Генерируем статический сайт
echo 🔨 Генерируем статический сайт...
npm run generate

REM Создаем .nojekyll файл
echo 📄 Создаем .nojekyll файл...
echo. > .output\public\.nojekyll

REM Деплоим на GitHub Pages
echo 🌐 Деплоим на GitHub Pages...
npx gh-pages -d .output/public

echo ✅ Деплой завершен!
echo 🌍 Ваш сайт будет доступен по адресу: https://zmrdcz.github.io/my/
echo ⏰ Подождите несколько минут для обновления.
pause 