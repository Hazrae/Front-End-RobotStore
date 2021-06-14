import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninUser } from 'src/app/models/signin-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
  ]
})
export class UserLoginComponent implements OnInit {

  public loginForm : FormGroup;
  public user : SigninUser;
  public isAuth : boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private userServ : UserService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.isAuth = this.userServ.getStatus();
  }

  initForm(){
    this.loginForm = this.formBuilder.group(
      {
        Username:['', Validators.required],
        Password:['', Validators.required]
      }
    )
  }

  onSubmitForm(){
    const formValue = this.loginForm.value;
    const userName = formValue['Username'];
    const password = formValue['Password'];
    this.userServ.SignIn(new SigninUser(userName, password));
  }

  onLogout(){
    this.userServ.SignOut();
  }

}
