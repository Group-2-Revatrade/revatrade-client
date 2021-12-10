import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo: "product", pathMatch:"full"},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'product', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
