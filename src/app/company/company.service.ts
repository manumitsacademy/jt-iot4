import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  addCompany(company){
    return this.http
    .post('http://ec2-52-66-255-20.ap-south-1.compute.amazonaws.com:4000/companyData',company)
  }
  getCompanies(){
    return this.http
    .get('http://ec2-52-66-255-20.ap-south-1.compute.amazonaws.com:4000/companyData')
  }
  
}
