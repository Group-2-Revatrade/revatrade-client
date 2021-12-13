import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/loginService/login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm:FormGroup;

	constructor(private loginService:LoginService, private formBuilder:FormBuilder,  private router: Router) {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	 }

	ngOnInit(): void {
		if (localStorage.getItem("Revatrade-LocalStorageLocation") != null) {
			this.router.navigateByUrl("")
		};
	}

	ngDoCheck(): void {
		if (localStorage.getItem("Revatrade-LocalStorageLocation") != null) {
			this.router.navigateByUrl("")
		};
	}

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }

	login(){
		if (localStorage.getItem("Revatrade-LocalStorageLocation") === null) {
			this.loginService.login(this.f.username.value, this.f.password.value)
				.subscribe(user => {
					this.router.navigateByUrl("/")
				});
		}
	}

	newUser(){
		this.router.navigateByUrl("/registration");
	}
}

