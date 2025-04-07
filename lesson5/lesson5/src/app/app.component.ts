import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h1>Angular Routing (Lesson 7)</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/form">Form</a>
      <a routerLink="/users">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    nav {
      text-align: center;
      margin: 20px 0;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #007bff;
      font-size: 18px;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}