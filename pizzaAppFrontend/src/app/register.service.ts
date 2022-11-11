import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerClass } from './customerClass';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  url4="http://localhost:9000/api/v2/register";
  storeData(regData2: customerClass): Observable<customerClass>{
    console.log("register user is working");
    return this.httpClient.post<customerClass>(`${this.url4}`,regData2,{responseType:'text' as 'json'});
  }
 
  // url4="http://localhost:9000/api/v2/register";
  // storeData(regData2: reg2): Observable<reg2>{
  //   return this.httpClient.post<reg2>(`${this.url4}`,regData2,{responseType:'text' as 'json'});
  // }

  // userRegUrl: string = "http://localhost:8089/api/v2";

  // registerUser(data: SignupClass) {
  //   console.log("register user is working");
    
  //   return this.httpClient.post<any>(this.userRegUrl+"/register", data);
  // }
}
