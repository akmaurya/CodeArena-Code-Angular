import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { DataBindingComponent } from './databinding.components';
import { ClassStyleBinding } from './classstylebinding.component';


@NgModule({
  declarations: [
    AppComponent, TutorialsComponent, DataBindingComponent, ClassStyleBinding
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
