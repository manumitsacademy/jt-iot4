import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../society.service';

@Component({
  selector: 'app-societylist',
  templateUrl: './societylist.component.html',
  styleUrls: ['./societylist.component.css']
})
export class SocietylistComponent implements OnInit {

  constructor(public sS:SocietyService) { }
  societies;
  ngOnInit() {
    this.sS.getSocieties().subscribe((res)=>{console.log("this.societies=res",res);this.societies=res})
  }
}
