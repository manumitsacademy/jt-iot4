import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  addCompany(company){
    return this.http
    .post('http://52.66.157.24:4000/companyData',company)
  }
  getCompanies(){
    return this.http
    .get('http://52.66.157.24:4000/companyData')
  }
  
}
