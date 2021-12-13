import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newUser } from '../models/newUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  url: string = environment.server+"/revatrade/api/users";

  newUser(user: newUser): Observable<Object> {
    console.log("RegistrationService > newUser() > user: ", user);
    return this.http.post<newUser>(this.url, user, this.httpOptions);
  }
}
