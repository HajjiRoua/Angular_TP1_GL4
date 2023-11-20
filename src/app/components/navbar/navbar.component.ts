import { Component } from '@angular/core';
import {LoginService} from "../../login/loginService/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authenticated :Boolean = false;

  constructor(
    private loginService : LoginService,
  ) {
    this.loginService.loggedIn$.subscribe(
      (value => {
        this.authenticated=value
      })
    )
  }

  logout(){
    this.loginService.logout()
  }



}
