import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World from App Component</h1>
              <h4>Header 4 from App Component</h4>
              <my-tutorials></my-tutorials>`,
  styles: [
    `h4{color:blue;}`
  ]
})
export class AppComponent {
  title = 'Angular2';
}
