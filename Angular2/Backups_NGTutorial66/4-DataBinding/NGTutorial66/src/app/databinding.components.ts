import { Component, style } from '@angular/core';

@Component({
    selector: 'my-data',
    template: `<h2>This is from {{title}}</h2>
                <img width="50" [src]="imageLink"><br>
                <input type="text" value="Angular"/>`,
    styles: [`h2{
        color:red;
    }`]
})

export class DataBindingComponent{
    public title="\"Data Binding Component\"";
    public imageLink="https://lh5.googleusercontent.com/-rHUUB7MYbKI/AAAAAAAAAAI/AAAAAAAAKUc/vDvG0AX-9A4/photo.jpg?sz=64";
}