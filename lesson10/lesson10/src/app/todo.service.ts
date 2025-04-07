import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: string[] = [];

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}