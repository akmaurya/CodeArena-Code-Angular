import { Component } from "@angular/core";

@Component({
  selector: 'directivecomponent',
  templateUrl: 'directive.component.html',
  styles:[`div.tab{margin-left:20px;}
            .classOne{color:white}
            .classTwo{background-color:red}`]
})

export class DirecitveComponent{
    public title = 'Directive Component:'
    public showElement = true;
    public color = 'green';
    public colors=['red', 'blue', 'green'];
    public cone=true;
    public ctwo=true;

    public style='italic';
    public size='30px';
    toggleCone(){
        this.cone = !this.cone;
    }
    toggleCtwo(){
        this.ctwo = !this.ctwo; 
    }
}

