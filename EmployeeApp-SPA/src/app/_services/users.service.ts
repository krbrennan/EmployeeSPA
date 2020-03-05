import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  putUrl = 'http://localhost:5000/api/users/6';

  constructor(private http: HttpClient) { }

  public update(model: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    console.log(model);
    return this.http
      .put(this.putUrl, JSON.stringify(model), {headers})
      .subscribe(
        val => {
          console.log('Put call successful, value returned in body!', model);
        },
        response => {
          console.log('PUT call error!', response);
        },
        () => {
          console.log('The PUT observable is now complete!');
        }
      );
  }
}
