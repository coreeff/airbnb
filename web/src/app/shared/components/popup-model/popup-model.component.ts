import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
})
export class PopupModelComponent {
  @Input() title: string = '';
  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() confirmModal: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  confirm() {
    this.confirmModal.emit();
  }
}
