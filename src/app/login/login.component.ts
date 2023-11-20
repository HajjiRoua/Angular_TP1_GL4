import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MES_CONSTANTES} from "../config/constantes.config";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "./loginService/login.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private httpClient : HttpClient,
    private toastr: ToastrService,
    private loginService : LoginService,
    private router : Router,

  ){
  }

  login(loginFormulaire: NgForm) {
    this.loginService.login(loginFormulaire.form.value).pipe(
      tap((authenticated)=>{
        if(authenticated){
          this.router.navigate(['cv']);
        }else{
          this.toastr.error("Erreur d'authentification")
        }
      })
    ).subscribe()
  }

  ngOnInit(): void {
    const person = localStorage.getItem("AuthUser")
    if (person){
      this.router.navigate([''])
    }
  }

}
