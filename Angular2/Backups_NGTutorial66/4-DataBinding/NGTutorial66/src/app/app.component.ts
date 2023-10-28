import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World from App Component</h1>
              <h4>Header 4 from App Component</h4>
              <my-tutorials></my-tutorials>
              <my-data></my-data>`,
  styles: [
    `h4{color:blue;}`
  ]
})
export class AppComponent {
  title = 'Angular2';
}
