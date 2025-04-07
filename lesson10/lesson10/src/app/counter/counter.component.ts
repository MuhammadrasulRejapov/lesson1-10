import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="card mb-4">
      <div class="card-body text-center">
        <h3>Counter (Signals)</h3>
        <p>Count: {{ count() }}</p>
        <button class="btn btn-primary" (click)="increment()">Increment</button>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(`The count is now ${this.count()}`);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}