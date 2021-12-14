import { Component, HostBinding, DoCheck, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LogoutService } from 'src/app/service/logoutService/logout.service';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  _productCount: number = 0;
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private router: Router, private dialog:MatDialog, private overlay: OverlayContainer, private logoutService:LogoutService, private loginService:LoginService) { }

  ngOnInit(): void {
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
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this.isLoggedIn = true : this.isLoggedIn = false;
    if(sessionStorage.getItem('cart') != null) {
      this.cartService.cart = JSON.parse(sessionStorage.cart);
    }
    this._productCount = this.itemsInCart();
  }

  ngDoCheck(): void {
    this._productCount = this.itemsInCart();
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this.isLoggedIn = true : this.isLoggedIn = false;
  }

  itemsInCart(): number {
    let count: number = 0;
    this.cartService.cart.forEach(cartItem => {
      count += cartItem.amount;
    });
    return count;
  }

  logout(event:Event){
    event.preventDefault();
    this.logoutService.logout();
    alert("User successfully logged out!");
  }

}
