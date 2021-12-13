import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _userFields: any = {
    username: '',
    password: '',
    email: '',
    userType: 'Customer',
  }

  _userProfileFields: any = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    profilePic: '',
    aboutMe: ''
  }
  
  _confirmPassword: string = '';
  _pageCount: number = 1;
  _isUserCreated: boolean = false;
  _isValid: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(userFields: any, userProfileFields: any, confirmPassword: string) {
    if (userFields.password != confirmPassword) {
      this._isValid = false;
    } else if (userFields.username != "" && userFields.password != "" && confirmPassword != "" && userFields.email != "" && userFields.userType != "") {
      if (userProfileFields.firstName != "" && userProfileFields.lastName != "" && userProfileFields.address != "" && userProfileFields.city != "" && userProfileFields.zipCode != "") {

        if (userProfileFields.profilePic == "") 
          userProfileFields.profilePic = null;
        if (userProfileFields.aboutMe == "") 
          userProfileFields.aboutMe = null;

        this._isValid = true;
        this.userService.createUser(this._userFields).subscribe(user => {
          if(user.success) { 
            this.userService.createUserProfile(this._userProfileFields, this._userFields.username).subscribe(profile => {
              if(profile.success) {
                this._isUserCreated = true;
                setTimeout(() => {
                  this.router.navigate(['/login']);
                }, 2000);
              }
            })
          }
        });
      } else {
        this._isValid = false;
      }
    } else {
      this._isValid = false;
    }
  }
}
