import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Tasks (Numbered List)</h2>
    <ol>
      @for (task of tasks; track task; let i = $index) {
        <li>{{ i + 1 }}. {{ task }}</li>
      }
    </ol>
  `,
  styles: [`
    h2 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    ol {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 20px;
      text-align: left;
    }
    li {
      font-size: 16px;
      color: #555;
      margin: 10px 0;
      padding: 5px;
    }
  `]
})
export class TaskDisplayComponent implements OnInit {
  tasks: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}