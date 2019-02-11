import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicedataService } from '../../core/devicedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allDevices;
  constructor(private http:HttpClient,private ddS:DevicedataService){}
  ngOnInit(){
    this.ddS.getDevicesMac().subscribe((res)=>{this.allDevices=res;console.log("Homecomponent",res)});
  }
}