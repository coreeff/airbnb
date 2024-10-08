import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  LikeRoomsService,
  LikedRoomT,
} from '@/app/services/like-rooms.service';
import { RoomsType } from '@/app/types';
import { environment } from '@/environments/environment';
import { RoomsService } from '@/app/services/rooms.service';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { FooterComponent } from '@/app/shared/components/footer/footer.component';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { DropdownComponent } from '@/app/shared/components/dropdown/dropdown.component';
import { NormalCardComponent } from '@/app/shared/components/cards/normal-card/normal-card.component';
import { NavigationLinksComponent } from '@/app/shared/components/navigation-links/navigation-links.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    DropdownComponent,
    NormalCardComponent,
    NavigationLinksComponent,
  ],
  templateUrl: './homepage.component.html',
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private getRooms: RoomsService,
    private likedRoomService: LikeRoomsService
  ) {}

  tab_id: string | null = null;
  likedRooms: LikedRoomT[] = [];
  private apiUrl = environment.API_URL;

  rooms: RoomsType = {
    data: [],
    meta: {
      hasNextPage: false,
      hasPreviousPage: false,
      itemCount: 0,
      pageCount: 0,
    },
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.tab_id = params['tab_id'];

      this.getRooms.getRooms(`${this.apiUrl}/listing`).subscribe((rooms) => {
        this.rooms = rooms;

        console.log(this.rooms);
      });

      this.likedRoomService.likedRooms().subscribe((items) => {
        this.likedRooms = items;
      });
    });
  }
}

/*
`${this.apiUrl}/rooms?populate=*&filters[category][name][$eq]=${
            this.tab_id ?? 'trending'
          }`

*/
