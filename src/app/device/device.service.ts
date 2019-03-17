import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(public http:HttpClient) { }
  addDevice(device){
    return this.http.post('http://52.66.157.24:4000/deviceData',device);
  }
  getDevices(){
    return this.http.get('http://52.66.157.24:4000/deviceData');
  }
  updateDevice(device){    
    return this.http.put('http://52.66.157.24:4000/deviceData',device)
  }
}
