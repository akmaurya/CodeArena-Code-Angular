import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { AuthGuard } from './auth.guard';
import { EndpointComponent } from './endpoint/endpoint.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'endPoints', component: EndpointComponent },
  { path: 'vegetable', component: VegetableListComponent, canActivate: [AuthGuard] },
  { path: 'vegetable/:id', component: VegetableDetailComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/vegetable', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
