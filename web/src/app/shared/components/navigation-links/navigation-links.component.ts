import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navigation-links',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation-links.component.html',
})
export class NavigationLinksComponent {
  @Input() queryParam: string | null = null;

  NAVIGATION_DATA = [
    {
      label: 'Icons',
      tab_id: 'icons',
      icon: 'fa-solid fa-ticket',
    },
    {
      label: 'Trending',
      tab_id: 'trending',
      icon: 'fa-solid fa-fire',
    },
    {
      label: 'Top cities',
      tab_id: 'top-cities',
      icon: 'fa-solid fa-city',
    },
    {
      label: 'Arctic',
      tab_id: 'arctic',
      icon: 'fa-solid fa-snowflake',
    },
    {
      label: 'National parks',
      tab_id: 'national-parks',
      icon: 'fa-solid fa-tree',
    },
    {
      label: 'Cabins',
      tab_id: 'cabins',
      icon: 'fa-solid fa-house-chimney',
    },
    {
      label: 'Rooms',
      tab_id: 'rooms',
      icon: 'fa-solid fa-bed',
    },
    {
      label: 'Bed & breakfasts',
      tab_id: 'bed-breakfasts',
      icon: 'fa-solid fa-bacon',
    },
    {
      label: 'Camping',
      tab_id: 'camping',
      icon: 'fa-solid fa-campground',
    },
    {
      label: 'Golfing',
      tab_id: 'golfing',
      icon: 'fa-solid fa-golf-ball-tee',
    },
    {
      label: 'Mansions',
      tab_id: 'mansions',
      icon: 'fa-solid fa-landmark',
    },
    {
      label: 'Earth homes',
      tab_id: 'earth-homes',
      icon: 'fa-solid fa-leaf',
    },
    {
      label: 'Farms',
      tab_id: 'farms',
      icon: 'fa-solid fa-tractor',
    },
    {
      label: 'Tiny homes',
      tab_id: 'tiny-homes',
      icon: 'fa-solid fa-house',
    },
    {
      label: 'Icons',
      tab_id: 'icons',
      icon: 'fa-solid fa-ticket',
    },
    {
      label: 'Trending',
      tab_id: 'trending',
      icon: 'fa-solid fa-fire',
    },
    {
      label: 'Top cities',
      tab_id: 'top-cities',
      icon: 'fa-solid fa-city',
    },
  ];
}
