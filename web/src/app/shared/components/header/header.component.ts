import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { HeaderSmallSearchBoxComponent } from '@/app/shared/components/search-boxs/header-small-search-box/header-small-search-box.component';
import { HeaderLargeSearchBoxComponent } from '../search-boxs/header-large-search-box/header-large-search-box.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    DropdownComponent,
    NavigationLinksComponent,
    HeaderSmallSearchBoxComponent,
    HeaderLargeSearchBoxComponent,
    CommonModule,
  ],
})
export class HeaderComponent {
  expand: boolean = false;
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }
}
