import { Component, HostBinding, DoCheck, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LogoutService } from 'src/app/service/logoutService/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  // Depreciated, dark mode successfully working with app.component

  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  _productCount: number = 0;

  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private logoutService: LogoutService, private router: Router, private dialog: MatDialog, private overlay: OverlayContainer) { }

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
    this._productCount = this.cartService.cart.length;
  }

  ngDoCheck(): void {
    this._productCount = this.itemsInCart();
    if (!this.isLoggedIn) {
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
