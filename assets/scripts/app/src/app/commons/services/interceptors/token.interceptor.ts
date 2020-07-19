import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(
      private auth: AuthService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      req = req.clone({
          setHeaders: {
              Authentication: `Bearer ${this.token()}`
          }
      });

      return next.handle(req);
  }
   
  token() {
      return this.auth.getToken();
  }
}