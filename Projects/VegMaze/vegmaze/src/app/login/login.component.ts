import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  userType: string = 'users';
  errorMessage: string | undefined;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      loginType: ['user', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const admin: Admin = this.loginForm.value;
    this.authService.login(admin, this.loginForm.value.loginType).subscribe(
      response => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', response.username);

        this.authService.getUserDetails(response.username).subscribe(
          (userData: User) => {
            // Store the token and username in local storage
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('username', response.username);
        
            // Optionally, handle the received user details (userData) if needed
            // For example, you might want to store user details or handle them further
            localStorage.setItem('userDetails', JSON.stringify(userData));
        
            // Navigate to the /vegetable route after successful login
            this.router.navigate(['/vegetable']);
          },
          error => {
            // Handle authentication error
            this.errorMessage = 'Invalid credentials';
          }
        );


        this.router.navigate(['/vegetable']);
      },
      error => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
}
