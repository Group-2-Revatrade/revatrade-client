import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _serverDomain: string = 'http://localhost:8088';

  jwt: any = sessionStorage.getItem('JWT');
  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('authorization', this.jwt);
  
  constructor() { }

  getServerDomain() {
    return this._serverDomain;
  }

  public setHeaders(): void {
    this.jwt = sessionStorage.getItem('JWT');
    this.headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('authorization', this.jwt);
  }
}
