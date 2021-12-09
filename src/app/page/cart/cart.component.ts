import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete*/
  
  products: Array<any> = [];

  _subTotal: number = 0; // With products array example, subtotal is $55

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.products;
    this.calculateSubTotal();
  }

  calculateSubTotal(): void {
    this._subTotal = 0;
    this.products.forEach((product) => {
      if (product.discount == true)
        this._subTotal += (product.productPrice * (1 - product.discountRate) * product.productQuantity);
      else
        this._subTotal += product.productPrice * product.productQuantity;
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
