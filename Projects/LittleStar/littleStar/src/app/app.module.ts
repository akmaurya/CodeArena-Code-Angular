import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';
import { AuthService } from './auth.service';
import { VideoService } from './video.service';
import { CategoryService } from './category.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SubscriptionComponent,
    VideoPlayerComponent,
    CategoryComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService,
    VideoService,
    CategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
