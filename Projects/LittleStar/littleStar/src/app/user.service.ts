import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register-user/user.model';
import { LoginRequest } from './login/loginrequest.model';
import { LoginResponse } from './login/loginreponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private register = 'http://localhost:8080/api/register';
  private login = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
      return this.http.post<User>(`${this.register}`, user);
  }

  loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
    console.log("Before Post URL: ");
    console.log(loginRequest);
    return this.http.post<LoginResponse>(`${this.login}`, loginRequest);
  }
}
