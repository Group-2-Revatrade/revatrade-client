import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  _productCount: number = 0;
  
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this._productCount = this.cartService.products.length;
  }

  ngDoCheck(): void {
    this._productCount = this.cartService.products.length;
  }

  logout() {
    alert("User successfully logged out!");
  }

}
