import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './auth.guard';
import { DeviceDetailsComponent } from './dashboard/device-details/device-details.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch: 'full' , 
    canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'deviceDetails',
    component:DeviceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
