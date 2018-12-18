import { Component, OnInit } from '@angular/core';

import { AjaxService } from './../../services/ajax.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public model: any;

  constructor(private ajax: AjaxService) {
    this.model = {};
    this.model.email = '';
    this.model.password = '';
    this.model.confirmPassword = '';
  }

  public checkAndSignup() {
    const userObject: Object = {
      user: {
        email: this.model.email,
        password: this.model.password
      }
    };
    console.log(userObject);
    this.ajax.post('http://192.168.56.102:1337/signup', userObject).then((data) => {
      console.log('success');
    }).catch((error) => {
      console.log('Error', error);
    });
  }

  ngOnInit() {
  }

}
