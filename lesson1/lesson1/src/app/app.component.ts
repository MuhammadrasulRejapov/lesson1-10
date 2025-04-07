import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ChildComponent, CardComponent],
  template: `
    <div class="container mt-3">
      <h1 class="text-center">Angular Components Demo</h1>
      <div class="card">
        <div class="card-body">
          <app-card>
            <h3>Projected Content</h3>
            <p>This content is projected into the card!</p>
          </app-card>
          <app-child [message]="'Hello from Parent!'" (notify)="onNotify($event)"></app-child>
          @if (childMessage) {
            <div class="alert alert-success mt-3">
              {{ childMessage }}
            </div>
          }
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  childMessage: string = '';

  onNotify(message: string) {
    console.log(message);
    this.childMessage = message;
  }
}