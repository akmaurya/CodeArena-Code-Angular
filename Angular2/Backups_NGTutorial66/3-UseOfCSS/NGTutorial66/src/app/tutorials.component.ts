import { Component, style } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>This line is come from Tutorials Component</h2>
                    <h4>Header 4 from Tutorials Component</h4>`,
    styles: [
        `h4{color:green}`
    ]
})

export class TutorialsComponent{}