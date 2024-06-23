import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TempletReferenceVariableComponent } from './templet-reference-variable/templet-reference-variable.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushandspliceComponent } from './pushandsplice/pushandsplice.component';
import { RoutingLinkComponent } from './routing-link/routing-link.component';


@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    TopnavComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TempletReferenceVariableComponent,
    TwoWayDataBindingComponent,
    NgxBootstrapComponent,
    NgIfComponent,
    NgForComponent,
    PushandspliceComponent,
    RoutingLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
