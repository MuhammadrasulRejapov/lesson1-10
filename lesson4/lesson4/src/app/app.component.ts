import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskDisplayComponent } from './task-display/task-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskDisplayComponent],
  template: `
    <h1>Task Manager (Lesson 4)</h1>
    <div class="container">
      <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Add a new task">
      <ul>
        @for (task of tasks; track task) {
          <li>
            {{ task }}
            <button class="delete-btn" (click)="deleteTask(task)">Delete</button>
          </li>
        }
      </ul>
      @if (tasks.length === 0) {
        <p>No tasks yet!</p>
      }
      <app-task-display></app-task-display>
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input {
      display: block;
      margin: 20px auto;
      padding: 10px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      text-align: center;
    }
    li {
      font-size: 16px;
      color: #555;
      margin: 10px 0;
      padding: 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .delete-btn {
      padding: 5px 10px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .delete-btn:hover {
      background-color: #c82333;
    }
    p {
      text-align: center;
      font-size: 16px;
      color: #999;
    }
  `]
})
export class AppComponent {
  tasks: string[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(task: string) {
    this.taskService.deleteTask(task);
  }
}