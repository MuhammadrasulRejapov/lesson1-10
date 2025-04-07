import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Writing Templates -->
    <h1>Hello, Angular! Welcome to Lesson 3</h1>

    <div class="container">
      <!-- One-Way Data Binding: Interpolation -->
      <h2>Welcome, {{ name }}!</h2>

      <!-- One-Way Data Binding: Property Binding -->
      <img [src]="imageUrl" alt="Example Image">

      <!-- Event Binding -->
      <button (click)="sayHello()">Click Me</button>

      <!-- Two-Way Data Binding with ngModel -->
      <input [(ngModel)]="name" placeholder="Enter your name">
      <p>You typed: {{ name }}</p>

      <!-- Using Directives: @if -->
      <button (click)="toggle()">Toggle Visibility</button>
      @if (isVisible) {
        <p>I'm visible!</p>
      }

      <!-- Using Directives: @for -->
      <h2>Initial Tasks</h2>
      <ul>
        @for (task of initialTasks; track task) {
          <li>{{ task }}</li>
        }
      </ul>

      <!-- Mini-Project: To-Do List -->
      <h2>My To-Do List</h2>
      <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Add a new task">
      <ul>
        @for (task of tasks; track task) {
          <li>{{ task }}</li>
        }
      </ul>
      @if (tasks.length === 0) {
        <p>No tasks yet!</p>
      }
    </div>
  `,
  styles: [`
    h1, h2 {
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
    img {
      display: block;
      margin: 20px auto;
      max-width: 300px;
    }
    button {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    input {
      display: block;
      margin: 20px auto;
      padding: 10px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    p {
      text-align: center;
      font-size: 16px;
      color: #333;
    }
    ul {
      list-style-type: none;
      padding: 0;
      text-align: center;
    }
    li {
      font-size: 16px;
      color: #555;
      margin: 10px 0;
      padding: 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
    p.no-tasks {
      color: #999;
    }
  `]
})
export class AppComponent {
  // One-Way Data Binding: Interpolation va Property Binding uchun
  name = 'User';
  imageUrl = 'https://media.istockphoto.com/id/627795510/photo/example.jpg?s=612x612&w=0&k=20&c=lpUf5rjPVd6Kl_M6heqC8sUncR4FLmtsRzeYdTr5X_I=';

  // Using Directives: @if uchun
  isVisible = false;

  // Using Directives: @for uchun
  initialTasks = ['Learn Angular', 'Build App', 'Have Fun'];

  // Mini-Project: To-Do List uchun
  tasks: string[] = [];
  newTask = '';

  // Event Binding uchun
  sayHello() {
    alert('Hello, Angular!');
  }

  // Using Directives: @if uchun
  toggle() {
    this.isVisible = !this.isVisible;
  }

  // Mini-Project: To-Do List uchun
  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}