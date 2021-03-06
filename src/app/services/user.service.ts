import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) {}
/*
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }*/

  setTokenStorage(token: string){
    localStorage.setItem("token", token);
  }

  getTokenStorage(){
    return localStorage.getItem("token");
  }
}

