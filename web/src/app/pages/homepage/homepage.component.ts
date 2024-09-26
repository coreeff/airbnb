import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomsType } from '@/app/types';
import { RoomsService } from '@/app/services/rooms.service';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { FooterComponent } from '@/app/shared/components/footer/footer.component';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { DropdownComponent } from '@/app/shared/components/dropdown/dropdown.component';
import { NormalCardComponent } from '@/app/shared/components/cards/normal-card/normal-card.component';
import { NavigationLinksComponent } from '@/app/shared/components/navigation-links/navigation-links.component';
import {
  LikeRoomsService,
  LinkedRoomT,
} from '@/app/services/like-rooms.service';
import { environment } from '@/environments/environment';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    NormalCardComponent,
    NavigationLinksComponent,
    DropdownComponent,
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
  likedRooms: LinkedRoomT[] = [];
  private apiUrl = environment.STRAPI_API;

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
    this.route.queryParams.subscribe((params) => {
      this.tab_id = params['tab_id'];

      this.getRooms
        .getRooms(
          `${this.apiUrl}/rooms?populate=*&filters[category][name][$eq]=${
            this.tab_id ?? 'trending'
          }`
        )
        .subscribe((rooms) => {
          this.rooms = rooms;
        });

      this.likedRoomService.likedRooms().subscribe((items) => {
        this.likedRooms = items;

        console.log(this.likedRooms);
      });
    });
  }
}
