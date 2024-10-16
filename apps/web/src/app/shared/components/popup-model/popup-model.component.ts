import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-model',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './popup-model.component.html',
})
export class PopupModelComponent {
  modelOpen: boolean = true;

  closeModel(): void {
    this.modelOpen = false;
  }
}
