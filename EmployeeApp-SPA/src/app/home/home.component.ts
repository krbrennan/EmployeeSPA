import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  registerIsDisplayed = false;
  values: any = {};

  ngOnInit() {
    this.getValues();
  }

  toggleDisplay(){
    this.registerIsDisplayed = true;
  }

  getValues(){
    this.http.get('http://localhost:5000/api/values/')
      .subscribe(response => {
      this.values = response;
    }, error => {
      console.log('getValues error!!! \n');
      console.log(error);
    });
  }

  cancelRegisterMode(registerIsDisplayed: boolean){
    this.registerIsDisplayed = registerIsDisplayed;
  }

}
