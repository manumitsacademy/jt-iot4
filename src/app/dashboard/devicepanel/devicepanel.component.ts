import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicedataService } from '../../core/devicedata.service';
import { Input } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-devicepanel',
  templateUrl: './devicepanel.component.html',
  styleUrls: ['./devicepanel.component.css']
})
export class DevicepanelComponent implements OnInit {
  l: string;
  tanklevelSvgFlag=false;
  x=90;
  svgWidth=100;
  svgHeight=100;
  drawBar(level=1){
      var el=d3.select('.mySvg');
        el.attr('width',this.svgWidth)
        .attr('height',this.svgHeight)
        .append('rect')
        .attr('x',0)
        .attr('y',this.svgHeight-level-0)
        .attr('width',100)
        .attr('height',level)      
  }
  changeBar(level=0){
     
    //console.log("this.tanklevelSvgFlag",this.tanklevelSvgFlag)
    var el=d3.select('.mySvg rect');
      el.transition()
      .duration(1000)
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

  @Input() mac;
  @Input() deviceName;
  @Input() tankHeight;
  @Input() tankCapacity;

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
  mylevel=0;
  ngOnInit(){
    //console.log("ngOninit called")
    this.motorSwitchFlag=true;
    this.stopGettingDataFlag=setInterval(this.getDeviceData.bind(this),2000);
    this.username=window.localStorage.getItem('username');
  }
  ngAfterContentChecked() {    
    //console.log("this.tanklevelSvgFlag",this.tanklevelSvgFlag)
    this.drawBar();
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
    console.log("DEstro");
    this.deviceDataUnsubscriptionFlag.unsubscribe();
    clearInterval(this.stopGettingDataFlag);
  }
}
