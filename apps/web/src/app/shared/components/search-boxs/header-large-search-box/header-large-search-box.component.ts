import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'app-header-large-search-box',
  templateUrl: './header-large-search-box.component.html',
})
export class HeaderLargeSearchBoxComponent {}
