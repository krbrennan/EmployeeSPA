import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  putUrl = 'http://localhost:5000/api/users/';

  constructor(private http: HttpClient) { }


  getExistingUserModel(currentUser) {
    // const currentUser = history.state.model;
    // console.log('inside users service: ', currentUser);
    this.http.get<any[]>(this.putUrl).subscribe(
      user => {
        user.forEach(ele => {
          if (ele.username === currentUser) {
            sessionStorage.setItem('userId', ele.id);
            sessionStorage.setItem('userModel', JSON.stringify(ele, [
              'gender',
              'knownAs',
              'introduction',
              'interests',
              'city',
              'country'
            ]));
          }
        });
      }
    );
  }

  public update(model: any) {
    // const userId = sessionStorage.getItem('userId');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http
      // .put(this.putUrl + userId, JSON.parse(model), {headers})
      .put(this.putUrl + model.id, model, {headers})
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

  getUserId() {
    const currentUser = history.state.userModel.id;

    return this.http.get<any[]>(this.putUrl).subscribe(
      user => {
        user.forEach(ele => {
          // console.log('the ID is: ', ele.id);
          if (ele.username === currentUser) {
            history.pushState({data: ele.id}, 'userId');
          }
        });
    });
  }

  pushState(name) {
    // console.log('NAMENAMEEEE: ', name);
    
  }
}
