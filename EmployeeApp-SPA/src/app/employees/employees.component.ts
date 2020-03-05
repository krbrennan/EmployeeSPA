import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  constructor(private http: HttpClient) { }
  // [x: string]: any;

  values: any = [];

 

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees(){
    this.http.get('http://localhost:5000/api/users/')
    .subscribe(response => {
    this.values = response;
  }, error => {
    console.log('getUsers error!!! \n');
    console.log(error);
  });
  }
}

