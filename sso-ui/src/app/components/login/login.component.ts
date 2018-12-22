import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './../../services/data.service';
import { AjaxService } from './../../services/ajax.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: any;

  constructor( private router: Router) {
    this.model = {};
    this.model.userName = '';
    this.model.password = '';
    if (this.checkIfCookieExists()) {
      this.router.navigate(['/home']);
    }
  }
  private checkIfCookieExists() {
    return false;
  }

  public checkCredentialsAndLogin() {

  }

  ngOnInit() {
  }

}
