import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'childcomponent',
  templateUrl: 'child.component.html',
  styles:[`div.tab{margin-left:20px;}`],
  inputs: ['parentData'],
  outputs: ['childEvent']
})


export class ChildComponent{
    public parentData: string;
    childEvent = new EventEmitter<string>();
    public date = new Date();

    onChange(value:string){
        this.childEvent.emit(value);
    }
}

