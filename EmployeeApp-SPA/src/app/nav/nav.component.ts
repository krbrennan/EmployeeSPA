import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // storing objects for passing username&password
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
        this.alertify.success('Logged In Successfully!');
      }, error => {
        this.alertify.error(error.statusText);
      });
  }

  loggedIn(){
    // get token from local storage
    const token = localStorage.getItem('token');

    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.success('Logged Out Successfully!');
  }
}
