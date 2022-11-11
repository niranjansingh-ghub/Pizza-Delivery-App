import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reg } from './reg';
import { customerClass } from './customerClass';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  url="http://localhost:9000/api/v1/login";

  checkData(logData1:reg): Observable<reg> {
  return this.httpClient.post<reg>(`${this.url}`,logData1,{responseType:'text' as 'json'});
  }
  reqHeader =new HttpHeaders().set('Authorization','Bearer '+window.localStorage.getItem('token'));

  isLoggedIn1:boolean=false;

  // isLoggedIn(){
  //   let token=localStorage.getItem("token");
  //   if(token==undefined || token==='' || token==null){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  loginUser(token:any, email: any){
    localStorage.setItem("token",token);
    localStorage.setItem("email", email);
   
    return true;
  }
  
  // url1="http://localhost:9000/api/v2/register";
  // storeData(regData2: customerClass): Observable<customerClass>{
  //   return this.httpClient.post<customerClass>(`${this.url1}`,regData2,{responseType:'text' as 'json'});
  // }
  // url2="http://localhost:9000/api/v1/userservice/users";
  // getAllUsers() :Observable<reg>{
  //  return this.httpClient.get<reg>(`${this.url2}`);
  // }
  
}
