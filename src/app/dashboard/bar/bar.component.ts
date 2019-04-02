import { Component, OnInit, Input } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  ngAfterContentChecked(){
    this.changeBar(this.waterHeight)
  }
  @Input() deviceId;
  @Input() waterHeight;
  changeBar(level=0){
    var s = "#"+this.deviceId+" "+".mySvg rect";
    var el=d3.select(s);
      el.transition().duration(10)
      .attr('x',0).attr('y',100-level-0).attr('height',level).attr('width',50)     
      .attr('fill',()=>{
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
}
