import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerClass } from './customerClass';
import { pizzaClass } from './pizzaClass';

@Injectable({
  providedIn: 'root'
})
export class Dashboard02Service {

  constructor(private httpClient:HttpClient) { }
  
  url="http://localhost:9000/api/v2/register";
  regData(regData2: customerClass): Observable<customerClass>{
    return this.httpClient.post<customerClass>(`${this.url}`,regData2,{responseType:'text' as 'json'});
  }

  setemail(email:string) {

      localStorage.setItem("email",email);
      return true;
  }
  getemail() {
  
    return localStorage.getItem("email");
  }

  url2 : string="http://localhost:9000/api/v2/order/"+this.getemail();
  get() {
    alert(this.url2);
  }
  reqHeader =new HttpHeaders().set('Authorization','Bearer '+window.localStorage.getItem('token'));

  getAllPizzas() {
    console.log(localStorage.getItem("email"));
  
      return this.httpClient.get<customerClass>(this.url2);
    }

  url5: string="http://localhost:9000/api/v2/user/";

  addPizzas(data:pizzaClass){
      
      console.log(localStorage.getItem("email"));
     return this.httpClient.post<customerClass>(this.url5+localStorage.getItem("email")+"/pizzaList",data)

    }


    url9:string="http://localhost:9000/api/v2/delete/";

    public deleteFromPIzzaList( pizzaName: string) { 
      console.log(localStorage.getItem("email"));
      return this.httpClient.delete<any>(this.url9+localStorage.getItem("email")+"/"+pizzaName,{'headers':this.reqHeader});
    }
}
