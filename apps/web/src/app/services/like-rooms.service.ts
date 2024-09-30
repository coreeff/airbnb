import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Property } from '@/app/types';

export interface LikedRoomT {
  likedRooms: Property;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class LikeRoomsService {
  private likedRoomsSubject = new BehaviorSubject<LikedRoomT[]>([]);
  likedRooms$ = this.likedRoomsSubject.asObservable();

  addToLikedRooms(likedRooms: Property): void {
    const currentRooms = this.likedRoomsSubject.value;

    const existingRoomIndex = currentRooms.findIndex(
      (item) => item.likedRooms.id === likedRooms.id
    );

    if (existingRoomIndex > -1) {
      currentRooms[existingRoomIndex].quantity++;
    } else {
      currentRooms.push({ likedRooms, quantity: 1 });
    }

    this.likedRoomsSubject.next(currentRooms);
  }

  isRoomLiked(id: number): boolean {
    const currentRooms = this.likedRoomsSubject.value;

    const existingRoomIndex = currentRooms.findIndex(
      (item) => item.likedRooms.id === id
    );

    if (existingRoomIndex > -1) {
      return true;
    }

    return false;
  }

  likedRooms(): Observable<LikedRoomT[]> {
    return this.likedRooms$;
  }
}
