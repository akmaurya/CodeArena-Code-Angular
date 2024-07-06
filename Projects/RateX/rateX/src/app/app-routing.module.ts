import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { ShowRatingsComponent } from './show-ratings/show-ratings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-rating', component: AddRatingComponent },
  { path: 'show-ratings', component: ShowRatingsComponent },
  { path: '', redirectTo: '/show-ratings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
