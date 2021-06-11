import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public test : string = "Anonymous";

  constructor(
    private userServ : UserService
  ) { }

  ngOnInit(): void {
    this.test = this.userServ.loggedUser.Username
  }

}
