import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { LoginComponent } from "./page/login/login.component";
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { OrderDetailsComponent } from './page/order-details/order-details.component';

const routes: Routes = [
  { path: 'product', component: ProductPageComponent },
  { path: '', redirectTo: "product", pathMatch: "full" },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-details', component: OrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
