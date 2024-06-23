import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  msg:string="";
  item:string="";
  onAddCart(){
    this.msg="Item added";
  }

  onClear(){
    this.msg="";
  }

  onInputClick(event:any){
    console.log(event);
    this.msg=event.target.value;
  }

  itemAdded(event:any){
    this.item=event.target.value+" Added in Cart";
  }
}
 