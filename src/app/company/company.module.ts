import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanylistComponent } from './companylist/companylist.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { RouterModule } from '@angular/router';
import {routes} from './routes.company'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [CompanylistComponent, AddcompanyComponent, EditcompanyComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),HttpClientModule,FormsModule,ReactiveFormsModule
  ]
})
export class CompanyModule { }
