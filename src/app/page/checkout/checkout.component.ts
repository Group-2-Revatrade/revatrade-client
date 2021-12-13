import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete */

  products: Array<any> = [];
  


  _OrderFields: any = {
    _address: '',
    _city: '',
    _zipCode: '',
    _orderAmount:  0, // With products array example, Total is $55
    _orderDate: '',
    _orderPlaced: false,
    _isValid: true,
  }

  constructor(private cartService: CartService, private OrderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.products;
    this.calculateOrderAmount();
  }

  calculateOrderAmount(): void {
    this._OrderFields._orderAmount = 0;
    this.products.forEach((product) => {
        this._OrderFields._orderAmount += product.productPrice * product.amount;
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
    console.log(this._OrderFields._address + ", " + this._OrderFields._city + ", " + this._OrderFields._zipCode);
    console.log(this._OrderFields._orderAmount);
    if(this._OrderFields._address != '' && this._OrderFields._city != '' && this._OrderFields._zipCode != '') {
      this._OrderFields._isValid = true;
      this.OrderService.createOrder(this._OrderFields).subscribe(order => {
        if(order.success){
          this._OrderFields._orderPlaced = true;
          this.cartService.products = [];
          sessionStorage.clear();
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
        }else{
          this._OrderFields._isValid = false;
        }
      })
    }
  }
}
