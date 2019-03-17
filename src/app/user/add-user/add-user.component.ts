
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { CompanyService } from '../../company/company.service';
import { SocietyService } from '../../society/society.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  companies;
  societies;
  userRoles=['superAdmin','admin','manager','user'];
  genderTypes=['Male','Female','Others'];
  operationText:string;
  constructor(public fb:FormBuilder,public cS:CompanyService,public sS:SocietyService,
              public uS:UserService,public aR:ActivatedRoute,public http:HttpClient,
              public router:Router) {
    this.userForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      emailid:['',[Validators.required]],
      password:['',[Validators.required]],
      gender:['',[Validators.required]],
      roleName:['',[Validators.required]],
      companyName:['',[Validators.required]],
      societyName:['',[Validators.required]],
      address:['',[Validators.required]],
      _id:[],
      timestamp:[],
      status:[],
      lastloggedin:[]

    });  
  }
  userForm:FormGroup;
  ngOnInit() {
       this.cS.getCompanies().subscribe((res)=>{this.companies=res});
       this.sS.getSocieties().subscribe((res)=>{console.log("this.societies=res",res);this.societies=res});
       this.aR.params.subscribe((res)=>{
         if(res.mac){
          this.operationText="Edit User";          
         }
         else{
          this.operationText="Add User";
         }
       })
  }
  addUser(){
    console.log("this.userForm",this.userForm.value)
    this.uS.addUser(this.userForm.value).subscribe((res)=>{
      console.log(res);
      alert("User Added Successfully");
      this.router.navigate(['userList'])
    })
  }
  updateUser(){
    console.log("this.updateDevice")
    this.uS.updateUser(this.userForm.value).subscribe((res)=>{
      alert("Updated Successfully")
      this.router.navigate(['userList'])
    })
  }
  deleteDevice(mac){

  }
 
}
