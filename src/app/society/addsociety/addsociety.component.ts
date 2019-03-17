import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms'
import { CompanyService } from '../../company/company.service';
import { SocietyService } from '../society.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addsociety',
  templateUrl: './addsociety.component.html',
  styleUrls: ['./addsociety.component.css']
})
export class AddsocietyComponent implements OnInit {

  operationText: string;
  societyForm : FormGroup;
  constructor(public fb : FormBuilder,public cS:CompanyService,public sS:SocietyService,
              public aR:ActivatedRoute) {
                this.societyForm = this.fb.group({
                  societyName : ['',Validators.required],
                  address: ['',Validators.required],
                  societyRegNumber: ['',Validators.required],
                  email: ['',[Validators.required,Validators.email]],      
                  companyName:['',Validators.required],
                  phonenumber1: ['',Validators.required],
                  contactperson1:['',Validators.required],
                  phonenumber2: ['',Validators.required],
                  contactperson2:['',Validators.required],
                  phonenumber3: ['',Validators.required],
                  contactperson3:  ['',Validators.required],
                  _id:[],
                  timestamp:[],
                  status:[]           
                })
              }
  submitted=false;
  companies;
  ngOnInit() {
    this.cS.getCompanies().subscribe((res)=>{
      this.companies=res;
    })    
    this.aR.params.subscribe((res)=>{
      if(res.regNumber){
       this.operationText="Edit Society";
       this.sS.getSocieties().subscribe((societies:any[])=>{
         var society=societies.filter((d)=>{return d.societyRegNumber===res.regNumber});
         this.societyForm.setValue(society[0]);        
       })
      }
      else{
       this.operationText="Add Society";
      }
    })
  }
  get f() { return this.societyForm.controls; }

  addSociety() {
    this.sS.addSociety(this.societyForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

}
