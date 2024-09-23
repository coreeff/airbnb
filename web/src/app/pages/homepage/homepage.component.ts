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
