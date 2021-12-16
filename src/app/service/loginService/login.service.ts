import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginObj } from '../../models/loginObj';
import { JsonResponse } from '../../models/JsonResponse';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private url:String = environment.server.toString() + "/revatrade/jwt";
	private currentUserSubject: BehaviorSubject<loginObj>;

	constructor(private http:HttpClient) {}

	login(username: string, password: string): Observable<void> {
		return this.http.post<JsonResponse>(this.url + `/login`, { username, password })
			.pipe(
				map(user => {
					return localStorage.setItem('Revatrade-LocalStorageLocation', user.message);
				})
			);
	}
}
