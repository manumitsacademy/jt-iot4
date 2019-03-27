import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  operationText: string;
  constructor(public uS:UserService,public aR:ActivatedRoute, public router:Router) { }
  users;
  ngOnInit() {
    this.uS.getUsers().subscribe((res)=>{console.log("this.users=res",res);this.users=res;})
    
  }
  editSocity(emailid){
    this.router.navigate(['editUser',emailid]);
  }

}
