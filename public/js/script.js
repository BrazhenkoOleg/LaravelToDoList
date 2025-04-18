const table = document.getElementById('todo-table');
const addForm = document.getElementById('add-task');
const searchInput = document.getElementById('search');
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

addForm.addEventListener('submit', async e => {
    e.preventDefault();
    const title = document.getElementById('new-title').value.trim();
    if (!title) return;

    const res = await fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({ title })
    });

    if (res.status !== 200) {
        alert('Ошибка при добавлении задачи');
        return;
    }

    const task = await res.json();
    const row = document.createElement('tr');
    row.dataset.id = task.id;
    row.innerHTML = ` 
        <td><input type="checkbox" class="toggle"></td>
        <td class="title">${task.title}</td>
        <td><span class="delete"><i class="material-icons">delete</i></span></td>
    `;

    table.prepend(row);
    addListeners(row);
    reloadTasks();
    addForm.reset();
});

function addListeners(row) {
    row.querySelector('.delete').addEventListener('click', async () => {
        const task = row.dataset.id;
        await fetch(`/tasks/${task}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });
        row.remove();
        reloadTasks();
    });

    row.querySelector('.toggle').addEventListener('change', async () => {
        const task = row.dataset.id;
        const res = await fetch(`/tasks/${task}`, {
            method: 'PATCH',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });

        const data = await res.json();
        row.classList.toggle('completed', data.completed);
    });
}

document.querySelectorAll('#todo-table tr').forEach(addListeners);

document.getElementById('search').addEventListener('input', function () {
    const term = this.value;

    fetch(`/?search=${encodeURIComponent(term)}`, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const updateTable = doc.body.innerHTML;
        document.getElementById('task-wrapper').innerHTML = updateTable;
        document.querySelectorAll('#todo-table tr').forEach(addListeners);
    })
    .catch(error => console.error('AJAX Error:', error));
});

function reloadTasks() {
    const term = document.getElementById('search').value;

    fetch(`/?search=${encodeURIComponent(term)}`, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        document.getElementById('task-wrapper').innerHTML = doc.body.innerHTML;

        document.querySelectorAll('#todo-table tr').forEach(addListeners);
    })
    .catch(error => console.error('Reload task list error:', error));
}

