import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginform: FormGroup;
  constructor(private formBuilder: FormBuilder,private aS:AuthenticationService) {
    this.loginform = this.formBuilder.group({
      email :'',
      password :''      
    });
  }
  ngOnInit() {
  }
  signup(){
    this.aS.signup(this.loginform.value).subscribe((res)=>{console.log(res)})
  }
}
