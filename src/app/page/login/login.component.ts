import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	_userFields: any = {
		username: '',
		password: ''
	}

	_isValid: boolean = true;
	_loginSuccess: boolean = false;

	constructor(private router: Router, private loginService: LoginService) { }

	ngOnInit(): void {
    // nav Login button should toggle visibility on jwt/login status
    if (localStorage.getItem("Revatrade-LocalStorageLocation") !== null) {
      alert("You are already logged in!");
      this.router.navigate(['']);
    }
	}

	login(userFields: any){
		if (this.isEmpty(userFields.username, userFields.password)) {
			this.loginService.login(userFields.username, userFields.password).subscribe(response => {
          if(response) {
            this._isValid = true;
            this._loginSuccess = true;
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000)
          } else {
            this.resetFields();
            this._isValid = false;      
          }
				});
		} else {
			this.resetFields();
			this._isValid = false;
		}
	}

	isEmpty(username: any, password: any) : boolean{
		if(username != "" && password != ""){
			return true;
		}
		return false;
	}

	resetFields(){
		this._userFields.username = '';
		this._userFields.password = '';
	}
}
