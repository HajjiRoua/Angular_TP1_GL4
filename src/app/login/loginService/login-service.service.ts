import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
  ) { }


  private loginState : Subject<boolean> = new Subject<boolean>()

  loginStateAsObservable$ = this.loginState.asObservable()



  emitAuthentication(authenticated : boolean){
    this.loginState.next(authenticated)
  }









}
