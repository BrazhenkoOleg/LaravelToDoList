# 📝 Список задач на Laravel

Простое приложение для постановки и контроля ваших задач или дел (ToDo List), разработанное с использованием фреймворка **Laravel**.

## 📦 Возможности

- Добавление и удаление задач
- Поиск по названию задачи
- Динамическая пагинация
- Возможность отмечать выполненные задачи
- Адаптивный интерфейс

---

## 🚀 Быстрый старт

### 🔧 Требования

Перед запуском убедитесь, что установлены:

- PHP ≥ 8.1
- Composer
- MySQL или другой драйвер базы данных
- Node.js и npm (для сборки frontend'а)

---

### 1. 📥 Клонировать репозиторий

```bash
https://github.com/BrazhenkoOleg/LaravelToDoList.git
cd LaravelToDoList
```

---

### 2. 🛠 Установить зависимости

#### PHP-зависимости

```bash
composer install
```

#### Node.js-зависимости (для сборки стилей/JS)

```bash
npm install
```

---

### 3. ⚙️ Настроить переменные окружения
Откройте `.env` или добавьте свой и укажите данные вашей базы данных:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

---

### 4. 🗃 Создать таблицы в базе данных

> Убедитесь, что база данных указана в `.env`

```bash
php artisan migrate
```

---

### 5. 🎨 Скомпилировать фронтенд

Для production:

```bash
npm run build
```

Для разработки:

```bash
npm run dev
```

---

### 6. ▶️ Запустить сервер

```bash
php artisan serve
```

Откройте в браузере: [http://localhost:8000](http://localhost:8000)

---