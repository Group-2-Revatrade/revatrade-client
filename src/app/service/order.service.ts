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

  createOrder(order: any): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/api/order/`, order)
  }

  getPreviousOrders(userId: any): Observable<any> {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/revatrader/api/order/${userId}`)
  }
}
