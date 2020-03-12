import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private usersService: UsersService, private fb: FormBuilder ) {}

  @Output() cancelRegister = new EventEmitter();

  userId: any = null;

  cleanModel = {};

  userPutModel: any = {
    username: null,
    city: null,
    country: null,
    gender: null,
    interests: null,
    introduction: null,
    knownAs: null
  };

  currentUserName: string;
  currentUserModel: any = {};
  userModel: any = {};

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.currentUserName = sessionStorage.getItem('username');
    this.userModel = sessionStorage.getItem('userModel');
    this.currentUserModel = JSON.parse(this.userModel);
    this.myForm = this.fb.group({
      id: this.userId,
      city: this.currentUserModel["city"],
      country: this.currentUserModel["country"],
      gender: this.currentUserModel["gender"],
      interests: this.currentUserModel["interests"],
      introduction: this.currentUserModel["introduction"],
      knownAs: this.currentUserModel["knownAs"]

    });
  }

  // generateUserModelObj() {
  //   this.currentUserModel = JSON.parse(this.userModel);
  // }

  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigate(['/home']);
  }

  submitForm() {
    console.log(this.myForm.value);
    // this.usersService.update(this.userPutModel);
    this.usersService.update(this.myForm.value);
  }

}
