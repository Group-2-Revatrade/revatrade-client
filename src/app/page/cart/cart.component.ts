import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete*/
  
  products: Array<Product> = [];

  _subTotal: number = 0; // With products array example, subtotal is $55

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.cart;
    this.calculateSubTotal();
  }

  calculateSubTotal(): void {
    this._subTotal = 0;
    this.products.forEach((product) => {
      if (product.discount == true)
        this._subTotal += product.productPrice * product.amount;
      else
        this._subTotal += product.productPrice * product.amount;
    })
  }

  removeFromCart(productId: number): void {
    console.log(productId);
    this.products.forEach((product, index) => {
      if(product.productId == productId)
        this.products.splice(index, 1);
    });
    this.calculateSubTotal();
  }

}
