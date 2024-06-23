import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesCompComponent } from './routes-comp/routes-comp.component';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { NgForComponent } from './ng-for/ng-for.component';

const appRoutes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'product', component:ProductComponent, children:[
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent}, 
    {path:'tv', component: TvComponent},
    {path:'washingmachine', component: WashingMachineComponent}
  ]},
  {path:'contact', component:ContactComponent},
  {path:'**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RoutesCompComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
