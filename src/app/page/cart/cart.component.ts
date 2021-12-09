import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* products array currently initialized for viewing purposes,  
  remove initialization, once "viewing" is complete*/
  
  products: Array<any> = [
    {productId: 4, productName: 'spoon', productPrice: 1, productQuantity: 20, discount: false, discountRate: null, description: 'for soup', productPic: null},
    {productId: 2, productName: 'fork', productPrice: 2, productQuantity: 20, discount: true, discountRate: .50, description: 'for cake', productPic: null},
    {productId: 7, productName: 'knife', productPrice: 1.50, productQuantity: 10, discount: false, discountRate: null, description: 'for steak', productPic: null}
  ]

  _subTotal: number = 0; // With products array example, subtotal is $55

  constructor(private router: Router) { }

  ngOnInit(): void {
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
