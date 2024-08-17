import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vegmaze';

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }

  endPoints() {
    // this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/endPoints']); // Redirect to the login page after logout
  }

  setItem(): void {
    // this.storageService.setItem('someKey', 'someValue');
  }
}
