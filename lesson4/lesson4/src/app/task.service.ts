import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];
  private tasksSubject = new BehaviorSubject<string[]>(this.tasks);

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: string): void {
    if (task) {
      this.tasks.push(task);
      this.tasksSubject.next(this.tasks);
    }
  }

  deleteTask(task: string): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.tasksSubject.next(this.tasks);
  }
}