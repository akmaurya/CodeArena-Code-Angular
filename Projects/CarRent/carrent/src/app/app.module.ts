import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';

const appRoutes:Routes=[
  //{path:'', redirectTo:'login', pathMatch:'full'},
  {path:'', component:CarDetailsComponent},
  // {path:'about', component:AboutComponent},
  // {path:'login', component:LoginComponent},
  // {path:'product', component:ProductComponent, children:[
  //   {path:'laptop', component: LaptopComponent},
  //   {path:'mobile', component: MobileComponent}, 
  //   {path:'tv', component: TvComponent},
  //   {path:'washingmachine', component: WashingMachineComponent}
  // ]},
  {path:'customer', component:CustomerComponent},
  {path:'**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    MyDocumentsComponent,
    PageNotFoundComponent,
    ContactComponent,
    LoginComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    MatExpansionModule,
    BrowserAnimationsModule,
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
