import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LogoutService } from 'src/app/service/logoutService/logout.service';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  _productCount: number = 0;
  
  isLoggedIn: boolean;

  constructor(private cartService: CartService, private router: Router, private logoutService:LogoutService, private loginService:LoginService) { }

  ngOnInit(): void {
    this._productCount = this.cartService.products.length;
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this.isLoggedIn = true : this.isLoggedIn = false;

  }

  ngDoCheck(): void {
    this._productCount = this.cartService.products.length;
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this.isLoggedIn = true : this.isLoggedIn = false;
  }

  logout(event:Event){
    event.preventDefault();
    this.logoutService.logout();
    alert("User successfully logged out!");
  }

}
