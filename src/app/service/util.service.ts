import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _serverDomain: string = 'http://localhost:8080';

  constructor() { }

  getServerDomain() {
    return this._serverDomain;
  }
}
