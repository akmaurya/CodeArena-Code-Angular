import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div style="background-color: red;">
                <h1>Hello World from App Component</h1>
                <h4>Header 4 from App Component</h4>
              </div>

              <div style="background-color: green;">
                <my-tutorials></my-tutorials>
              </div>

              <div style="background-color: blue;">
                <my-data></my-data>
              </div>
              
              <div style="background-color: purple;">
                <classstylebind></classstylebind>
              </div>` ,
              
  styles: [
    `h4{color:blue;}`
  ]
})
export class AppComponent {
  title = 'Angular2';
}
