import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddsocietyComponent } from './addsociety/addsociety.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes} from './routes.society'
import { HttpClientModule } from '@angular/common/http';
import { SocietylistComponent } from './societylist/societylist.component';

@NgModule({
  declarations: [AddsocietyComponent, SocietylistComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), HttpClientModule,FormsModule,ReactiveFormsModule
  ]
})
export class SocietyModule { }
