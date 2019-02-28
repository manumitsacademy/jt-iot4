import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { CoreModule } from './core/core.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { CompanyModule } from './company/company.module';
import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';
import { SocietyModule } from './society/society.module';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor } from './core/jwt-interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    CoreModule,
    DashboardModule,
    CompanyModule,
    DeviceModule,
    UserModule,
    SocietyModule    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
