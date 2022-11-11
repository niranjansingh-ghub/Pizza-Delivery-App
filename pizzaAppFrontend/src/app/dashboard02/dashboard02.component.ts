import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Dashboard02Service } from '../dashboard02.service';
import { customerClass } from '../customerClass';
import { pizzaClass } from '../pizzaClass';

@Component({
  selector: 'app-dashboard02',
  templateUrl: './dashboard02.component.html',
  styleUrls: ['./dashboard02.component.css']
})
export class Dashboard02Component implements OnInit {

  pizzaData:FormGroup

  constructor(private pizza:Dashboard02Service, private route:Router) {
    this.pizzaData = new FormGroup({
      pizzaName : new FormControl(''),
      topping : new FormControl(''),
      size : new FormControl(''),
      quantity : new FormControl(''),
      price : new FormControl(''),
      details : new FormControl(''),
      image : new FormControl(''),

    })
  }
 
  ngOnInit(): void {
    
    this.pizza.getemail();
    this.pizza.getAllPizzas().subscribe(
      a=>{
   
        this.pizzaUser.email=a.email;
        this.pizzaUser.username=a.username;
        this.pizzaUser.password=a.password;
        this.pizzaUser.phoneNumber=a.phoneNumber;
        this.pizzaUser.address=a.address;
       
        this.pizzaUser.pizzaList=a.pizzaList;
        console.log("Pizza details",a);
      },
      (error)=>{
        console.log(error);
      }
     )
  }
  pizzaUser:customerClass=new customerClass();
  pizzaList:pizzaClass=new pizzaClass();
  
  getAllPizza() {
    console.log("data")

   console.log("Showing user pizza details");
  //  this.pizzaList.pizzaId=this.pizzaData.value.pizzaId;
   this.pizzaList.pizzaName=this.pizzaData.value.pizzaName;
   this.pizzaList.topping=this.pizzaData.value.topping;
   this.pizzaList.size=this.pizzaData.value.size;
   this.pizzaList.quantity=this.pizzaData.value.quantity;
   this.pizzaList.price=this.pizzaData.value.price;
   this.pizzaList.details=this.pizzaData.value.details;
   this.pizzaList.image=this.pizzaData.value.image;

   alert("Your Order is Successfully added")
   
  this.pizza.addPizzas(this.pizzaList).subscribe(response=>{

    console.log(response);
    this.pizzaUser=<customerClass>response;
    console.log(this.pizzaUser);
  })

  }

  deleteFromPIzzaList(pizzaName:string){
    this.pizza.deleteFromPIzzaList(pizzaName).subscribe(
      response => {
        alert("your order is succesfully deleted")
              console.log("deleted")
              console.log(response);
             
              window.location.reload();
            },
            error => {
              console.log("error ")
              console.log(error);
            }
    );

  }

}

  //this.pizza.addPizzas(this.pizzaList);

  //  .subscribe(response=>
  //   {
  //   //this.pizza1=<reg2>x;
  //   console.log("pizzax"+response);
  //   // console.log("pizzax"+x)
  //   // alert("pizza created"+x.pizzaId)
  //  });
