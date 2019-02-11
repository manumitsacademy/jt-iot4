import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { DeviceslistComponent } from './deviceslist/deviceslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes.device'
@NgModule({
  declarations: [AdddeviceComponent, DeviceslistComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class DeviceModule { }
