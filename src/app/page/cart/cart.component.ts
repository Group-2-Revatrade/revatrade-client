import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/service/cart.service';
import {Orders} from "../../models/Orders";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  /* products array currently initialized for viewing purposes,
  remove initialization, once "viewing" is complete*/

  products: Array<Product> = [];
  cartItems: Orders[] = [];
  orders: Array<Orders> = [];
  singleOrder: any[]= [];
  userId: string = '';
  term:String ="";


  _subTotal: number = 0; // With products array example, subtotal is $55

  _isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if (!this._isLoggedIn) {
      this.checkingCredentials();
      }
    else{
      let userId = sessionStorage.getItem('id');
    }

    this.products = this.cartService.cart;
    this.getDataBaseOrders(this.userId); //pull thge database persisted data from the shoppingcart
    this.calculateSubTotal();
    this.itemsInCart(); //get the number of items in the cart
  }

  checkingCredentials() {
    localStorage.getItem("Revatrade-LocalStorageLocation") != null ? this._isLoggedIn = true : this._isLoggedIn = false;
  }


  /**get Persisted Shoppingart data for the logged in user
   *
   *Needed: UserId: id
   * target endpoint: ./cart/search?userId${userid}
   * call function .getMyOrders(Integer id)
   */
  getDataBaseOrders(userId){
    userId = 1 //temp hold of userId for testing
   if(this.term!=null){
    this.cartService.getMyOrders(userId).subscribe((data)=>{
      this.cartItems= data;
      console.table(data);
    })
  }
}



  //count the Total Number of Items in the Shopping Cart
  itemsInCart(): number {
    let count: number = 0;
    this.cartService.orders.forEach(cartItem => {
      count += cartItem.orderQuantity;
    });
    return count;
  }

  //Calculate Total Cost
  calculateSubTotal(): void {
    this._subTotal = 0;
    this.products.forEach((product) => {
      if (product.discount == true)
        this._subTotal += product.productPrice * product.amount;
      else
        this._subTotal += product.productPrice * product.amount;
    })
  }

  //Remove item from the FE-cart, does not update the BE-Databse.
  removeFromCart(productId: number): void {
    console.log(productId);
    this.products.forEach((product, index) => {
      if(product.productId == productId)
        this.products.splice(index, 1);
    });
    this.calculateSubTotal();
  }


}
