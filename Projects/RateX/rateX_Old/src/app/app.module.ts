import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
