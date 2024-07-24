import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequest } from './login/loginrequest.model';
import { LoginResponse } from './login/loginreponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private login = 'http://localhost:8080/api/login';
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  
  loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.login}`, loginRequest);
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('token') !== null;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }
}
