import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor(public cS:CompanyService) { }
  companies;
  ngOnInit() {
    this.cS.getCompanies().subscribe((res)=>{this.companies=res})
  }

}
