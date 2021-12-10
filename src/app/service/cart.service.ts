import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<any> = [
    { productId: 4, productName: 'spoon', productPrice: 1, productQuantity: 20, discount: false, discountRate: null, description: 'for soup', productPic: null },
    { productId: 2, productName: 'fork', productPrice: 2, productQuantity: 20, discount: true, discountRate: .50, description: 'for cake', productPic: null },
    { productId: 7, productName: 'knife', productPrice: 1.50, productQuantity: 10, discount: false, discountRate: null, description: 'for steak', productPic: null }
  ]

  constructor() { }
}
