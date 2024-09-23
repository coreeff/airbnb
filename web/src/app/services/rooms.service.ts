import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private apiService: ApiService) {}

  getRooms(url: string): Observable<string[]> {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  }
}
