import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  user: any;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserDetails().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user details', error);
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    );
  }
}
