import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  todoId: number;
  id: number;
  beforeEditCache: string;
  filter: string;

  constructor() { }

  ngOnInit() {
    this.beforeEditCache = '';
    this.todoId = 4;
    this.todoTitle = '';
    this.filter = '';
    this.todos = [
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
    ]
  }
addTodo(): void {
  if(this.todoTitle.trim().length === 0) {
    return;
  }
  this.todos.push({
    id: this.todoId,
    title: this.todoTitle,
    completed: false,
    editing: false
  })
  this.todoId++;
  this.todoTitle= '';
}

deleteTodo(id: number): void {
  this.todos = this.todos.filter(todo => todo.id !== id)
}

editingTodo(todo: Todo): void {
  this.beforeEditCache = todo.title;
  todo.editing = true;
}

doneEdit(todo: Todo): void {
  if(todo.title.trim().length === 0) {
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
  if(this.filter === 'all') {
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

