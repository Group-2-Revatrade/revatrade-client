import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTestService } from 'src/app/service/jwtTest.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	loggedIn: string;

	constructor(private router:Router, private jwtTestService: JwtTestService) {}

	ngOnInit(): void {
		if(localStorage.getItem("Revatrade-LocalStorageLocation") == null) {
			this.loggedIn = "USER NOT LOGGED IN (no jwt)";
			console.log("HomeComponent >>>>> USER NOT LOGGED IN (no jwt) +++++++++++++");
		}
		else{
			this.loggedIn = "USER LOGGED IN (yes jwt)";
			console.log("HomeComponent >>>>> USER LOGGED IN (yes jwt) +++++++++++++");
		}
	}

  ngDoCheck(): void {
		if(localStorage.getItem("Revatrade-LocalStorageLocation") == null) {
			this.loggedIn = "USER NOT LOGGED IN (no jwt)";
			console.log("HomeComponent >>>>> USER NOT LOGGED IN (no jwt) +++++++++++++");
		}
		else{
			this.loggedIn = "USER LOGGED IN (yes jwt)";
			console.log("HomeComponent >>>>> USER LOGGED IN (yes jwt) +++++++++++++");
		}
  }

	jwtTestA(){
		this.jwtTestService.jwtTestA().subscribe();
	}
}
