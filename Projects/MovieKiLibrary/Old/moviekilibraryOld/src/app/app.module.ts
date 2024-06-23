// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataDisplayComponent } from './data-display/data-display.component';
import { AppComponent } from './app.component';


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    DataDisplayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
