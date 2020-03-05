import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // connected to [valuesFromHome] in home.html
  // contains all values passed down from home component
  @Input() valuesFromHome: any;

  // 4 parts to output property:
  // 1. output property itself below
  // 2. event emitter(in cancel())
  // 3. Go back to home component and handle Output property
  @Output() cancelRegister = new EventEmitter();
  values: any = {};
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.valuesFromHome);
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration sucessful!!');
      this.router.navigate(['/employees']);
    }, error => {
      this.alertify.error(error.error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
}
