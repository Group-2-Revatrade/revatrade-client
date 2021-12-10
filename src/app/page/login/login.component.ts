import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _userFields: any = {
    username: '',
    password: ''
}

  _isValid: boolean = true;
  _loginSuccess: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(userFields: any){
    if(this.isUser(userFields.username, userFields.password)){
        this._isValid = true;
        this._loginSuccess = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000)
      }
    else{
      this.resetFields();
      this._isValid = false;
    }
  }

  isUser(username: any, password: any) : boolean{
    // Placeholder for when connection to DB is established
    // Boolean should check DB for corresponding username and password and return true if found
    if(username == "revatrade" && password == "revatrade"){
      return true;
    }
    return false;
  }

  resetFields(){
    this._userFields.username = '';
    this._userFields.password = '';
  }
}
