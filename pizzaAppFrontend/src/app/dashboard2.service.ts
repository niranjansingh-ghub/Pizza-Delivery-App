import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dashboard2Service {

  constructor(private httpClient: HttpClient) { }

  url : string="http://localhost:9000/api/v2/user/";

reqHeader =new HttpHeaders().set('Authorization','Bearer '+window.localStorage.getItem('token'));

getAllPizzas(){
  console.log(localStorage.getItem("email"));
  console.log("getallPizzas from ts is working");
    return this.httpClient.get<any>(this.url+window.localStorage.getItem("email")+"/pizzas",{'headers':this.reqHeader});
  }


  addPizza(data:any){
    console.log();
    
    console.log(localStorage.getItem("email"));
    return this.httpClient.post<any>(this.url+localStorage.getItem("email")+"/pizza",data,{'headers':this.reqHeader});
  }

  // deletePizza(data:any){
  //   console.log("deleted");
  //   console.log(localStorage.getItem("pizzaList.pizzaId"));
  //   return this.httpClient.delete<any>(this.url+localStorage.getItem("email")+"/"+localStorage.getItem("pizzaId"),{'headers':this.reqHeader});

  // }
 
}
