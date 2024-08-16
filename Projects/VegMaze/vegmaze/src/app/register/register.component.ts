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

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // this.authService.register(this.username, this.password, this.email, this.phoneNumber, this.address).subscribe(
    this.authService.register(this.username).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Registration failed', error)
    );
  }
}
