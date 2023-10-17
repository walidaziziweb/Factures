import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService ,private router:Router ,private toast:NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true 
    }else {
      this.toast.error({ detail: "ERROR", summary: "Please login First !!" });
      this.router.navigate(['login'])
      return false;
    }
  }
  logout(){
    
  }
}
