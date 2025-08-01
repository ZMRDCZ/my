#!/bin/bash

# Скрипт для деплоя на GitHub Pages
echo "🚀 Начинаем деплой на GitHub Pages..."

# Проверяем, что мы в правильной директории
if [ ! -f "nuxt.config.ts" ]; then
    echo "❌ Ошибка: nuxt.config.ts не найден. Убедитесь, что вы в корневой папке проекта."
    exit 1
fi

# Устанавливаем переменную окружения для production
export NODE_ENV=production

# Очищаем кэш npm
echo "🧹 Очищаем кэш npm..."
npm cache clean --force

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm ci

# Генерируем статический сайт
echo "🔨 Генерируем статический сайт..."
npm run generate

# Создаем .nojekyll файл
echo "📄 Создаем .nojekyll файл..."
touch .output/public/.nojekyll

# Деплоим на GitHub Pages
echo "🌐 Деплоим на GitHub Pages..."
npx gh-pages -d .output/public

echo "✅ Деплой завершен!"
echo "🌍 Ваш сайт будет доступен по адресу: https://zmrdcz.github.io/my/"
echo "⏰ Подождите несколько минут для обновления." 