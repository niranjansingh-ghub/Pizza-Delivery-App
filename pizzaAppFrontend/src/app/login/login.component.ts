import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { reg } from '../reg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginform:FormGroup

  constructor(private log:LoginService,private r:Router) { 
    this.loginform=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    })
  }

  ngOnInit(): void {
  }
  user:reg=new reg();
  fun1()
  {
    console.log("form is submitted");
      if ((this.loginform.value.email != '' && this.loginform.value.password != '') && (this.loginform.value.email != null && this.loginform.value.password != null)) {
        console.log("Form Eligble To Submit")
        this.user.email=this.loginform.value.email!;
        this.user.password=this.loginform.value.password;
        // Token Generate
        this.log.checkData(this.user).subscribe(
          (response:any) => {
            // if token generated successfully
            console.log("token login ",response.token);
            this.log.loginUser(response.token, this.user.email);
            alert("login sucessfully");
            this.log.isLoggedIn1=true;
            
            this.r.navigate(['/header2']);
          },
          error => {
            // if error occurs
            console.log(error);
          }
        )
      } else {
        console.log("Fields Are Empty")
      }
  }

  }



  export function customValid1(control:AbstractControl)
{
  if(control.value&&control.value.match("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$"))
  {
    return null;
  }
  else{
    return { myError1:false}
  }

}

    // const checkData = this.loginform.value;
    // this.log.checkData(checkData).subscribe(
    //   ()=>{
    //    this.r.navigate(["header2"]);
    //     alert("Login Successful");
             
    //      },
    //   ()=>{
    //    this.r.navigate(["registerurl"]);
    //     alert("E-mail or Password invalid");
    //   })
