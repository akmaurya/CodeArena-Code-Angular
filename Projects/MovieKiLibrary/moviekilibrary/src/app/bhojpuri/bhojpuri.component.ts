import { Component } from '@angular/core';
import { ReadJsonDataService } from '../read-json-data.service';

@Component({
  selector: 'app-bhojpuri',
  templateUrl: './bhojpuri.component.html',
  styleUrl: './bhojpuri.component.css'
})
export class BhojpuriComponent {
  private jsonDataPath:string='../assets/data/bhojpuri.json';
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
