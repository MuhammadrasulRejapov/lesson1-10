import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h2>Tasks Page</h2>
    <ul>
      @for (task of tasks; track task.id) {
        <li>{{ task.title }} <a [routerLink]="['/task', task.id]">Details</a></li>
      }
    </ul>
  `,
  styles: [`
    h2 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    ul {
      list-style: none;
      padding: 0;
      text-align: center;
    }
    li {
      margin: 10px 0;
    }
    a {
      color: #007bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getTasks().subscribe(data => {
      this.tasks = data.slice(0, 10); // Faqat 10 ta task ko‘rsatamiz
    });
  }
}