import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtTestService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  url: string = environment.server+"/revatrade/api/testjwt";

  jwtTest(): Observable<Object> {
    console.log("JwtTestService > jwtTest() +++++++++++");
    return this.httpClient.get(this.url, this.httpOptions) as Observable<any>;
  }
}
