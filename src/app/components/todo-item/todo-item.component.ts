import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() checkedItem= new EventEmitter;
  @Output() editingItem = new EventEmitter;
  @Output() cancelEditItem = new EventEmitter;
  @Output() deletedItem = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  editingTodo(todo: Todo): void {
    this.editingItem.emit(todo)
  }

  doneEdit(todo: Todo): void {
    this.checkedItem.emit(todo);
  }

  cancelEdit(todo: Todo): void {
    this.cancelEditItem.emit(todo);
  }

  deleteTodo(id: number): void {
    this.deletedItem.emit(id);
  }



}
