import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrl: './movie-tile.component.css'
})
export class MovieTileComponent {
  @Input() movieData: any;

  setDefaultImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.onerror = null;  // Prevent infinite loop
    target.src = 'assets/img/moviesImage/Uploading.jpg';  // Adjust the path to your default image
  }
}
