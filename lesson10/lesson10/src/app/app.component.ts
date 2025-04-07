import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-3">
      <h1 class="text-center">Todo App</h1>
      <nav class="nav justify-content-center mb-4">
        <a class="nav-link btn btn-outline-primary me-2" routerLink="/todos">Todos</a>
        <a class="nav-link btn btn-outline-primary" routerLink="/counter">Counter</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}