import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register-user/user.model';
import { LoginRequest } from './login/loginrequest.model';
import { LoginResponse } from './login/loginreponse.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private register = 'http://localhost:8080/api/register';
  private login = 'http://localhost:8080/api/login';
  private userDetails = 'http://localhost:8080/api/user/details';

  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(user: User): Observable<User> {
      return this.http.post<User>(`${this.register}`, user);
  }

  loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
    console.log("Before Post URL: ");
    console.log(loginRequest);
    return this.http.post<LoginResponse>(`${this.login}`, loginRequest);
  }

  // getUserDetails(): Observable<any> {
  //   return this.http.get(`${this.userDetails}/user/details`);
  // }


  private authToken = localStorage.getItem('token'); //Assuming you store the token


  getUserDetails(): Observable<any> {
    if (!this.authService.isLoggedIn()) {
      console.error('No auth token available.');
      // Handle error appropriately, e.g., redirect to login
    }

    // Set headers with Authorization token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer `+this.authToken
    });
    console.log("Header--");
    console.log(headers);
    return this.http.get(`${this.userDetails}`, { headers });
  }

  // Example method to retrieve and store the token (not shown here)
  getToken(): string | null {
    return this.authToken;
  }
}
