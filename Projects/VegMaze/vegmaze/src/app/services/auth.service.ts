import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Admin } from '../models/admin.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
  }

  login(admin: Admin, userType:string): Observable<any> {
    return this.http.post<Admin>(`${this.apiUrl}/${userType}/login`, admin).pipe(
      tap((response: any) => {
        this.tokenSubject.next(response.token);
      })
    );
  }

  register(registrationDetails: any, userType:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userType}/register`, registrationDetails);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userDetails');
    
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    if(this.tokenSubject.value==null)
      this.logout();
    return this.tokenSubject.value;
  }

  getUserDetails(username:string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${username}`);
  }

  public isLoggedIn(): boolean {
    // You can check for a token or session here
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if token exists, false otherwise
  }
}
