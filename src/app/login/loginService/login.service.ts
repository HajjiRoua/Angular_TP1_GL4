import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MES_CONSTANTES} from "../../config/constantes.config";
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient
  ) { }


  private user = new BehaviorSubject<UserModel | null>(null);
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();




  login(data : {email : string , password : string}){
    return this.httpClient.post(MES_CONSTANTES.urlLogin, data).pipe(
      map((response: any) => {
        const authToken = {
          token: response.id,
          ttl: response.ttl,
        };
        const user = new UserModel(response.userId, data.email);
        localStorage.setItem('AuthToken', JSON.stringify(authToken));
        localStorage.setItem('AuthUser', JSON.stringify(user));

        this.refreshAuthState();
        return true;

      }),
      catchError((error: any) => {
        this.refreshAuthState();
        return of(false);
      })
    );

  }

  logout(){
    const user = localStorage.getItem('AuthUser');
    if(!user){
      return false
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('AuthUser');
    this.refreshAuthState()
    return true
  }

  refreshAuthState(){
    const userFound = localStorage.getItem('AuthUser');
    if(!userFound){
      this.user.next(null);
      this.loggedIn.next(false);
    }else{
      const user : UserModel = JSON.parse(userFound);
      this.user.next(new  UserModel(user.id, user.email));
      this.loggedIn.next(true);
    }
  }









}
