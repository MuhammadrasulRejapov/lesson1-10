import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mb-4">
      <div class="card-header">
        <h3>Todo List</h3>
      </div>
      <ul class="list-group list-group-flush">
        @for (todo of todos; track $index) {
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {{ todo }}
            <button class="btn btn-danger btn-sm" (click)="removeTodo($index)">Remove</button>
          </li>
        }
      </ul>
    </div>
  `,
  styles: []
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.getTodos();

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}