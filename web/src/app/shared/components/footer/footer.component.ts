import { Component } from '@angular/core';
import { FooterNavigationComponent } from '@/app/shared/components/footer-navigation/footer-navigation.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [FooterNavigationComponent],
})
export class FooterComponent {}
