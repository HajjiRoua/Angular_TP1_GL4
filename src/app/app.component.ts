import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "./login/loginService/login-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp_angular';


  constructor(
    private loginService : LoginServiceService
  ) {
  }

  ngOnInit(): void {
    const person = localStorage.getItem("person")
    if (person){
      this.loginService.emitAuthentication(true)
    }
  }




}
