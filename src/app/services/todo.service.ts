import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoTitle: string = '';
  todoId: number = 4;
  beforeEditCache: string = '';
  filter: string = 'all';
  todos: Todo[] = [
    {
      'id': 1,
      'title': 'Learn Angular',
      'completed': false,
      'editing': false
    },
    {
      'id': 2,
      'title': 'Land first job',
      'completed': false,
      'editing': false
    },
    {
      'id': 3,
      'title': 'Calm soul',
      'completed': false,
      'editing': false
    }
  ];

  constructor() { }

  addTodo(todoTitle: string): void {
    if (todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.todoId,
      title: todoTitle,
      completed: false,
      editing: false
    })
    this.todoId++;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  editingTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  completedTodo(todo: Todo): void {
    todo.completed = true;
  }

  itemLeftCounter(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  checkAll(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked)
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  filteredItems(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    }
    else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    }
    else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

}
