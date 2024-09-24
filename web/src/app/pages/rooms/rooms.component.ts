import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomsService } from '@/app/services/rooms.service';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  imports: [HeaderComponent, ButtonComponent, CommonModule],
})
export class RoomsComponent {
  roomId: string | null = null;

  constructor(private route: ActivatedRoute, private getRooms: RoomsService) {}

  OFFERS = [
    {
      icon: 'fa-solid fa-water', // Canal view icon
      alt: 'Canal view',
    },
    {
      icon: 'fa-solid fa-water', // Waterfront icon
      alt: 'Waterfront',
    },
    {
      icon: 'fa-solid fa-briefcase', // Dedicated workspace icon
      alt: 'Dedicated workspace',
    },
    {
      icon: 'fa-solid fa-bath', // Bathtub icon
      alt: 'Bathtub',
    },
    {
      icon: 'fa-solid fa-fire', // Indoor fireplace icon
      alt: 'Indoor fireplace',
    },
    {
      icon: 'fa-solid fa-city', // City skyline view icon
      alt: 'City skyline view',
    },
    {
      icon: 'fa-solid fa-wifi', // Wifi icon
      alt: 'Wifi',
    },
    {
      icon: 'fa-solid fa-elevator', // Elevator icon
      alt: 'Elevator',
    },
    {
      icon: 'fa-solid fa-door-open', // Private patio or balcony icon
      alt: 'Private patio or balcony',
    },
    {
      icon: 'fa-solid fa-video', // Security cameras icon
      alt: 'Exterior security cameras on property',
    },
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
    });
  }
}
