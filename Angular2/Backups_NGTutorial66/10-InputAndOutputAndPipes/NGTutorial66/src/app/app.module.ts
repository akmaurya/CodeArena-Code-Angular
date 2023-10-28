import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { DataBindingComponent } from './databinding.components';
import { ClassStyleBinding } from './classstylebinding.component';
import { DirecitveComponent } from './directive.component';
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    DataBindingComponent,
    ClassStyleBinding,
    DirecitveComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
