import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService , private toast:NgToastService , private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    if(myToken){
      request.clone({
        
       setHeaders:{Authorization:'Bearer ${myToken}'}

      })
    }
    return next.handle(request).pipe(
      catchError((err:any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
          this.toast.warning({ detail: "warning", summary: 'session expired' })
            this.router.navigate(['login'])
          }
          if (err.status === 400) {
            this.toast.error({ detail: "ERROR", summary: err?.error.message, duration: 15000 });
           }
           if (err.status === 404) {
            //this.toast.error({ detail: "ERROR", summary: 'UserName not exist', duration: 15000 });
            this.toast.error({ detail: "ERROR", summary: err?.error.message, duration: 15000 });
          }
          if (err.status === 500) {
            this.toast.error({ detail: "ERROR", summary: "Error Connect Data base", duration: 15000 });
          }
        }
        return throwError(()=> new Error("Some other error occured"))
      })
    );


  }
}
