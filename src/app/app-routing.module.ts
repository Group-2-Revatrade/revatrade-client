import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductPageComponent } from './page/product-page/product-page.component';
// import { SignUpComponent } from './page/sign-up/sign-up.component';
// import { LoginComponent } from "./page/login/login.component";
// import { CartComponent } from './page/cart/cart.component';
// import { CheckoutComponent } from './page/checkout/checkout.component';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./component/login/login.component";
import { RegistrationComponent } from "./component/registration/registration.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "registration",
		component: RegistrationComponent
	},
	//	{path: 'product', component: ProductPageComponent},
	//	{path:'', redirectTo: "product", pathMatch:"full"},
	//	{path: 'sign-up', component: SignUpComponent},
	//	{path: 'login', component: LoginComponent},
	//	{path: 'cart', component: CartComponent},
	//	{path: 'checkout', component: CheckoutComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
