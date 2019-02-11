import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { CompanyService } from '../../company/company.service';
import { SocietyService } from '../../society/society.service';
import { DeviceService } from '../device.service';
@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {
  companies;
  societies;
  constructor(public fb:FormBuilder,public cS:CompanyService,public sS:SocietyService,public dS:DeviceService) {
    this.deviceForm = this.fb.group({
      deviceName:['',[Validators.required]],
      companyName:['',[Validators.required]],
      societyName:['',[Validators.required]],
      address:['',[Validators.required]],
      mac:['',[Validators.required]],
      tankHeight:['',[Validators.required]]
    });  
  }
  deviceForm:FormGroup;
  ngOnInit() {
       this.cS.getCompanies().subscribe((res)=>{this.companies=res});
       this.sS.getSocieties().subscribe((res)=>{console.log("this.societies=res",res);this.societies=res});
  }
  addDevice(){
    console.log("this.deviceForm",this.deviceForm.value)
    this.dS.addDevice(this.deviceForm.value).subscribe((res)=>{
      console.log(res);
      alert("Device Added Successfully");
      this.deviceForm.reset();
    })
  }

}
