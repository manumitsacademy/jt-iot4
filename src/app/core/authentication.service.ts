import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userStatusEvent$;
  constructor(public http:HttpClient,private myRoute: Router) { 
    this.userStatusEvent$=new EventEmitter();
  }
  login(credentials){
    return this.http.post('http://52.66.157.24:4000/login',credentials)    
  }
  signup(credentials){
    return this.http.post('http://52.66.157.24:4000/signup',credentials)    
  }
  emitUserStatus(status){    
    this.userStatusEvent$.emit({loginstatus:status});
  }
  logout() {
    localStorage.removeItem("token");
    this.myRoute.navigate(["login"]);
  }
  
}
