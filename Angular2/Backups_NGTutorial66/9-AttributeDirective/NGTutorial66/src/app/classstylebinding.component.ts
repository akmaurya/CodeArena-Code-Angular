import { Component } from '@angular/core';

@Component({
    selector: 'classstylebind',
    templateUrl: 'classstylebinding.component.html',
    styles: [`.myClass{
        color:red;
    }`]
})

export class ClassStyleBinding{
    public title="Class CSS Binding from the same Component";
    public applyclass = false;
    public applyred = false;

    public fname;
    public lname;

    onClick(value){
        console.log('Click Me Button Worked with '+value);
    }

    onEvent(value){
        console.log('Event Me Button Worked with '+value);
    }
}