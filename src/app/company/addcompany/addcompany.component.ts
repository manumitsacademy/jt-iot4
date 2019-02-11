import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})

export class AddcompanyComponent implements OnInit {

  constructor(private fb:FormBuilder,private cS:CompanyService) { }
  companyForm: FormGroup;
  submitted=false; 
  ngOnInit() {      
      this.companyForm = this.fb.group({
      companyName : ['',Validators.required],
      address: ['',Validators.required],
      gstNumber: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      contactperson:  ['',Validators.required],
      phonenumber: ['', Validators.required],
    });
  }
 
  get f() { return this.companyForm.controls; }

  addCompany(){
    this.submitted = true;
    if (this.companyForm.invalid) 
    {
      return;
    }
    this.cS.addCompany(this.companyForm.value).subscribe((res)=>{
      console.log(res);
      alert("Company Added Successfully!!");
      this.companyForm.reset();
    });
  }
}
