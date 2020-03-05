import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  usernameModel: any = {};

  userPutModel: any = {
    'username': null,
    'city': null,
    'country': null,
    'gender': null,
    'interests': null,
    'introduction': null,
    'knownAs': null
  };

  constructor(private http: HttpClient, private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.usernameModel = history.state.model;
    this.userPutModel.username = history.state.model;
    console.log(history.state.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigate(['/home']);
  }

  submitForm(){
    // console.log(this.userPutModel);
    this.usersService.update(this.userPutModel);
  }

}
