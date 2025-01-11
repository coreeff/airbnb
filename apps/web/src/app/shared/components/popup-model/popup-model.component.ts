import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { AuthService } from '@/app/services/auth.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  imports: [ButtonComponent, ReactiveFormsModule],
})
export class PopupModelComponent {
  modelOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): void {
    // const token = this.authService.getAccessToken();
    // if (token) {
    //   this.modelOpen = false;
    // } else {
    //   this.modelOpen = true;
    // }
  }

  // login form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  handleLogin() {
    // if (this.loginForm.valid) {
    //   const { email, password } = this.loginForm.value;
    //   this.authService.signin(email!, password!).subscribe({
    //     next: (response) => {
    //       console.log('Login successful', response);
    //       alert('You are now logged in!');
    //       this.modelOpen = false;
    //     },
    //     error: (err) => {
    //       console.error('Login failed', err);
    //     },
    //   });
    // }
    alert('Login successful');
  }

  closeModel(): void {
    this.modelOpen = false;
  }
}
