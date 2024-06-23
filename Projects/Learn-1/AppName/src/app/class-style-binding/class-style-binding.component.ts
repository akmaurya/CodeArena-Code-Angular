import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrl: './class-style-binding.component.css'
})
export class ClassStyleBindingComponent {
  myprop:boolean=false;

  mystyle:string="15px";

  mycustomClasses={
    cla:true,
    cla2:true,
    cl3:false,
    cl4:true
  }
}
