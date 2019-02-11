import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms'
import { CompanyService } from '../../company/company.service';
import { SocietyService } from '../society.service';

@Component({
  selector: 'app-addsociety',
  templateUrl: './addsociety.component.html',
  styleUrls: ['./addsociety.component.css']
})
export class AddsocietyComponent implements OnInit {

  societyForm : FormGroup;
  constructor(public fb : FormBuilder,public cS:CompanyService,public sS:SocietyService) { }
  submitted=false;
  companies;
  ngOnInit() {
    this.cS.getCompanies().subscribe((res)=>{
      this.companies=res;
    })
    this.societyForm = this.fb.group({
      societyName : ['',Validators.required],
      address: ['',Validators.required],
      societyRegNumber: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      contactperson:  ['',Validators.required],
      companyName:['',Validators.required],
      phonenumber: ['',Validators.required]

    })
  }
  get f() { return this.societyForm.controls; }

  addSociety() {
    this.sS.addSociety(this.societyForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

}
