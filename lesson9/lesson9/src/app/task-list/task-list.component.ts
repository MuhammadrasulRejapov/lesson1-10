import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  template: `
    <div class="container mt-4">
      <h2 class="text-center mb-4">Task List</h2>

      <!-- Toggle tugmasi -->
      <div class="mb-4 text-center">
        <button class="btn btn-primary" (click)="toggle()">Show/Hide</button>
      </div>

      <!-- Tasklar ro‘yxati -->
      @if (visible) {
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">Tasks</h4>
          </div>
          <ul class="list-group list-group-flush">
            @for (task of tasks; track task) {
              <li class="list-group-item" appHighlight [ngClass]="{'bold': isBold}" [ngStyle]="{'color': taskColor}">
                {{ task }}
              </li>
            }
          </ul>
        </div>
      } @else {
        <div class="alert alert-info text-center">
          Tasklar yashirilgan
        </div>
      }
    </div>
  `,
  styles: [
    `
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class TaskListComponent {
  tasks = ['Learn Directives', 'Build App'];
  visible = false;
  isBold = true;
  taskColor = 'blue';

  toggle() {
    this.visible = !this.visible;
  }
}