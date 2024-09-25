import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderSmallSearchBoxComponent } from '@/app/shared/components/search-boxs/header-small-search-box/header-small-search-box.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, HeaderSmallSearchBoxComponent],
})
export class HeaderComponent {}
