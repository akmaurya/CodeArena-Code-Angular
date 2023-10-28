import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World from App Component</h1>
              <my-tutorials></my-tutorials>`,
})
export class AppComponent {
  title = 'Angular2';
}
