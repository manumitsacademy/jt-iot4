import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http:HttpClient) { }
  addUser(user){
    return this.http.post('http://52.66.157.24:4000/userData',user);
  }
  getUsers(){
    return this.http.get('http://52.66.157.24:4000/userData');
  }
  updateUser(user){    
    return this.http.put('http://52.66.157.24:4000/userData',user)
  }
  getUserRoles(){
    if(window.localStorage.getItem('roleName')==="superAdmin"){
      return ['admin','manager','user']
    }
    if(window.localStorage.getItem('roleName')==="admin"){
      return ['manager','user']
    }
    if(window.localStorage.getItem('roleName')==="manager"){
      return ['user']
    }
  }
}
