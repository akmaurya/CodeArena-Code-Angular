import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './userdetails.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private registerUrl = this.apiUrl+'/users/register';
  private loginUrl = this.apiUrl+'/users/login';
  private userDetails = this.apiUrl+'/users';
  private updateProfilePhoto = this.apiUrl+'/users/uploadProfilePhoto';
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post(`${this.loginUrl}`, user, { withCredentials: true });
  }

  register(user: any) {
    return this.http.post<UserDetails>(`${this.registerUrl}`, user, { withCredentials: true});
  }

  uploadProfilePhoto(profilePhoto: FormData): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put(`${this.updateProfilePhoto}`, profilePhoto, { headers });
  }



  getUserDetails(user: any) {
    // alert(`${this.userDetails}/${user.username}`);
    return this.http.get(`${this.userDetails}/${user.username}`, { withCredentials: true });
  }

  // logout() {
  //   localStorage.removeItem('token');
  // }

  getToken() {
    return localStorage.getItem('token');
  }

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('token') !== null;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }
}
