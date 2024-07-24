import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'littleStar';
  constructor(public authService: AuthService) {}


  ngOnInit(): void {
    // alert("On App component-----"+localStorage.getItem('token'));
  }
}
