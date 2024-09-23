import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RoomsType } from '../types';

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
