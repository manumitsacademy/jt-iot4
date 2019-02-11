import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.component.html',
  styleUrls: ['./deviceslist.component.css']
})
export class DeviceslistComponent implements OnInit {
  devices;
  constructor(public dS:DeviceService) { }
  societies;
  ngOnInit() {
    this.dS.getDevices().subscribe((res)=>{this.devices=res})
  }
}
