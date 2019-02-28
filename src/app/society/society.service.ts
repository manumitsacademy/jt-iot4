import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(public http:HttpClient) { }
  addSociety(society){
    console.log("Add Society in Socity service")
    return this.http.post('http://52.66.157.24:4000/societyData',society);
  }
  getSocieties(){
    console.log("All Society in Socity service")
    return this.http.get('http://52.66.157.24:4000/societyData');
  }
}
