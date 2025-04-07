import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2 class="text-center mb-4">Tasks</h2>

      <!-- Add Task Form -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="input-group">
            <input
              [(ngModel)]="newTask"
              (keyup.enter)="addTask()"
              class="form-control"
              placeholder="Add a new task"
            />
            <button (click)="addTask()" class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>

      <!-- Tasks List -->
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">Tasks List</h4>
        </div>
        <ul class="list-group list-group-flush">
          @for (task of tasks$ | async; track task.id) {
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ task.title }} (Completed: {{ task.completed ? 'Yes' : 'No' }})</span>
              <div>
                <button (click)="editTask(task)" class="btn btn-sm btn-warning me-2">Edit</button>
                <button (click)="deleteTask(task.id)" class="btn btn-sm btn-danger">Delete</button>
              </div>
            </li>
          }
        </ul>
      </div>

      <!-- Edit Task Modal (Hidden by default) -->
      @if (isEditing) {
        <div class="modal d-block" style="background-color: rgba(0,0,0,0.5);">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Task</h5>
                <button (click)="cancelEdit()" class="btn-close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="editTaskTitle" class="form-label">Task Title</label>
                  <input
                    [(ngModel)]="editingTask.title"
                    id="editTaskTitle"
                    class="form-control"
                    placeholder="Enter task title"
                  />
                </div>
                <div class="form-check">
                  <input
                    [(ngModel)]="editingTask.completed"
                    type="checkbox"
                    class="form-check-input"
                    id="editTaskCompleted"
                  />
                  <label class="form-check-label" for="editTaskCompleted">Completed</label>
                </div>
              </div>
              <div class="modal-footer">
                <button (click)="cancelEdit()" class="btn btn-secondary">Cancel</button>
                <button (click)="updateTask()" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1050;
    }
  `]
})
export class TaskComponent {
  tasks$: Observable<any[]>;
  newTask: string = '';
  isEditing: boolean = false;
  editingTask: any = {};

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      const task = { title: this.newTask, completed: false };
      this.taskService.addTask(task).subscribe({
        next: () => {
          this.tasks$ = this.taskService.getTasks(); // Ro‘yxatni yangilash
          this.newTask = ''; // Inputni tozalash
        },
        error: (err) => console.error('Error adding task:', err)
      });
    }
  }

  editTask(task: any) {
    this.isEditing = true;
    this.editingTask = { ...task };
  }

  updateTask() {
    this.taskService.updateTask(this.editingTask.id, this.editingTask).subscribe({
      next: () => {
        this.tasks$ = this.taskService.getTasks(); // Ro‘yxatni yangilash
        this.isEditing = false;
      },
      error: (err) => console.error('Error updating task:', err)
    });
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingTask = {};
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks$ = this.taskService.getTasks(); // Ro‘yxatni yangilash
      },
      error: (err) => console.error('Error deleting task:', err)
    });
  }
}