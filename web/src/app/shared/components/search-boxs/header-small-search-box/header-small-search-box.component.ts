import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'app-header-small-search-box',
  templateUrl: './header-small-search-box.component.html',
  styles: ``,
})
export class HeaderSmallSearchBoxComponent {}
