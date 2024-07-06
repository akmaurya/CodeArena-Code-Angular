import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'video/:id', component: VideoPlayerComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'group/:id', component: GroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
