import { Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/my-component', pathMatch: 'full' },
  { path: 'my-component', component: MyComponentComponent }
];