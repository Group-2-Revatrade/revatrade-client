import { RegistrationService } from './../../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { newUser } from 'src/app/models/newUser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	selectedValue: "customer";

	constructor(private registrationService: RegistrationService, private router: Router) { }

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

	user: newUser = {
		email: '',
		username: '',
		password: '',
		userType: '',
	}

	newUser(): void {
		console.log("RegistrationComponent > newUser(): ", this.user);
		this.registrationService.newUser(this.user).subscribe()
		this.router.navigate(['/login'])
	}

}
