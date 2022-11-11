import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Dashboard2Service } from '../dashboard2.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  pizzaform:any;
  constructor(private dashboard2Service:Dashboard2Service) {
    

    this.pizzaform={
      pizzId:'',
      pizzaName:'',
      topping:'',
      size:'',
      quantity:''
    }
   }

  ngOnInit(): void {
  }

  addedPizza:any;

  onPlaceOrder(data:any){
    console.log(data);
    alert("Order Placed Successfully.")
    console.log("add content is working");
    // console.log(pizzaform);

    this.dashboard2Service.addPizza(data).subscribe(
      a=>{
        this.addedPizza=a;
        confirm("Pizza Added");
        window.localStorage.setItem('pizzaId',this.pizzaform.pizzaId);
        console.log(a);
        // this.getAllContent();
      },(error)=>{
        console.log(error);
        
      }
    )
  };

  pizzas:any;

  getAllPizzas(){
    
    console.log("Showing user orders");
    // console.log("what your are printing12->",localStorage.getItem("emailId"));
   this.dashboard2Service.getAllPizzas().subscribe(
    a=>{
      this.pizzas=a;
      
      console.log("your order details",a);
    },
    (error)=>{
      console.log(error);
      
    }
   )
  };
 
  
  logout(){
    window.localStorage.clear();
    confirm("Succesfully LogOut")
  }
}
