import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpGlobalErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url, method } = request;
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const {
          status,
          statusText
        } = error;

        alert(`[${status} ${statusText.toLocaleUpperCase()}]: ${method}:${url}`);

        return EMPTY;
      })
    );
  }
}
