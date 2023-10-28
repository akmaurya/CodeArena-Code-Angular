import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  id:number = 103;
  status: String = "Online";
  constructor() { }
  getStatus(){
    return this.status;
  }
  ngOnInit(): void {
  }

}
