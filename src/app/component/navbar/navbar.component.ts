import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LogoutService } from 'src/app/service/logoutService/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  _productCount: number = 0;
  
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private router: Router, private logoutService:LogoutService) { }

  ngOnInit(): void {
    this._productCount = this.cartService.products.length;
    localStorage.getItem("Revatrade-LocalStorageLocation") === null ? this.isLoggedIn = false : this.isLoggedIn = true;
  }

  ngDoCheck(): void {
    this._productCount = this.cartService.products.length;
    localStorage.getItem("Revatrade-LocalStorageLocation") === null ? this.isLoggedIn = false : this.isLoggedIn = true;
  }

  logout(event:Event){
    event.preventDefault();
    this.logoutService.logout();
    alert("User successfully logged out!");
  }

}
