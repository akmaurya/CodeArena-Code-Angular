import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  user: User = new User();
  responseUser: User = new User();

  constructor(private userService: UserService) { }

  onSubmit() {
      this.userService.registerUser(this.user).subscribe(
          data => {
              console.log('Registration successful', data);
              this.responseUser = data;
              console.log('Response', this.responseUser);
              alert("User ID = "+this.responseUser.userName);
            },
            error => {
              console.error('Registration error', error);
          }
      );
  }
}
