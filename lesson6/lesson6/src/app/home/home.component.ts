import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>Welcome to the Home Page!</h2>`,
  styles: [`
    h2 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
  `]
})
export class HomeComponent {}