import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  id:number = 104;
  status: String = "Online";
  constructor() { }

  ngOnInit(): void {
  }

}
