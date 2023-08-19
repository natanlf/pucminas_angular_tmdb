import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../config/api';

@Injectable()
export class MoviesApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("INTERCEPTOR");

    const cloneReq = request.clone({
      url: `${apiConfig.BASE_URL}${request.url}`,
      headers: new HttpHeaders({
        Authorization: `Bearer ${apiConfig.API_KEY}`
      })
    })
    return next.handle(cloneReq);
  }
}

export const movieApiInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MoviesApiInterceptor,
    multi: true
  }
]
