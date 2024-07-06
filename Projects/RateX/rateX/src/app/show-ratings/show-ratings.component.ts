import { Component } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-show-ratings',
  templateUrl: './show-ratings.component.html',
  styleUrl: './show-ratings.component.css'
})
export class ShowRatingsComponent {
  ratings: any[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getRatings().subscribe((data: any) => {
      this.ratings = data;
    });
  }
}
