import {
  Input,
  Output,
  Component,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@/app/shared/components/button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  selector: 'app-header-small-search-box',
  templateUrl: './header-small-search-box.component.html',
})
export class HeaderSmallSearchBoxComponent {
  @Input() expand!: boolean;
  @Output() expandChange = new EventEmitter<boolean>();

  setExpand() {
    this.expand = !this.expand;
    this.expandChange.emit(this.expand);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const isInsideSmallBox = target.closest('app-header-small-search-box');
    const isInsideLargeBox = target.closest('app-header-large-search-box');

    if (!isInsideSmallBox && !isInsideLargeBox) {
      this.expand = false;
      this.expandChange.emit(this.expand);
    }
  }
}
