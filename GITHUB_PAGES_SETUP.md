# Настройка GitHub Pages для портфолио

## Исправление ошибок 404 для CSS/JS файлов

### Проблема
Ошибки 404 для файлов типа `entry.xtMf2K_c.css`, `BI1z9Nda.js` и других - это распространенная проблема с Nuxt.js на GitHub Pages.

### Решение
1. ✅ Обновлена конфигурация `nuxt.config.ts`
2. ✅ Исправлен GitHub Actions workflow
3. ✅ Добавлены правильные настройки для production сборки

## Шаги для публикации на GitHub Pages:

### 1. Создание репозитория на GitHub
1. Перейдите на [GitHub](https://github.com)
2. Нажмите "New repository"
3. Назовите репозиторий `my`
4. Сделайте его публичным
5. НЕ инициализируйте с README, .gitignore или лицензией

### 2. Настройка аутентификации
Если у вас еще нет токена доступа:
1. Перейдите в Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Нажмите "Generate new token"
3. Выберите scope `repo` (полный доступ к репозиториям)
4. Скопируйте токен

### 3. Настройка Git с токеном
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/ZMRDCZ/my.git
```

### 4. Пуш изменений
```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push -u origin main
```

### 5. Настройка GitHub Pages
1. Перейдите в Settings репозитория
2. Прокрутите до раздела "Pages"
3. В "Source" выберите "GitHub Actions"
4. GitHub Actions автоматически настроен через файл `.github/workflows/deploy.yml`

### 6. Проверка деплоя
После пуша в main ветку:
1. Перейдите в Actions вкладку репозитория
2. Дождитесь завершения workflow "Deploy to GitHub Pages"
3. Ваш сайт будет доступен по адресу: `https://zmrdcz.github.io/my/`

## Структура проекта для GitHub Pages

Проект настроен для GitHub Pages:
- ✅ Base URL: `/my/` (в production)
- ✅ Static generation (SSG)
- ✅ GitHub Actions workflow
- ✅ Правильная конфигурация Nuxt
- ✅ Исправлены пути к assets

## Локальная разработка

Для локальной разработки используйте:
```bash
npm run dev
```

Для сборки статического сайта:
```bash
npm run generate
```

Для ручного деплоя:
```bash
npm run deploy:manual
```

## Исправления в конфигурации

### nuxt.config.ts
- ✅ Динамический `baseURL` для production/development
- ✅ Правильный `buildAssetsDir`
- ✅ Отключен `payloadExtraction` для лучшей совместимости

### GitHub Actions (.github/workflows/deploy.yml)
- ✅ Установлен `NODE_ENV=production` для сборки
- ✅ Добавлен `.nojekyll` файл
- ✅ Правильная конфигурация для gh-pages

## Возможные проблемы

### Ошибка 403 (Permission denied)
- Убедитесь, что репозиторий создан
- Проверьте права доступа
- Используйте токен доступа

### Сайт не отображается
- Проверьте Actions вкладку
- Убедитесь, что workflow завершился успешно
- Проверьте настройки Pages в Settings

### Проблемы с роутингом
- Убедитесь, что `baseURL: '/my/'` установлен в `nuxt.config.ts`
- Проверьте, что `ssr: false` и `target: 'static'` установлены

### Ошибки 404 для assets
- ✅ Исправлено в обновленной конфигурации
- Убедитесь, что используется последняя версия конфигурации
- Проверьте, что `.nojekyll` файл создается при деплое 