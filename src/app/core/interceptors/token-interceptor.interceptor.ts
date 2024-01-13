import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = localStorage.getItem('token')
    const adminToken = localStorage.getItem('adminToken')

    const tokenToUse = userToken ? userToken : adminToken

    const cloneRequest = request.clone({
      setHeaders: {
        Authorization: `bearer ${tokenToUse}`
      }
    })
    return next.handle(cloneRequest);
  }
}
