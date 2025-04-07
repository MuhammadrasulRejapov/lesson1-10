import { Component } from '@angular/core';
import { Lesson2ContentComponent } from './lesson2-content/lesson2-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lesson2ContentComponent, CommonModule],
  template: `
    <h1>Welcome to Lesson 2</h1>
    <div class="container">
      <app-lesson2-content></app-lesson2-content>
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class AppComponent {
  title = 'lesson2'; 
}