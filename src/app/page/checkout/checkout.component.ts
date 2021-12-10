import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete */

  products: Array<any> = [];
  
  _address: string = '';
  _city: string = '';
  _zipCode: string = '';
  _orderAmount: number = 0; // With products array example, Total is $55
  _orderDate: string = '';
  _orderPlaced: boolean = false;
  _isValid: boolean = true;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.products;
    this.calculateOrderAmount();
  }

  calculateOrderAmount(): void {
    this._orderAmount = 0;
    this.products.forEach((product) => {
      if (product.discount == true)
        this._orderAmount += (product.productPrice * (1 - product.discountRate) * product.productQuantity);
      else
        this._orderAmount += product.productPrice * product.productQuantity;
    })
  }

  removeFromCart(productId: number): void {
    console.log(productId);
    this.products.forEach((product, index) => {
      if (product.productId == productId)
        this.cartService.products.splice(index, 1);
    });
    this.calculateOrderAmount();
  }

  placeOrder(): void {
    console.log(this.products);
    console.log(this._address + ", " + this._city + ", " + this._zipCode);
    console.log(this._orderAmount);
    if(this._address != '' && this._city != '' && this._zipCode != '') {
      this._isValid = true;
      // HTTP request goes here
      if (true) { // To be trigger by the HTTP response body's variable
        this._orderPlaced = true;
        this.cartService.products = [];
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      }
    } else {
      this._isValid = false;
    }
  }
}
