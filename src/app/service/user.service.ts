import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private utilService: UtilService, private router: Router) { }

  createUser(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/api/users`, user);
  }

  createUserProfile(userProfile: any, username: string): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/revatrade/api/users/${username}/profile/create`, userProfile);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
  
  setHeaders(): void {
    this.utilService.setHeaders();
  }
}
