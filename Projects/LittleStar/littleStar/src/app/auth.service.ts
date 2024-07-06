import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://your-api-url.com';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
    });
  }

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/signup`, data).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
