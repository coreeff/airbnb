import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-footer-navigation',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './footer-navigation.component.html',
})
export class FooterNavigationComponent {
  selectedIndex: number = 0;

  NAVIGATION_ITEMS = [
    {
      label: 'Popular',
      items: [
        {
          label: 'Canmore',
          description: 'Pet-friendly rentals',
          url: '#',
        },
        {
          label: 'Benalmádena',
          description: 'Apartment rentals',
          url: '#',
        },
        {
          label: 'Marbella',
          description: 'Beachfront rentals',
          url: '#',
        },
        {
          label: 'Mijas',
          description: 'House rentals',
          url: '#',
        },
        {
          label: 'Prescott',
          description: 'Pet-friendly rentals',
          url: '#',
        },
        {
          label: 'Scottsdale',
          description: 'Apartment rentals',
          url: '#',
        },
        {
          label: 'Tucson',
          description: 'Rentals with pools',
          url: '#',
        },
        {
          label: 'Jasper',
          description: 'Cabin rentals',
          url: '#',
        },
        {
          label: 'Mountain View',
          description: 'Family-friendly rentals',
          url: '#',
        },
        {
          label: 'Devonport',
          description: 'Cottage rentals',
          url: '#',
        },
        {
          label: 'Mallacoota',
          description: 'Pet-friendly rentals',
          url: '#',
        },
        {
          label: 'Ibiza',
          description: 'Vacation rentals',
          url: '#',
        },
        {
          label: 'Anaheim',
          description: 'Condo rentals',
          url: '#',
        },
        {
          label: 'Monterey',
          description: 'House rentals',
          url: '#',
        },
        {
          label: 'Paso Robles',
          description: 'Cottage rentals',
          url: '#',
        },
        {
          label: 'Santa Barbara',
          description: 'Beachfront rentals',
          url: '#',
        },
        {
          label: 'Sonoma',
          description: 'Cabin rentals',
          url: '#',
        },
      ],
    },
    {
      label: 'Art & Culture',
      items: [
        {
          label: 'Phoenix',
          description: 'Rentals with pools',
          url: '#',
        },
        {
          label: 'Paris',
          description: 'Art-inspired rentals',
          url: '#',
        },
      ],
    },
    {
      label: 'Outdoors',
      items: [
        {
          label: 'Boulder',
          description: 'Mountain view rentals',
          url: '#',
        },
        {
          label: 'Asheville',
          description: 'Forest retreats',
          url: '#',
        },
      ],
    },
    {
      label: 'Mountains',
      items: [
        {
          label: 'Whistler',
          description: 'Ski lodges',
          url: '#',
        },
        {
          label: 'Aspen',
          description: 'Chalets',
          url: '#',
        },
      ],
    },
    {
      label: 'Beach',
      items: [
        {
          label: 'Maui',
          description: 'Oceanfront rentals',
          url: '#',
        },
        {
          label: 'Malibu',
          description: 'Beach houses',
          url: '#',
        },
      ],
    },
    {
      label: 'Unique Stays',
      items: [
        {
          label: 'Treehouses',
          description: 'Stay in a treehouse',
          url: '#',
        },
        {
          label: 'Yurts',
          description: 'Rent a yurt',
          url: '#',
        },
      ],
    },
    {
      label: 'Categories',
      items: [
        {
          label: 'Pet-friendly',
          description: 'Rentals for you and your pets',
          url: '#',
        },
        {
          label: 'Luxury',
          description: 'High-end properties',
          url: '#',
        },
      ],
    },
    {
      label: 'Things to Do',
      items: [
        {
          label: 'Hiking',
          description: 'Nearby hiking trails',
          url: '#',
        },
        {
          label: 'Museums',
          description: 'Visit local museums',
          url: '#',
        },
      ],
    },
  ];
}
