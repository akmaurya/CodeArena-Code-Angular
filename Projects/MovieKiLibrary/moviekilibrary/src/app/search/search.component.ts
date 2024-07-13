import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';
  @Output() searchResult = new EventEmitter<string>();

  constructor(private searchService: SearchService) {}

  onSearch() {
    if (this.query.trim()) {
      this.searchService.searchMovie(this.query).subscribe(result => {
        if (result.bollywood) {
          this.searchResult.emit('bollywood');
        } else if (result.hollywood) {
          this.searchResult.emit('hollywood');
        } else if (result.south) {
          this.searchResult.emit('south');
        } else if (result.shortMovies) {
          this.searchResult.emit('shortMovies');
        }
      });
    }
  }
}
