import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Property } from '@/app/types';
import { ButtonComponent } from '../../button/button.component';
import { LikeRoomsService } from '@/app/services/like-rooms.service';
import { DecimalPrecisionPipe } from '@/app/pipes/decimal-precision.pipe';

@Component({
  standalone: true,
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  imports: [CommonModule, RouterLink, DecimalPrecisionPipe, ButtonComponent],
})
export class NormalCardComponent {
  @Input() room!: Property;

  constructor(private roomLikeService: LikeRoomsService) {}

  liked: boolean = false;

  ngOnInit() {
    this.updateLikedStatus();
  }

  onButtonClick(event: MouseEvent, room: Property): void {
    // Stops the event from propagating to the link
    event.stopPropagation();
    event.preventDefault();

    this.roomLikeService.addToLikedRooms(room);
    this.updateLikedStatus();
  }

  updateLikedStatus(): void {
    this.liked = this.roomLikeService.isRoomLiked(this.room.id);
  }
}
