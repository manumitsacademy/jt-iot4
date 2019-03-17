import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { CompanyService } from '../../company/company.service';
import { SocietyService } from '../../society/society.service';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {
  companies;
  societies;
  operationText:string;
  constructor(public fb:FormBuilder,public cS:CompanyService,public sS:SocietyService,
              public dS:DeviceService,public aR:ActivatedRoute,public http:HttpClient,
              public router:Router) {
    this.deviceForm = this.fb.group({
      deviceName:['',[Validators.required]],
      companyName:['',[Validators.required]],
      societyName:['',[Validators.required]],
      address:['',[Validators.required]],
      mac:['',[Validators.required]],
      tankHeight:['',[Validators.required]],
      tankCapacity:['',[Validators.required]],
      basicCutoff:['',[Validators.required]],
      criticalCutoff:['',[Validators.required]],
      _id:[],
      timestamp:[],
      status:[]

    });  
  }
  deviceForm:FormGroup;
  ngOnInit() {
       this.cS.getCompanies().subscribe((res)=>{this.companies=res});
       this.sS.getSocieties().subscribe((res)=>{console.log("this.societies=res",res);this.societies=res});
       this.aR.params.subscribe((res)=>{
         if(res.mac){
          this.operationText="Edit Device";
          this.dS.getDevices().subscribe((devices:any[])=>{
            var device=devices.filter((d)=>{return d.mac===res.mac});
            this.deviceForm.setValue(device[0]);        
          })
         }
         else{
          this.operationText="Add Device";
         }
       })
  }
  addDevice(){
    console.log("this.deviceForm",this.deviceForm.value)
    this.dS.addDevice(this.deviceForm.value).subscribe((res)=>{
      console.log(res);
      alert("Device Added Successfully");
      this.deviceForm.reset();
    })
  }
  updateDevice(){
    console.log("this.updateDevice")
    this.dS.updateDevice(this.deviceForm.value).subscribe((res)=>{
      alert("Updated Successfully")
      this.router.navigate(['deviceList'])
    })
  }
  deleteDevice(mac){

  }
}
