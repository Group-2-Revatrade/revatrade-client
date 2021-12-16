import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // properties for user
  _userId: number = 0;
  _userProfile: any = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    profilePic: '',
    aboutMe: '',
    user: {
      userId: '',
      username: '',
      email: ''
    }
  };

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  // on init pass an array of all users
  ngOnInit(): void {
    let temp: any = this.route.snapshot.paramMap.get('userId');
    this._userId = parseInt(temp);
    
    if(this._userId != 0) {
      this.userService.getUserProfileById(this._userId).subscribe(profile => {
        this._userProfile = profile.data;
      });
    }
  }



}
