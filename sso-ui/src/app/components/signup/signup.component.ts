import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AjaxService } from './../../services/ajax.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public model: any;

  constructor(private ajax: AjaxService, private router: Router, private data: DataService) {
    this.model = {};
    this.model.email = '';
    this.model.password = '';
    this.model.confirmPassword = '';
  }

  private signUp (userObject: any): void {
    this.ajax.post(this.data.serverURL + '/signup', userObject).then((data) => {
      if (typeof data.success !== 'undefined' && data.success) {
        alert('Signup successfull! Redirecting you to login page');
        this.router.navigate(['/login']);
      } else {
        if (typeof data.code !== 'undefined' && data.code === 'E_UNIQUE') {
          alert('Email id already exists in database');
        }
      }
    }).catch((error) => {
      console.log('Error', error);
    });
  }

  public checkAndSignup() {
    if (this.model.email === '') {
      alert('Email cannot be empty');
      return false;
    }
    if (this.model.password === '') {
      alert('Password cannot be empty');
      return false;
    }
    if (this.model.password !== this.model.confirmPassword) {
      alert('Password and confirm password should match');
      return false;
    }
    const userObject: Object = {
      user: {
        email: this.model.email,
        password: this.model.password
      }
    };
    this.ajax.post(this.data.serverURL + '/checkuser', {email: this.model.email}).then((data) => {
      if (typeof data.userExists !== 'undefined' && !data.userExists) {
        this.signUp(userObject);
      } else {
        alert('User already exists try different email id');
      }
    }).catch((error) => {
      console.log('error, try after sometime');
    });
  }

  ngOnInit() {
  }

}
