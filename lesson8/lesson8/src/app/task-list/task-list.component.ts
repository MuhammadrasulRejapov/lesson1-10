import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTasksPipe } from '../filter-tasks.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterTasksPipe],
  template: `
    <div class="container mt-4">
      <h2 class="text-center mb-4">Task List</h2>

      <!-- Filtrlash uchun input -->
      <div class="mb-4">
        <input
          [(ngModel)]="query"
          class="form-control"
          placeholder="Filter tasks"
        />
      </div>

      <!-- Tasklar ro‘yxati -->
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Tasks</h4>
        </div>
        <ul class="list-group list-group-flush">
          @for (task of tasks | filterTasks:query; track task) {
            <li class="list-group-item">
              {{ task | uppercase }} - Due: {{ dueDate | date:'shortDate' | uppercase }}
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class TaskListComponent {
  tasks = ['Learn Angular', 'Build App', 'Test Pipe'];
  query = '';
  dueDate = new Date('2025-03-01');
}