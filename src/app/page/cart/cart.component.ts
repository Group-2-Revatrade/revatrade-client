import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import {Orders} from 'src/app/models/Orders';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  /* products array currently initialized for viewing purposes,
  remove initialization, once "viewing" is complete*/

  myOrders: Orders[] = [];
  //orders: Orders[] = [];
  products: Product[] =[];
  _subTotal: number = 0; // With products array example, subtotal is $55
  dbTotal: number = 0; // Total for Items in the database related to this userId
  userId: number = 2; //initial testing value to be replaced once userId is retrieved.

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    //this.product = this.cartService.cart; //will collect data from the FrontEnd via 'add to Cart' Button
    this.myOrders = this.cartService.orders;  //will pull data from the Database
    this.getMyOrders(this.userId);
    this.calculateSubTotal();
  }

  getMyOrders(userId:number) {
    if (userId == null) {
      console.log("No userID Detected, Query = Null ");
    }
    else {
      console.log("Retrieving all orders for userID = " + userId + " from the database" )
      this.cartService.getMyOrders(userId).subscribe((data) => {
        this.myOrders = data;
        this.getProductData();
        console.table(this.myOrders);
        this.dbTotal += data.length;  //total Items in the cart
      });
      console.table("Number of Items Retrieved: " + this.myOrders.length);
    }
  }


  getProductData(){
    this.myOrders.forEach((myOrder)=>{
    //this.cartService.getProductData(myOrder.productId).subscribe();
    // @ts-ignore
      console.log("Retrieving Product Data :" + this.myOrders.find().productName);
    });
  }

  calculateSubTotal(): void {
    this._subTotal = 0;
    //To be deprecated if we refresh items from the cart.
   /** this.products.forEach((product) => {
      if (product.discount == true)
        this._subTotal += product.productPrice* product.amount;
      else
        this._subTotal += product.productPrice * product.amount;
    })**/

    //Calculate Subtotal with items from the database.
    this.myOrders.forEach((myOrder)=>{
      this._subTotal += (myOrder.orderPrice * myOrder.orderQuantity);
    });
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
