import { Component } from '@angular/core';
import { ReadJsonDataService } from '../read-json-data.service';

@Component({
  selector: 'app-south',
  templateUrl: './south.component.html',
  styleUrl: './south.component.css'
})
export class SouthComponent {
  private jsonDataPath:string='../assets/data/south.json';
  tiles: any[] = [];
  count: number=0;
  constructor(private dataService: ReadJsonDataService) { }

  ngOnInit(): void {
    this.getData(this.jsonDataPath);
  }
  getData(jsonDataPath: string){
    this.dataService.getTiles(jsonDataPath).subscribe(data => {
      this.tiles = this.sortData(data);
      this.count = this.tiles.length;
    });
  }

  sortData(data: any[]): any[] {
    return data.sort((a, b) => a.Name.localeCompare(b.Name)); // Sort alphabetically by Name
  }
}

