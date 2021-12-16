import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _serverDomain: string = 'http://localhost:8088';

  // For next iteration utilize cookies for better security
  jwt: any = localStorage.getItem('Revatrade-LocalStorageLocation');
  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('authorization', this.jwt);
  
  constructor() { }

  getServerDomain() {
    return this._serverDomain;
  }

  public setHeaders(): void {
    this.jwt = localStorage.getItem('Revatrade-LocalStorageLocation');
    this.headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('authorization', this.jwt);
  }
}
