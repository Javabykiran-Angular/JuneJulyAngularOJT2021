import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string="http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }

  LoginCheck(loginobj){
    return  (this.http.post(`${this.BaseUrl}logincheck`,loginobj));
  }

  getAllEmployee(){
    return (this.http.get(`${this.BaseUrl}getallemployee`));
  }



}
