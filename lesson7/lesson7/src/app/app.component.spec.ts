import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-3">
      <h1 class="text-center">Task App</h1>
      <nav class="nav justify-content-center mb-4">
        <a class="nav-link btn btn-outline-primary" routerLink="/tasks">Tasks</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}