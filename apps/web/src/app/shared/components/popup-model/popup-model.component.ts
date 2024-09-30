import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-popup-model',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './popup-model.component.html',
})
export class PopupModelComponent {
  modelOpen: boolean = true;

  closeModel() {
    this.modelOpen = false;
  }
}
