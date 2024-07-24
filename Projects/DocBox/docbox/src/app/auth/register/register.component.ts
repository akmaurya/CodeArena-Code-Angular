import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserDetails } from '../userdetails.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = { username: '', email: '', password: '' };
  userDetails: UserDetails = new UserDetails();

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.userDetails).subscribe(
      data => {
      this.userDetails = data;  
        },
        error => {
          console.error('Registration error', error);
      }
    );
  }
}
