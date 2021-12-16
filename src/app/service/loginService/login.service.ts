import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilService } from '../util.service';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private url:String = environment.server.toString() + "/revatrade/jwt";

	constructor(private http:HttpClient, private utilService: UtilService) {}

	login(username: string, password: string): Observable<any> {
		return this.http.post<any>(this.url + `/login`, { username, password })
    .pipe(
      map(response => {
        if(response.success) {
          this.utilService.setHeaders();
          localStorage.setItem("userId", response.data);
          localStorage.setItem('Revatrade-LocalStorageLocation', response.message);
          return true;
        }
        else return false;
      })
    );
	}
}
