import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  id:number = 102;
  status: String = "Online";
  constructor() { }

  ngOnInit(): void {
  }

}
