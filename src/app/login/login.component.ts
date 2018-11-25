import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seeker } from '../seeker';
import {Router} from '@angular/router';
import { SeekerService } from '../seeker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  seek:Seeker=new Seeker();
  res:boolean;
  constructor(private FB: FormBuilder,private router: Router, private service : SeekerService) { }
  loginForm: FormGroup;

 

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.FB.group({
  email: ['', [Validators.required, 
  Validators.pattern("[a-z0-9]{4,12}")]],
  password : ['', Validators.required]
    });

  }

  login () {
    console.log(this.loginForm.value);
  }


  onSubmit(obj){
    this.seek.username=obj.email;
    this.seek.password=obj.password;
  
     
   // if (this.loginForm.invalid) {
     // return;
  //}
    this.service.requestLogin(this.seek.username,this.seek.password).subscribe( data =>{
      this.res=data;
      if(this.res==true)
      {
        alert("User login SuccessFully."); 
      }
      else alert("login failed");
      
    });
}

}