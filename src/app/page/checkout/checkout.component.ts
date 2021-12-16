import { Component, OnInit } from '@angular/core';
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
  
  _address: string = '';
  _city: string = '';
  _zipCode: string = '';
  _orderAmount: number = 0; // With products array example, Total is $55

  _orderPlaced: boolean = false;
  _isValid: boolean = true;

  userId: number = 0;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }
  
  ngOnInit(): void {
    if (this.userId == 0) {
      this.checkingCredentials();
      if(this.userId == 0) {
        this.router.navigate(['login']);
      }
    }
    
    this.products = this.cartService.cart;
    this.calculateOrderAmount();
  }

  checkingCredentials() {
    if (localStorage.getItem("userId")) {
      let temp: any = localStorage.getItem("userId");
      this.userId = parseInt(temp);
    }
  }

  calculateOrderAmount(): void {
    this._orderAmount = 0;
    this.products.forEach((product) => {
        this._orderAmount += product.productPrice * product.amount;
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
    
    // Fields must not be empty
    if (this._address != "" && this._city != "" && this._zipCode != "") {
      this._isValid = true;
      // Request to place order
      let parseZipCode: number = parseInt(this._zipCode);
      this.orderService.createOrder(this._address, this._city, parseZipCode, this._orderAmount).subscribe(order => {
        if(order.success) {
          // Iterate through the cart to include the details of the order
          let counter: number = 0;
          this.products.forEach(product => {
            // Product price already accounts for discounts if any
            this.orderService.createOrderDetails(order.data.orderId, product.productId, product.productPrice, product.amount);
            counter++;
          });
          if(counter == this.products.length) {
            this._orderPlaced = true;
            this.cartService.cart = [];
            sessionStorage.clear();
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          }          
        } else {
          this._isValid = false;
        }
      })
    } else {
      this._isValid = false;
    }
  }
}
