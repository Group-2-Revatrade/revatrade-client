import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete */

  products: Array<any> = [];
  
  _orderFields: any = {
    _address: '',
    _city: '',
    _zipCode: '',
    _orderAmount:  0, // With products array example, Total is $55
    _orderDate: '',
    _orderPlaced: false,
    _isValid: true,
  }

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.cart;
    this.calculateOrderAmount();
  }

  calculateOrderAmount(): void {
    this._orderFields._orderAmount = 0;
    this.products.forEach((product) => {
        this._orderFields._orderAmount += product.productPrice * product.amount;
    })
  }

  removeFromCart(productId: number): void {
    console.log(productId);
    this.products.forEach((product, index) => {
      if (product.productId == productId)
        this.cartService.cart.splice(index, 1);
    });
    this.calculateOrderAmount();
  }

  placeOrder(): void {
    console.log(this.products);
    console.log(this._orderFields._address + ", " + this._orderFields._city + ", " + this._orderFields._zipCode);
    console.log(this._orderFields._orderAmount);
    if(this._orderFields._address != '' && this._orderFields._city != '' && this._orderFields._zipCode != '') {
      this._orderFields._isValid = true;
      this.orderService.createOrder(this._orderFields).subscribe(order => {
        if(order.success){
          this._orderFields._orderPlaced = true;
          this.cartService.cart = [];
          sessionStorage.clear();
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
        }else{
          this._orderFields._isValid = false;
        }
      })
    }
  }
}
