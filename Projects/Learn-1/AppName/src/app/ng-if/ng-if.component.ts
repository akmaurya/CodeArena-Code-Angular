import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  isTrue:boolean=false;
  isTrue2:boolean=false;
  onClicked(){
    this.isTrue=true;
  }
  onClicked2(){
    this.isTrue2=true;
  }
}
