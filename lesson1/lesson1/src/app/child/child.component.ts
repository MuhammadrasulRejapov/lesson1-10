import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>{{ message }}</p>
    <button class="btn btn-primary" (click)="sendEvent()">Send Event</button>
  `,
  styles: []
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter<string>();

  sendEvent() {
    this.notify.emit('Event from Child!');
  }
}