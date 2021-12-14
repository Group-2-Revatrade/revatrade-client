export class User{
	constructor(public username:string, public email:string, public userId:number, public jwt:string, public password?:string, public userType?:string) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.userId = userId;
		this.jwt = jwt;
    this.userType = userType;
	}

	getUsername(){
		return this.username;
	}

	getEmail(){
		return this.email;
	}

	getPassword(){
		return this.password;
	}

	getUserId(){
		return this.userId;
	}

  getUserType(){
    return this.userType;
  }
}
