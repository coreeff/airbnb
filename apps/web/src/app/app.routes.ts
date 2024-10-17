import { Routes } from '@angular/router';
import { RoomsComponent } from '@/app/pages/rooms/rooms.component';
import { HomeComponent } from '@/app/pages/homepage/homepage.component';
import { LikedRoomsComponent } from '@/app/pages/liked-rooms/liked-rooms.component';
import { SignupComponent } from './pages/signup/signup.component';

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
  {
    path: 'liked-rooms',
    component: LikedRoomsComponent,
    title: 'Liked rooms',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup page',
  },
];
