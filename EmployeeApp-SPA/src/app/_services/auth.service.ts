import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  // root module provides service
  providedIn: 'root'
})

export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }


  login(model: any){
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          // token object
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }

  loggedIn() {
    const token = localStorage.getItem('token');

    return !!token;
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'register',  model);
  }
}
