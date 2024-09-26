import { Property } from '@/app/types';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DecimalPrecisionPipe } from '@/app/pipes/decimal-precision.pipe';
import { ButtonComponent } from '../../button/button.component';

@Component({
  standalone: true,
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  imports: [CommonModule, RouterLink, DecimalPrecisionPipe, ButtonComponent],
})
export class NormalCardComponent {
  @Input() room!: Property;

  onButtonClick(event: MouseEvent) {
    event.stopPropagation(); // Stops the event from propagating to the link
    event.preventDefault(); // Prevents the link's default behavior (optional)

    // Perform your button action here
    console.log('Button clicked!');
  }
}
