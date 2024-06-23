import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-reference-variable',
  templateUrl: './templet-reference-variable.component.html',
  styleUrl: './templet-reference-variable.component.css'
})
export class TempletReferenceVariableComponent {
  msg:string="";
  getInputInfo(inputInfo:any, inputInfo2:any){
    console.log(inputInfo);
    this.msg = "First: "+inputInfo.value+", Second: "+inputInfo2.value;
  }
}
