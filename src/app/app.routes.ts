import { Routes } from '@angular/router';
import { HomeComponent } from '@/app/pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Homepage',
  },
];
