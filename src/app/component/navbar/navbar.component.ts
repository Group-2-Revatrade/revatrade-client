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
    if(sessionStorage.getItem('cart') != null) {
      this.cartService.products = JSON.parse(sessionStorage.cart);
    }
    this._productCount = this.itemsInCart();
  }

  ngDoCheck(): void {
    this._productCount = this.itemsInCart();
  }

  itemsInCart(): number {
    let count: number = 0;
    this.cartService.products.forEach(product => {
      count += product.amount;
    });
    return count;
  }

  logout() {
    alert("User successfully logged out!");
  }

}
