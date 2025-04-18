<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', [TaskController::class, 'index'])->name('index');
Route::post('/tasks', [TaskController::class, 'store'])->name('tasks-add');
Route::patch('/tasks/{task}', [TaskController::class, 'update'])->name('task-check');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('task-remove');