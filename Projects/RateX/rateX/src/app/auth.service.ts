import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://your-api-url.com';

    constructor(
      private http: HttpClient,
      private router: Router,
      private storageService: StorageService
    ) {}
  
    login(credentials: any) {
      return this.http.post(`${this.baseUrl}/login`, credentials).subscribe((response: any) => {
        this.storageService.setItem('token', response.token);
        this.router.navigate(['/show-ratings']);
      });
    }
  
    logout() {
      this.storageService.removeItem('token');
      this.router.navigate(['/login']);
    }
  
    isLoggedIn(): boolean {
      return !!this.storageService.getItem('token');
    }
  
    getToken(): string | null {
      return this.storageService.getItem('token');
    }
}
