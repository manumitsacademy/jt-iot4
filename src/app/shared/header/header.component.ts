import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public as:AuthenticationService) { }
  loginstatus=false;
  roleName;
  ngOnInit() {
    if(window.localStorage.getItem('token')){
      this.loginstatus=true;
      this.roleName = window.localStorage.getItem('roleName');
    }
    this.as.userStatusEvent$.subscribe((res)=>{     
      this.loginstatus=res.loginstatus;
      this.roleName = window.localStorage.getItem('roleName');
    });
  }
  logout(e){
    //alert("You have clicked the anchor-1 tag");
    window.localStorage.clear();
    this.as.emitUserStatus(false);

  }

}
