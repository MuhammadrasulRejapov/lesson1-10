import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson2-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lesson 2: Angular CLI va loyiha tuzilmasi</h2>
    <p>Loyiha tuzilmasini tushunish va CLI buyruqlarini sinash.</p>
    <button (click)="generateComponent()">Yangi Component Yaratish</button>
    <button (click)="generateService()">Yangi Service Yaratish</button>
    <button (click)="generateModule()">Yangi Module Yaratish</button>
    <button (click)="buildApp()">Loyihani Build Qilish</button>
    <button (click)="runTests()">Testlarni Ishga Tushirish</button>
    <p *ngIf="message">{{ message }}</p>
  `,
  styles: [`
    h2 {
      color: #007bff;
      font-family: Arial, sans-serif;
    }
    p {
      font-size: 16px;
      color: #333;
    }
    button {
      margin: 10px 5px;
      padding: 10px 20px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #218838;
    }
  `]
})
export class Lesson2ContentComponent {
  message = '';

  generateComponent() {
    this.message = 'Yangi component yaratish uchun terminalda: ng g c new-component';
  }

  generateService() {
    this.message = 'Yangi service yaratish uchun terminalda: ng g s new-service';
  }

  generateModule() {
    this.message = 'Yangi module yaratish uchun terminalda: ng g m new-module';
  }

  buildApp() {
    this.message = 'Loyihani build qilish uchun terminalda: ng build --prod';
  }

  runTests() {
    this.message = 'Unit testlarni ishga tushirish uchun: ng test \nEnd-to-end testlar uchun: ng e2e';
  }
}