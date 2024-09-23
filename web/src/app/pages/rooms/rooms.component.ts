import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomsService } from '@/app/services/rooms.service';
import { HeaderComponent } from '@/app/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-rooms',
  imports: [HeaderComponent],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent {
  roomId: string | null = null;

  constructor(private route: ActivatedRoute, private getRooms: RoomsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
    });
  }
}
