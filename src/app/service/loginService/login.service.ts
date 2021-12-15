import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginObj } from '../../models/loginObj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:String = environment.server.toString() + "/revatrade/jwt";
  // private currentUserSubject: BehaviorSubject<loginObj>;

  constructor(private http:HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log("LoginService > login() > login: ", username, " : ", password);
    let response = this.http.post<any>(this.url + `/login`, { username, password });
    console.log("LoginService > login() > login >>>>>>>>> response: ", response);
    return this.http.post<any>(this.url + `/login`, { username, password })
      .pipe(
        map(user => {
          if (user){
            return localStorage.setItem('Revatrade-LocalStorageLocation', user.jwt);
          }
          return null;
        })
      );
  }
}
