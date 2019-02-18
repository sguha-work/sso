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

	constructor(private router: Router, private data: DataService, private ajax: AjaxService) {
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
		const userObject: Object = {
			user: {
				email: this.model.userName,
				password: this.model.password
			}
		};
		console.log('login', userObject);
		this.ajax.post(this.data.serverURL + '/login', userObject).then((data) => {
			console.log(data);
			if (typeof data.status !== 'undefined' && data.status === 200) {
				if (data.success) {
					alert('login success, redirecting to home page');
					this.router.navigate(['/home']);
				} else {
					alert('No user found with given credentials');
				}
			} else {
				alert('Unable to verify user now, please try after sometime');
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	ngOnInit() {
	}

}
