import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { UtilService } from './service/util.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
