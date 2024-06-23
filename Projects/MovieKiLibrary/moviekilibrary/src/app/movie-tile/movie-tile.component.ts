import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrl: './movie-tile.component.css'
})
export class MovieTileComponent {
  @Input() movieData: any;
}
