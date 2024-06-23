import { Component } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  data: any; // Change the type according to your data structure
  data2: string="Sachin Lappu";

  constructor(private dataService: DataFetchService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
}
}
