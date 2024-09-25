import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
      img: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png',
    },
    {
      label: 'Trending',
      tab_id: 'trending',
      icon: 'fa-solid fa-fire',
      img: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
    },
    {
      label: 'Top cities',
      tab_id: 'top-cities',
      icon: 'fa-solid fa-city',
      img: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
    },
    {
      label: 'Arctic',
      tab_id: 'arctic',
      icon: 'fa-solid fa-snowflake',
      img: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
    },
    {
      label: 'National parks',
      tab_id: 'national-parks',
      icon: 'fa-solid fa-tree',
      img: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
    },
    {
      label: 'Cabins',
      tab_id: 'cabins',
      icon: 'fa-solid fa-house-chimney',
      img: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
    },
    {
      label: 'Rooms',
      tab_id: 'rooms',
      icon: 'fa-solid fa-bed',
      img: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg',
    },
    {
      label: 'Bed & breakfasts',
      tab_id: 'bed-breakfasts',
      icon: 'fa-solid fa-bacon',
      img: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg',
    },
    {
      label: 'Camping',
      tab_id: 'camping',
      icon: 'fa-solid fa-campground',
      img: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
    },
    {
      label: 'Golfing',
      tab_id: 'golfing',
      icon: 'fa-solid fa-golf-ball-tee',
      img: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
    },
    {
      label: 'Mansions',
      tab_id: 'mansions',
      icon: 'fa-solid fa-landmark',
      img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
    },
    {
      label: 'Earth homes',
      tab_id: 'earth-homes',
      icon: 'fa-solid fa-leaf',
      img: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
    },
    {
      label: 'Farms',
      tab_id: 'farms',
      icon: 'fa-solid fa-tractor',
      img: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
    },
    {
      label: 'Tiny homes',
      tab_id: 'tiny-homes',
      icon: 'fa-solid fa-house',
      img: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
    },
    {
      label: 'Icons',
      tab_id: 'icons',
      icon: 'fa-solid fa-ticket',
      img: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
    },
    {
      label: 'Trending',
      tab_id: 'trending',
      icon: 'fa-solid fa-fire',
      img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
    },
    {
      label: 'Top cities',
      tab_id: 'top-cities',
      icon: 'fa-solid fa-city',
      img: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
    },
  ];
}
