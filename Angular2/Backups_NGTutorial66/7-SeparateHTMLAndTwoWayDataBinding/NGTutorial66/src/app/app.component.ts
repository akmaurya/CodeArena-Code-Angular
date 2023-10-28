import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: [
    `h4{color:blue;}
      div.classstylebind {
      width:620px;
      margin: auto;
      border: 3px solid #73AD21;`,
    
  ]
})
export class AppComponent {
  title = 'Angular2';
}
