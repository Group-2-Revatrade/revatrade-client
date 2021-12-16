import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilService} from "./util.service";
import {Orders} from "../models/Orders";
import {Observable} from "rxjs";

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

  getProductData(productId:number){
    return this.httpClient.get<Orders[]>(`${this.utilService.getServerDomain()}/revatrade/products/search/byId?productId=${productId}`)
  }

  addProductToCart(order: Product){
    return this.httpClient.post<Orders>(`${this.utilService.getServerDomain()}/revatrade/cart/new/`,order)
  }

}
