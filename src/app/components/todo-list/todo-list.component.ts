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

  constructor() { }

  ngOnInit() {
    this.todoId = 4;
    this.todoTitle = '';
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
  todo.editing = true
}

doneEdit(todo: Todo): void {
  todo.editing = false
}
}

