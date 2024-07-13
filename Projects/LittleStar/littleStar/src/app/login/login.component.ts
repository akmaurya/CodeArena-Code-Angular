import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginRequest } from './loginrequest.model';
import { LoginResponse } from './loginreponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = new LoginRequest();
  loginResponse: LoginResponse = new LoginResponse();
  errorMessage: string | undefined;
  loginError: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    console.log('Login Requested', LoginRequest);
    this.userService.loginUser(this.loginRequest).subscribe(
      data => {
        console.log('Login successful', data);
        this.loginResponse = data;
        this.router.navigate(['/dashboard']); // Redirect to a dashboard or home page
      },
      error => {
        console.error('Login error', error);
        this.loginError = 'Invalid email or password';
      }
    );
  }
}
