import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../society.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-societylist',
  templateUrl: './societylist.component.html',
  styleUrls: ['./societylist.component.css']
})
export class SocietylistComponent implements OnInit {

  operationText: string;
  constructor(public sS:SocietyService,public aR:ActivatedRoute, public router:Router) { }
  societies;
  ngOnInit() {
    this.sS.getSocieties().subscribe((res)=>{console.log("this.societies=res",res);this.societies=res})
    
  }
  editSocity(societyRegNumber){
    this.router.navigate(['editSociety',societyRegNumber]);
  }
}
