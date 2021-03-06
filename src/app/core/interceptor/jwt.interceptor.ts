import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${currentUser.token}`,
        'Accept-Language': '1'
      });

      // request = request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${currentUser.token}`,
      //   },
      // });
      request=  request.clone({headers});
    }

    return next.handle(request);
  }
}
