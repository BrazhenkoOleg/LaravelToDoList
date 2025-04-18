<table>
    <thead>
        <tr>
            <th>Выполнено</th>
            <th>Название</th>
            <th>Действие</th>
        </tr>
    </thead>
    <tbody id="todo-table">
        @foreach($tasks as $task)
            <tr data-id="{{ $task->id }}">
                <td class="checkbox-section">
                    <label class="checkbox-label">
                        <input type="checkbox" class="toggle" {{ $task->completed ? 'checked' : '' }}>
                        <span class="custom-checkbox"></span>
                    </label>
                </td>
                <td class="title">{{ $task->title }}</td>
                <td class="action-section">
                    <span class="delete">
                        <i class="material-symbols-outlined">delete</i>
                    </span>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
<div class="pagination">
    {{ $tasks->appends(['search' => request('search')])->links() }}
</div>
