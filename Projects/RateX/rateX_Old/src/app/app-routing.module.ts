import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddRatingComponent } from './add-rating/add-rating.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'add-rating', component: AddRatingComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
