import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserDetails } from '../userdetails.model';
import { LoginRequest } from './loginrequest.model';
import { LoginResponse } from './loginresponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // user = { username: '', password: '' };
  loginRequest: LoginRequest = new LoginRequest();
  loginResponse: LoginResponse = new LoginResponse();
  userDetails: UserDetails = new UserDetails();
  loginError: string | null = null;
  token: string | null = null;
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginRequest).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.loginResponse = response;
        
        this.authService.getUserDetails(this.loginRequest).subscribe(
          (resp: any) => {
            
            // this.userDetails = resp;
            localStorage.setItem('userData', JSON.stringify(resp));

            this.userDetails = JSON.parse(localStorage.getItem('userData')+"");
            console.log("Just added User Details");
            console.log(this.userDetails);
            this.router.navigate(['/documents']);
          });
      },
      error => {
        console.error('Login error', error);
        this.loginError = 'Invalid email or password';
      }
    );
  }
}
