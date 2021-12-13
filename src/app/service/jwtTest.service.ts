import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtTestService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  url: string = "http://localhost:8080/revatrade/api/testjwt";

  jwtTestA(): Observable<Object> {
    console.log("JwtTestService > jwtTestA() +++++++++++");
    return this.http.get(this.url, this.httpOptions);
  }
}
