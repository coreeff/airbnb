import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Homepage',
  },
];
