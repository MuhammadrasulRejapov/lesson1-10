import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Add a New Task</h2>
    <input [(ngModel)]="taskInput" (keyup.enter)="add()" placeholder="Enter a new task">
  `,
  styles: [`
    h2 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    input {
      display: block;
      margin: 20px auto;
      padding: 10px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `]
})
export class TaskAddComponent {
  taskInput = '';

  constructor(private taskService: TaskService) {}

  add() {
    this.taskService.addTask(this.taskInput);
    this.taskInput = '';
  }
}