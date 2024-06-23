import { Component } from '@angular/core';

@Component({
  selector: 'app-pushandsplice',
  templateUrl: './pushandsplice.component.html',
  styleUrl: './pushandsplice.component.css'
})
export class PushandspliceComponent {
  users:string[] =[];
  inputValue:string='';
  onCreateUser(){
    if (this.inputValue.trim()) {
      this.users.push(this.inputValue);
    }
  }
  onRemoveUser(){
      this.users.splice(this.users.length-1);
  }

  remove(index:number){
    this.users.splice(index, 1);
  }
}
