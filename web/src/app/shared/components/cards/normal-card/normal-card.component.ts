import { Property } from '@/app/types';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DecimalPrecisionPipe } from '@/app/pipes/decimal-precision.pipe';

@Component({
  standalone: true,
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  imports: [CommonModule, RouterLink, DecimalPrecisionPipe],
})
export class NormalCardComponent {
  @Input() room!: Property;
}
