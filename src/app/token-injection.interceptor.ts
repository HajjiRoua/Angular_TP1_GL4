import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInjectionInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('AuthToken');
    if (token) {
      const tokenObject = JSON.parse(token);

      const cloneRequest = request.clone({
        params: request.params.set('access_token', tokenObject.token),
      });
      return next.handle(cloneRequest);
    } else {
      return next.handle(request);
    }
  }
}
export const tokenInjectionInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInjectionInterceptor,
  multi: true,
};
