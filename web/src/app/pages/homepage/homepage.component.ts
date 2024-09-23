import { Component } from '@angular/core';

import { RoomsType } from '@/app/types';
import { RoomsService } from '@/app/services/rooms.service';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { NormalCardComponent } from '@/app/shared/components/cards/normal-card/normal-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, NormalCardComponent, HeaderComponent],
  templateUrl: './homepage.component.html',
})
export class HomeComponent {
  CARD_DATA = [
    {
      location: 'Uclee, Belgium',
      price: 120,
      rating: 4.5,
      image_url:
        'https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/93eebed7-db1d-4029-9f6e-1fb8ad1d45d4.jpeg?ml=true&im_w=720',
      date_from: 'May 15',
      date_to: 'Dec 12',
    },
    {
      location: 'Santa Cruz de Tenerife, Spain',
      price: 120,
      rating: 4.5,
      image_url:
        'https://a0.muscache.com/im/pictures/miso/Hosting-30931885/original/6e6b084c-c60f-4470-a5a1-052eaf784ffb.jpeg?im_w=1200',
      date_from: 'May 15',
      date_to: 'Dec 12',
    },
    {
      location: 'Lynoo, France',
      price: 120,
      rating: 4.5,
      image_url:
        'https://a0.muscache.com/im/pictures/airflow/Hosting-20351538/original/a37e8b2a-1910-49ad-a556-e55e8ef6b920.jpg?im_w=1200',
      date_from: 'May 15',
      date_to: 'Dec 12',
    },
  ];

  constructor(private getRooms: RoomsService) {}

  rooms!: RoomsType;

  ngOnInit(): void {
    this.getRooms
      .getRooms(`http://localhost:1337/api/rooms`)
      .subscribe((products) => {
        this.rooms = products;
      });
  }
}
