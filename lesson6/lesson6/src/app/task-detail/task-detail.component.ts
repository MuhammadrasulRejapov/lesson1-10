import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  template: `
    <h2>Task Detail</h2>
    @if (task) {
      <p>Task ID: {{ task.id }}</p>
      <p>Task Title: {{ task.title }}</p>
      <p>Completed: {{ task.completed }}</p>
    } @else {
      <p>Loading task details...</p>
    }
  `,
  styles: [`
    h2, p {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
  `]
})
export class TaskDetailComponent {
  task: any;

  constructor(route: ActivatedRoute, private userService: UserService) {
    const id = route.snapshot.paramMap.get('id');
    const taskId = id ? +id : 0;
    this.userService.getTasks().subscribe(data => {
      this.task = data.find((t: any) => t.id === taskId) || { id: taskId, title: 'Task Not Found', completed: false };
    });
  }
}