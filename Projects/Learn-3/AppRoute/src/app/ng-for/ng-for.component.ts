import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  constructor(private router: Router){

  }
  users:string[] =[];
  inputValue:string='';
  onCreateUser(){

    if (this.inputValue.trim()) {
      this.users.push(this.inputValue);
    }
    if(this.users.length>3){
      this.router.navigate(['product']);
    }
  }
  onRemoveUser(){
      this.users.splice(this.users.length-1);
  }

  remove(index:number){
    this.users.splice(index, 1);
  }
}
