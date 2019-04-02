import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DevicepanelComponent } from './devicepanel/devicepanel.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { BarComponent } from './bar/bar.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }
];
@NgModule({
  declarations: [HomeComponent, DevicepanelComponent, DeviceDetailsComponent, BarComponent],
  imports: [
    CommonModule,NgxGaugeModule,FormsModule,HttpClientModule,RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
