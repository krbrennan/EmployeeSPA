import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  [x: string]: any;

  values: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
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
}

