import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private utilService: UtilService, private router: Router) { }

  createOrder(address: string, city: string, zipCode: number, orderAmount: number): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/order/new/`, {
      "address": address,
      "city": city,
      "zipCode": zipCode,
      "orderAmount": orderAmount
    }, {'headers': this.utilService.headers});
  }

  createOrderDetails(orderId: number, productId: number, orderPrice: number, orderQuantity: number): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/api/order/${orderId}/product/${productId}`, {
      "orderPrice": orderPrice,
      "orderQuantity": orderQuantity
    }, { 'headers': this.utilService.headers });
  }

  // For next iteration
  getPreviousOrders(userId: any): Observable<any> {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/revatrader/api/order/${userId}`)
  }
}
