import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  user: User = new User();
  responseUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
      this.userService.registerUser(this.user).subscribe(
          data => {
              console.log('Registration successful', data);
              this.responseUser = data;
              console.log('Response', this.responseUser);
              this.router.navigate(['/login']);
            },
            error => {
              console.error('Registration error', error);
          }
      );
  }
}
