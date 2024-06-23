// movie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css', './styles.css', './commonListing.css']
})
export class MovieTileComponent implements OnInit {
  activeTab: string = 'bollywood'; // Default active tab
  movieData: any = {}; // Object to store movie data for each tab

  moviesArray: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMovieData('bollywood'); // Fetch data for default tab
  }

  fetchMovieData(tab: string): void {
    this.http.get<any[]>(`assets/json/${tab}.json`).subscribe(
      (data) => {
        this.movieData[tab] = data;
      },
      (error) => {
        console.error(`Error fetching ${tab} movie data:`, error);
      }
    );
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
    if (!this.movieData[tab]) {
      this.fetchMovieData(tab);
    }
  }

  getDownloadText(link: string): string {
    return link === 'link' ? 'Will Upload Soon' : 'Download';
  }
}
