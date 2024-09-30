import { Component } from '@angular/core';
import { NormalCardComponent } from '../../shared/components/cards/normal-card/normal-card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { NavigationLinksComponent } from '../../shared/components/navigation-links/navigation-links.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

import {
  LikeRoomsService,
  LikedRoomT,
} from '@/app/services/like-rooms.service';

@Component({
  selector: 'app-liked-rooms',
  standalone: true,
  imports: [
    NormalCardComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    NavigationLinksComponent,
  ],
  templateUrl: './liked-rooms.component.html',
  styles: ``,
})
export class LikedRoomsComponent {
  constructor(private likedRoomService: LikeRoomsService) {}

  tab_id: string | null = null;
  likedRooms: LikedRoomT[] = [];

  ngOnInit(): void {
    this.likedRoomService.likedRooms().subscribe((items) => {
      this.likedRooms = items;
    });
  }
}
