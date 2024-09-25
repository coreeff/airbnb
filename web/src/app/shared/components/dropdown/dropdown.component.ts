import {
  Input,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@/app/shared/components/button/button.component';

@Component({
  standalone: true,
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  imports: [CommonModule, ButtonComponent],
})
export class DropdownComponent {
  @Input() label: string = '';
  @Input() variant: 'left' | 'right' | 'center' = 'right';

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  open: boolean = false;

  toggleDropdown() {
    this.open = !this.open;
  }

  @HostListener('document:mousedown', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (
      this.dropdownRef &&
      !this.dropdownRef.nativeElement.contains(event.target)
    ) {
      this.open = false;
    }
  }

  getVariantClass() {
    switch (this.variant) {
      case 'left':
        return 'right-0';
      case 'center':
        return 'left-1/2 transform -translate-x-1/2';
      case 'right':
      default:
        return 'left-0';
    }
  }
}
