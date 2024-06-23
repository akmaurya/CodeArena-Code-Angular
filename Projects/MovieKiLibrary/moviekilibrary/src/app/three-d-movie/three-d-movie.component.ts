import { Component } from '@angular/core';
import { ReadJsonDataService } from '../read-json-data.service';

@Component({
  selector: 'app-three-d-movie',
  templateUrl: './three-d-movie.component.html',
  styleUrl: './three-d-movie.component.css'
})
export class ThreeDMovieComponent {
  private jsonDataPath:string='../assets/data/3dmovie.json';
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
