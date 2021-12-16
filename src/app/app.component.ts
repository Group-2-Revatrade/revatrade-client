import { Component, DoCheck, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LogoutService } from './service/logoutService/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
 
  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  _productCount: number = 0;
  
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private logoutService: LogoutService, private router: Router, private dialog:MatDialog, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    this.checkCredentials();

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    if (sessionStorage.getItem('cart') != null) {
      this.cartService.cart = JSON.parse(sessionStorage.cart);
    }
    this._productCount = this.cartService.cart.length;
  }

  ngDoCheck(): void {
    this._productCount = this.itemsInCart();
    if(!this.isLoggedIn) {
      this.checkCredentials();
    }
  }

  itemsInCart(): number {
    let count: number = 0;
    this.cartService.cart.forEach(cartItem => {
      count += cartItem.amount;
    });
    return count;
  }

  checkCredentials() {
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this.isLoggedIn = true : this.isLoggedIn = false;
  }

  logout() {
    this.logoutService.logout();
    this.isLoggedIn = false;
    alert("User successfully logged out!");
  }
}
