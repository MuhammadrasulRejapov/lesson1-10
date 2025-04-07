import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponentComponent implements OnInit, OnDestroy {
  title = 'Hello from MyComponent!';
  message: string = '';
  isVisible = true;
  name = '';
  items = ['Item 1', 'Item 2', 'Item 3'];
  isActive = true;

  ngOnInit() {
    this.message = 'Component Initialized!';
    console.log('MyComponent Initialized!');
  }

  ngOnDestroy() {
    console.log('MyComponent Destroyed!');
  }

  onClick() {
    this.isVisible = !this.isVisible;
  }
}