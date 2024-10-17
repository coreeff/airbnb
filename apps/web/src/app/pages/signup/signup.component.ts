import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from '@/app/services/auth.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  // login form
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mobile_number: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    image: new FormControl(''),
  });

  handleSignup() {
    if (this.signupForm.valid) {
      const { email, password, image, mobile_number, name } =
        this.signupForm.value;

      this.authService
        .signup({
          email: email as string,
          password: password as string,
          image: image as string,
          mobile_number: mobile_number as string,
          name: name as string,
        })
        .subscribe({
          next: (response) => {
            console.log('Account created', response);
          },
          error: (err) => {
            console.error('Login failed', err);
          },
        });
    }
  }
}
