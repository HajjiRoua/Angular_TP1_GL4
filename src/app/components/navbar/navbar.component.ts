import { Component } from '@angular/core';
import {LoginServiceService} from "../../login/loginService/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authenticated :Boolean = false;

  constructor(
    private loginService : LoginServiceService,
    private router : Router,
  ) {
    this.loginService.loginStateAsObservable$.subscribe(
      (value => {
        this.authenticated=value
      })
    )
  }

  logout(){
    this.loginService.emitAuthentication(false)
    this.authenticated=false;
    const link = ['login'];
    this.router.navigate(link);
    localStorage.removeItem("person");

  }



}
