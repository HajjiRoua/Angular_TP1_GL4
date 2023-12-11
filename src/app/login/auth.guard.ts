import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./loginService/login.service";
import {concatMap, map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const router = inject(Router)
  return loginService.loggedIn$.pipe(
      map((value)=>{
          if(value){
              return true;
          }else {
              router.navigate(['login'])
              return false
          }
      })
  )
};
