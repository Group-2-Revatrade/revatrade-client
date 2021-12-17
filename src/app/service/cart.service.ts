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

  getMyOrders(userId:string){
    console.log("Data Retrieval in progress.....for user: " + userId  );
    return this.httpClient.get<Orders[]>(`${this.utilService.getServerDomain()}/revatrade/cart/search?userId=${userId}`);
  }

  getProductData(productId:number){
    return this.httpClient.get<Orders[]>(`${this.utilService.getServerDomain()}/revatrade/products/search/byId?productId=${productId}`);
  }

  //add Orders to Persistent BE-databse
  AddtoMyshoppingCart(orderPrice: number, orderQuantity: number,  trxComplete:boolean, productId: number, user: number): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/cart/new/`, {
     "orderPrice": orderPrice,
      "orderQuantity": orderQuantity,
      "trxCompelete": false,
      "product": productId,
      "userId": parseInt(<string>sessionStorage.getItem("id")),
      "user":user,
    }, {'headers': this.utilService.headers});
  }

}
