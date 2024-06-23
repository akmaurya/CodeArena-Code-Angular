import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesCompComponent } from './routes-comp/routes-comp.component';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'product', component:ProductComponent},
  {path:'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RoutesCompComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
