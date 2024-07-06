import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { ShowRatingsComponent } from './show-ratings/show-ratings.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { RatingService } from './rating.service';
import { JwtInterceptor } from './jwt.interceptor';
import { StorageService } from './storage.service';
import { ConfigDataService } from './config-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRatingComponent,
    ShowRatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService, RatingService,
    StorageService,
    ConfigDataService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
