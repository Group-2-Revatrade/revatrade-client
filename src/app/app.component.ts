import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  _productCount: number = 0;
  
  isLoggedIn: boolean = false;

  userId: any = 0;

  constructor(private cartService: CartService, private router: Router, private dialog:MatDialog, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    this.checkingCredentials();

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
    this._productCount = this.cartService.cart.length;
    if(this.userId == 0 || this.userId == null) {
      this.checkingCredentials();
    }
  }

  checkingCredentials() {
    if (localStorage.getItem("userId")) {
      this.isLoggedIn = true;
      let temp: any = localStorage.getItem("userId");
      this.userId = parseInt(temp);
      console.log(this.userId);
    }
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }

}
