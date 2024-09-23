import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-normal-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './normal-card.component.html',
  styles: ``,
})
export class NormalCardComponent {
  @Input() imageUrl: string = '';
  @Input() location: string = '';
  @Input() date: string = '';
  @Input() price: number = 0;
  @Input() rating: number = 0;
}
