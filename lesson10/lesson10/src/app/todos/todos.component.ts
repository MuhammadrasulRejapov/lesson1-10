import { Component } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  template: `
    <app-todo-input></app-todo-input>
    <app-todo-list></app-todo-list>
  `,
  styles: []
})
export class TodosComponent {}