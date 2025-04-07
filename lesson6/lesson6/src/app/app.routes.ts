import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.component').then(m => m.TasksComponent)
  },
  { path: 'task/:id', component: TaskDetailComponent }
];