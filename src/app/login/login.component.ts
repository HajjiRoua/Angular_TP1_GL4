import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MES_CONSTANTES} from "../config/constantes.config";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {LoginServiceService} from "./loginService/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private httpClient : HttpClient,
    private toastr: ToastrService,
    private loginService : LoginServiceService,
    private router : Router,

  ){
  }

  login(loginFormulaire: NgForm) {
    this.httpClient.post(
      MES_CONSTANTES.urlLogin,
      loginFormulaire.form.value
    ).subscribe(
      (person)=>{
        console.log(person);
        this.loginService.emitAuthentication(true);
        const link = [''];
        this.router.navigate(link);
         localStorage.setItem("person",JSON.stringify(person));
         console.log(localStorage.getItem("person"));
      },
      (error)=>{
        this.loginService.emitAuthentication(false);
        this.toastr.error("An error Occured While logging in");
      }
    )
  }

  ngOnInit(): void {
    const person = localStorage.getItem("person")
    if (person){
      this.router.navigate([''])
    }
  }

}
