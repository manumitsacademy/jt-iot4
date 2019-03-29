import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicedataService } from '../../core/devicedata.service';
import { Input } from '@angular/core';
import * as d3 from "d3";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  deviceName: any;
  tankHeight: number;
  tankCapacity: any;
  l: string;
  mac;
  tanklevelSvgFlag=false;
  x=90;
  svgWidth=100;
  svgHeight=100;
  
  changeBar(level=0){
    console.log(level)
    var el=d3.select('.mySvg rect');
      el.transition()
      .duration(2000)
      .attr('y',this.svgHeight-level-0)
      .attr('height',level)      
      .attr('fill',()=>{
        this.tanklevelSvgFlag=false; 
        if(level<35){
            return 'red'
        }
        if(level<60){
          return 'orange'
        }
        if(level<90){
          return 'lightgreen'
        }
        if(level=>90){
          return 'green'
        }
      })          
      
  }
  constructor(private http:HttpClient,private ddS:DevicedataService, private aR:ActivatedRoute){}
  loginstatus=true;
  data;
  macid;
  h;
  t;
  username;
  motorSwitch:boolean=true;
  deviceStatusFlag;
  deviceDataUnsubscriptionFlag:any;
  stopGettingDataFlag;
  inletValveStatus=false;
  motorSwitchFlag=false;
  resetStatusFlag=false;
  mylevel=0;
  ngOnInit(){
    //console.log("ngOninit called")
    this.aR.queryParams.subscribe((res)=>{
      console.log(res)
      this.mac = res.mac;
      this.deviceName = res.deviceName;
      this.tankHeight = res.tankHeight;
      this.tankCapacity = res.tankCapacity;
    })
    this.motorSwitchFlag=true;
    this.stopGettingDataFlag=setInterval(this.getDeviceData.bind(this),3000);
    this.username=window.localStorage.getItem('username');
  }
  ngAfterViewInit(){
   
  }
  ngAfterContentChecked() {    
    //console.log("this.tanklevelSvgFlag",this.tanklevelSvgFlag)
    //this.changeBar();
  }
  getDeviceData(){
      //console.log("getDeviceData 1st",this.mac)
    this.deviceDataUnsubscriptionFlag=this.ddS.getDeviceData(this.mac).subscribe((res)=>{
      //console.log("getDeviceData after subscribe")
      this.data=res;
      if(this.data[0]){
        this.data[0]['RL1']=parseInt(this.data[0]['RL1']);
        this.data[0]['RL2']=parseInt(this.data[0]['RL2']);
        this.data[0]['RL3']=parseInt(this.data[0]['RL3']);    
        this.data[0]['VR']=parseInt(this.data[0]['VR']);
        this.data[0]['VY']=parseInt(this.data[0]['VY']);
        this.data[0]['VB']=parseInt(this.data[0]['VB']);           
        this.data[0]['IR']=parseInt(this.data[0]['IR']);           
        this.data[0]['IY']=parseInt(this.data[0]['IY']);           
        this.data[0]['IB']=parseInt(this.data[0]['IB']);           
      }
      
      if(res[0]){
        this.deviceStatusFlag=res[0].SERVER;
        if(res[0].SERVER=="1"){      
          this.h=(100-((res[0]['LEVEL']-21)/(this.tankHeight/100))).toFixed(2);
          this.l = ((this.tankCapacity*this.h)/100).toFixed(2)
          this.tanklevelSvgFlag=false;  

          this.changeBar(this.h)
          this.t=res[0]['LEVEL'];
          this.macid=res[0]['MAC']
          this.motorSwitch=res[0]['STATUS'];
          this.inletValveStatus=res[0]['IVS'];
          //console.log(this.h,this.t)        
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
    '0': {color: 'red'},
    '230': {color: 'rgb(0,150,140)'},
    '250': {color: 'red'}
  };

  motorRestart(relayid){
    this.motorSwitchFlag=false;
    var relayStatus=this.data[0][relayid]?1:0;
    this.http.get(`http://52.66.157.24:4000/deviceCommand/${this.mac}/${relayid}/${relayStatus}/gubbalapraveen@gmail.com`)
      .subscribe((res)=>{
        alert("Motor Restated")
        //console.log(res);
      });
  }
  resetDevice(){
    this.resetStatusFlag=false;
    this.http.get(`http://52.66.157.24:4000/command/${this.mac}/reset/gubbalapraveen`)
      .subscribe((res)=>{
        //console.log(res);
      });
  }
  ngOnDestroy(){
    this.deviceDataUnsubscriptionFlag.unsubscribe();
    clearInterval(this.stopGettingDataFlag);
  }
}
