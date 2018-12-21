import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from './../../services/ajax.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public model: any;

  constructor(private ajax: AjaxService, private router: Router) {
    this.model = {};
    this.model.email = '';
    this.model.password = '';
    this.model.confirmPassword = '';
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
    this.ajax.post('http://192.168.56.102:1337/signup', userObject).then((data) => {
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

  ngOnInit() {
  }

}
