import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-3">
      <h1 class="text-center">Task App</h1>
      <!-- Navigatsiya qismi olib tashlandi -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}