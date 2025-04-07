import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent }
];