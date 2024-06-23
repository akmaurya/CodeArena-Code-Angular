import { Component } from '@angular/core';
import { ReadJsonDataService } from '../read-json-data.service';

@Component({
  selector: 'app-short-movie',
  templateUrl: './short-movie.component.html',
  styleUrl: './short-movie.component.css'
})
export class ShortMovieComponent {
  private jsonDataPath:string='../assets/data/shortmovie.json';
  tiles: any[] = [];

  constructor(private dataService: ReadJsonDataService) { }

  ngOnInit(): void {
    this.getData(this.jsonDataPath);
  }
  getData(jsonDataPath: string){
    this.dataService.getTiles(jsonDataPath).subscribe(data => {
      this.tiles = data;
    });
  }
}
