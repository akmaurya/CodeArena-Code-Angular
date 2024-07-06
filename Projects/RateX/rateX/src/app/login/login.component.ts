import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private cred :string='../assets/cred.json';
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  login() {
    // this.authService.login(this.credentials);
    // alert(this.http.get(this.cred));
    // console.log(this.http.get(this.cred));
    // return this.http.get(this.cred);

    this.router.navigate(['/show-ratings']);
  }
}
