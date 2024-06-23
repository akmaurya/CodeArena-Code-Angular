import { Component } from '@angular/core';
import { ReadJsonDataService } from '../read-json-data.service';

@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrl: './bollywood.component.css'
})
export class BollywoodComponent {
  private jsonDataPath:string='../assets/data/bollywood.json';
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
