import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'counter', component: CounterComponent }
];