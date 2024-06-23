import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  dynName:String = "Arvind";
  age:number = 35;
  getStatus(){
    return this.age>18?"Over 18": "Under 18";
  }
}
