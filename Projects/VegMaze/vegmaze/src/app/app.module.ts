import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { EndpointListComponent } from './endpoint/endpoint-list/endpoint-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EndpointService } from './endpoint/endpoint.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { VegetableService } from './services/vegetable.service';

@NgModule({
  declarations: [
    AppComponent,
    EndpointComponent,
    EndpointListComponent,
    LoginComponent,
    RegisterComponent,
    VegetableListComponent,
    VegetableDetailComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    EndpointService, 
    AuthService, VegetableService, CartService, OrderService, AuthGuard,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
