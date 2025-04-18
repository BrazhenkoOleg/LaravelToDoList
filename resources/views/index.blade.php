<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    <title>Список задач</title>
</head>
<body>
<div class="container">
    <h1>Список задач</h1>
    <form id="add-task">
        @csrf
        <input type="text" name="title" id="new-title" placeholder="Новая задача..." required>
        <button type="submit">Добавить</button>
    </form>
    <input type="text" name="search" id="search" placeholder="Поиск по названию..." value="{{ request('search') }}" />
    <div id="task-wrapper">
        @include('todo.tasks', ['tasks' => $tasks])
    </div>
</div>
<script src="{{ asset('js/script.js') }}"></script>
</body>
</html>