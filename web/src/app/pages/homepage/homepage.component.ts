import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomsType } from '@/app/types';
import { RoomsService } from '@/app/services/rooms.service';
import { ButtonComponent } from '@/app/shared/components/button/button.component';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { NormalCardComponent } from '@/app/shared/components/cards/normal-card/normal-card.component';
import { NavigationLinksComponent } from '@/app/shared/components/navigation-links/navigation-links.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ButtonComponent,
    HeaderComponent,
    NormalCardComponent,
    NavigationLinksComponent,
  ],
  templateUrl: './homepage.component.html',
})
export class HomeComponent {
  constructor(private getRooms: RoomsService, private route: ActivatedRoute) {}

  tab_id: string | null = null;

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
          `http://localhost:1337/api/rooms?populate=*&filters[category][name][$eq]=${
            this.tab_id ?? 'trending'
          }`
        )
        .subscribe((rooms) => {
          this.rooms = rooms;
        });
    });
  }
}
