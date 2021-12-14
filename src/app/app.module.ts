import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_Interceptor } from './interceptors/jwt-interceptor';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { UtilService } from './service/util.service';
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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [UtilService, CartService, UserService, ProductService, OrderService, HttpClient, LoginService, LogoutService, { provide: HTTP_INTERCEPTORS, useClass: JWT_Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
