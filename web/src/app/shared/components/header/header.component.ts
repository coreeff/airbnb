import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { HeaderSmallSearchBoxComponent } from '@/app/shared/components/search-boxs/header-small-search-box/header-small-search-box.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    DropdownComponent,
    NavigationLinksComponent,
    HeaderSmallSearchBoxComponent,
  ],
})
export class HeaderComponent {
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }
}
