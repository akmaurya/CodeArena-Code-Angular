// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { StorageService } from './local-storage.service';
import { Admin } from '../models/admin.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    // const token = storageService.getItem('token');
    // this.tokenSubject.next(token);
  }

  login(admin: Admin): Observable<any> {
    return this.http.post<Admin>(`${this.apiUrl}/users/login`, admin).pipe(
      tap((response: any) => {
        // this.storageService.setItem('token', response.token);
        this.tokenSubject.next(response.token);
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  logout(): void {
    // this.storageService.removeItem('token');
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getUserDetails(username:string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${username}`);
  }
}
