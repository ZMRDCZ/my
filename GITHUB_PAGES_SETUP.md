# Настройка GitHub Pages для портфолио

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

Проект уже настроен для GitHub Pages:
- ✅ Base URL: `/my/`
- ✅ Static generation (SSG)
- ✅ GitHub Actions workflow
- ✅ Правильная конфигурация Nuxt

## Локальная разработка

Для локальной разработки используйте:
```bash
npm run dev
```

Для сборки статического сайта:
```bash
npm run generate
```

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