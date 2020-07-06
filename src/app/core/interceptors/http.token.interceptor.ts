import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthorizationService } from '../services/authorization/authorization.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  authPrefix: string;

  constructor(private auth: AuthorizationService) {
    this.authPrefix =
      /** condition is:
       * If we have some specific auth prefix we use it,
       * Else we use default JWT (json web token) prefix - 'Bearer' */
      environment && environment['AUTH_KEY']
        ? environment['AUTH_KEY']
        : 'Bearer';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add auth-token to http-header if available
    const tokenExists = this.auth && this.auth.getAccessToken();
    if (tokenExists) {
      request = request.clone({
        setHeaders: {
          'Authorization': `${this.authPrefix} ${tokenExists}`
        }
      });
    }
    return next.handle(request);
  }
}
