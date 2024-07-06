import { Component } from '@angular/core';
import { RatingService } from '../rating.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent {
  rating = { item: '', rating: 0, comment: '' };

  constructor(
    private ratingService: RatingService,
    private authService: AuthService,
    private router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  addRating() {
    this.ratingService.addRating(this.rating).subscribe(() => {
      this.router.navigate(['/show-ratings']);
    });
  }
}
