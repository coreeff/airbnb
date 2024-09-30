import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PopupModelComponent } from './shared/components/popup-model/popup-model.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PopupModelComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'airbnb';
}
