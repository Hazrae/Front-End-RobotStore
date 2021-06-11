import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrModule, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import {LoggedUser} from '../models/logged-user.model'
import { SigninUser } from '../models/signin-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth: boolean = false;
  loggedUser: LoggedUser;
  URI : string = 'https://localhost:44379/api/user';

  constructor(
    private _client : HttpClient,
    private route : Router,
    private toast : NbToastrService
  ) { }

  SignIn(user : SigninUser) 
  {
     this._client.post<LoggedUser>(this.URI, user).subscribe(
      x=> {
          this.loggedUser = x;
          console.log(this.loggedUser.Username);
         if(this.loggedUser.UserID != -1)
          this.isAuth = true;
          this.route.navigate(['/home']);
          this.toast.success("User logged in");
          }      
  );
  }
  SignOut()
  {
    this.loggedUser = null;
    this.isAuth = false;
  }  
}
