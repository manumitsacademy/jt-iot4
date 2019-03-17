import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.component.html',
  styleUrls: ['./deviceslist.component.css']
})
export class DeviceslistComponent implements OnInit {
  devices;
  constructor(public dS:DeviceService,public router:Router) { }
  societies;
  ngOnInit() {
    this.dS.getDevices().subscribe((res)=>{this.devices=res})
  }
  editDevice(mac){
    this.router.navigate(['editDevice',mac]);
  }
  deleteDevice(mac){

  }
}

