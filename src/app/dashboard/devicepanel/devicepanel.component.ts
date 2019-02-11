import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicedataService } from '../../core/devicedata.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-devicepanel',
  templateUrl: './devicepanel.component.html',
  styleUrls: ['./devicepanel.component.css']
})
export class DevicepanelComponent implements OnInit {

  @Input() mac;
  @Input() deviceName;
  @Input() tankHeight;
  constructor(private http:HttpClient,private ddS:DevicedataService){}
  loginstatus=true;
  data;
  macid;
  h;
  t;
  username;
  motorSwitch:boolean=true;
  deviceStatusFlag;
  deviceDataUnsubscriptionFlag;
  stopGettingDataFlag;
  inletValveStatus=false;
  motorSwitchFlag=false;
  resetStatusFlag=false;
  ngOnInit(){
    this.motorSwitchFlag=true;
    this.stopGettingDataFlag=setInterval(this.getDeviceData.bind(this),10000);
    this.username=window.localStorage.getItem('username');
  }
  getDeviceData(){
    console.log("getDeviceData 1st")
    this.deviceDataUnsubscriptionFlag=this.ddS.getDeviceData(this.mac).subscribe((res)=>{
      console.log("getDeviceData after subscribe")
      console.log(res);
      this.data=res;
      if(res[0]){
        this.deviceStatusFlag=res[0].deviceStatus;
        if(res[0].deviceStatus==='true'){      
          this.h=(100-((res[0]['level']-21)/(this.tankHeight/100))).toFixed(2);
          this.t=res[0]['level'];
          this.macid=res[0]['mac']
          this.motorSwitch=res[0]['switch'];
          this.inletValveStatus=res[0]['IVS'];
          console.log(this.h,this.t)        
          this.motorSwitchFlag=true;
          this.resetStatusFlag=true;
        }
      }
      
    });  
  }
  title = 'myapp';
  gaugeType = "arch";
  cap = 'round'
  thick = 5
  humidityLabel = "Water Level";
  humidityAppendText = "%";
  temperatureLabel = "Temperature";
  temperatureAppendText = "C";
  threshold = {
    '20': {color: 'red'},
    '30': {color: 'orange'},
    '60': {color: 'rgb(0,150,140)'}
  };

  motorRestart(){
    this.motorSwitchFlag=false;
    this.http.get(`http://ec2-52-66-255-20.ap-south-1.compute.amazonaws.com:5002/command/${this.mac}/${this.motorSwitch}/gubbalapraveen`)
      .subscribe((res)=>{
        console.log(res);
      });
  }
  resetDevice(){
    this.resetStatusFlag=false;
    this.http.get(`http://ec2-52-66-255-20.ap-south-1.compute.amazonaws.com:5002/command/${this.mac}/reset/gubbalapraveen`)
      .subscribe((res)=>{
        console.log(res);
      });
  }
  /*ngOnDestroy(){
    console.log("DEstro");
    this.deviceDataUnsubscriptionFlag.unsubscribe();
    clearInterval(this.stopGettingDataFlag);
  }*/
}
