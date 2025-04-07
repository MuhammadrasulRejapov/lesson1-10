import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  template: `
    <div class="card mb-4">
      <div class="card-body">
        <h3>Add Todo</h3>
        <div class="input-group">
          <input
            #todoInput
            class="form-control"
            placeholder="Enter a new todo"
            (keyup.enter)="addTodo(todoInput.value); todoInput.value=''"
          />
          <button class="btn btn-primary" (click)="addTodo(todoInput.value); todoInput.value=''">Add</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TodoInputComponent {
  private todoService = inject(TodoService);

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todoService.addTodo(todo.trim());
    }
  }
}