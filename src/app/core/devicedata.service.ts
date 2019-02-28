import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicedataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  constructor(public http:HttpClient) {
   
   }
  getDeviceData(mac){
    return this.http.get(`http://52.66.157.24:4000/getDeviceData/${mac}`)
    //0xDE,0xAD,0xBE,0xEF,0xFE,0xEE
  }
  getDevicesMac(){
    return this.http.get(`http://52.66.157.24:4000/deviceData`);
  }
}

    