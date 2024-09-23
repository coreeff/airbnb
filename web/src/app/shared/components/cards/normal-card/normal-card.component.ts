import { Property } from '@/app/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-normal-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './normal-card.component.html',
})
export class NormalCardComponent {
  @Input() room!: Property;
}
