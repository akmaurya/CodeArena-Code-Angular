import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginRequest } from './loginrequest.model';
import { LoginResponse } from './loginreponse.model';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.loginUser(this.loginRequest).subscribe(
      data => {
        this.loginResponse = data;
        console.log('Login successful', data);
        this.authService.setLoggedIn(true);
        localStorage.setItem('token', ""+data.token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login error', error);
        this.loginError = 'Invalid email or password';
      }
    );
  }
}
