import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_Interceptor } from './interceptors/jwt-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { UtilService } from './service/util.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { LoginComponent } from './page/login/login.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CartService } from './service/cart.service';
import { UserService } from './service/user.service';
import { ProductService } from './service/productService/product.service';
import { OrderService } from './service/order.service';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginService } from './service/loginService/login.service';
import { LogoutService } from './service/logoutService/logout.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    SignUpComponent,
    UserProfileComponent,
    ProductComponent,
    NavbarComponent,
    SignUpComponent,
    ProductPageComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [UtilService, CartService, UserService, ProductService, OrderService, HttpClient, LoginService, LogoutService, { provide: HTTP_INTERCEPTORS, useClass: JWT_Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
