import { Component } from '@angular/core';

import { RoomsType } from '@/app/types';
import { RoomsService } from '@/app/services/rooms.service';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { NormalCardComponent } from '@/app/shared/components/cards/normal-card/normal-card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  imports: [ButtonComponent, NormalCardComponent, HeaderComponent],
})
export class HomeComponent {
  constructor(private getRooms: RoomsService) {}

  rooms: RoomsType = {
    data: [],
    meta: {
      pagination: {
        page: 1,
        total: 1,
        pageCount: 1,
        pageSize: 25,
      },
    },
  };

  ngOnInit(): void {
    this.getRooms
      .getRooms(`http://localhost:1337/api/rooms`)
      .subscribe((products) => {
        this.rooms = products;
      });
  }
}
