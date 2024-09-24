import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { RoomsType } from '@/app/types';
import { ApiService } from '@/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private apiService: ApiService) {}

  getRooms(url: string): Observable<RoomsType> {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  }
}
