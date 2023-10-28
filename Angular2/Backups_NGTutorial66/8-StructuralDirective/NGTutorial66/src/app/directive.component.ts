import { Component } from "@angular/core";

@Component({
  selector: 'directivecomponent',
  templateUrl: 'directive.component.html',
  styles:['div.tab{margin-left:20px;}']
})

export class DirecitveComponent{
    public title = 'Directive Component:'
    public showElement = true;
    public color = 'green';
    public colors=['red', 'blue', 'green'];
}

