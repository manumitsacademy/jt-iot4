import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes.user';
import { UserlistComponent } from './userlist/userlist.component';
@NgModule({
  declarations: [AddUserComponent, UserlistComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
