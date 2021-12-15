import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilService} from "./util.service";
import {Orders} from "../models/Orders";

@Injectable({
  providedIn: 'root'
})

export class CartService {

 cart: Array<Product> = [];
 orders: Array<Orders> = [];

  constructor(private httpClient:HttpClient, private utilService: UtilService) { }

  getMyOrders(userId:number){
    console.log("Data Retrieval in progress.....");
    return this.httpClient.get<Orders[]>(`${this.utilService.getServerDomain()}/revatrade/cart/search?userId=${userId}`)
  }

  addProductToCart(productId: number | undefined, productName: String | undefined, orderPrice: number | undefined, orderQuantity: number | undefined, userId: number | undefined){
    return this.httpClient.get<Product[]>(`${this.utilService.getServerDomain()}/revatrade/cart/new?productId${productId},productName=${productName},orderPrice=${orderPrice},orderQuantity=${orderQuantity},userId=${userId}`)
  }


}
