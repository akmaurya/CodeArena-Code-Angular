import { Component } from '@angular/core';

@Component({
    selector: 'classstylebind',
    template: `<h2>{{title}}</h2>
                <div [class.myClass]="applyclass">This is class binding</div>
                <div [style.color]="applyblue? 'blue':'green'">This is style binding</div>`,
    styles: [`.myClass{
        color:red;
    }`]
})

export class ClassStyleBinding{
    public title="Class CSS Binding from the same Component";
    public applyclass = false;
    public applyblue = false;
}