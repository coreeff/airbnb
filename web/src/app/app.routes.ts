import { Routes } from '@angular/router';
import { RoomsComponent } from '@/app/pages/rooms/rooms.component';
import { HomeComponent } from '@/app/pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Airbnb | Vacation rentals',
  },
  {
    path: 'rooms/:id',
    component: RoomsComponent,
    title: 'Room Component',
  },
];
