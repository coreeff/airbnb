import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent {
  roomId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
    });
  }
}
