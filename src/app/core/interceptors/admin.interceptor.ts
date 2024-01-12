import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const adminToken = localStorage.getItem('adminToken')
    const cloneRequest = request.clone({
      setHeaders: {
        Authorization: `bearer ${adminToken}`
      }
    })
    return next.handle(cloneRequest);
  }
}
