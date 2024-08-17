import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: any = {};
  userType: string = 'users'; // Default to 'users'

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Create an object to hold the registration details
    const registrationDetails = {
      username: this.username,
      password: this.password,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      userType: this.userType
    };

    // Call the AuthService to register the user with these details
    this.authService.register(registrationDetails, this.userType).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Registration failed', error)
    );
  }
}