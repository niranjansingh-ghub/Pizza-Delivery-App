import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dashboard02Service } from '../dashboard02.service';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

    registerform:FormGroup

    constructor(private reg:Dashboard02Service,private r:Router) {

      this.registerform=new FormGroup({
        email:new FormControl('',[Validators.required,customValid1]),
        username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      phoneNumber:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required])
      })
     }

  
    ngOnInit(): void {
    }
    fun1()
    {
      const regData2 = this.registerform.value;
      this.reg.regData(regData2).subscribe(() => {
       alert("successfully registered");
      // alert(+regData2.email)
       this.reg.setemail(regData2.email);

       this.registerform.reset();
       this.r.navigate(["/loginurl"]);
      },error => {
        alert(error)
      });
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
  
