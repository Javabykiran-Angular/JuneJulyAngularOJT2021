import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Username:string="";
  EmpData:any[]=[];
  constructor(private router:Router,
              private service:HttpService) { }

  ngOnInit() {
      this.Username=sessionStorage.getItem("username");
      this.GetAllEmployee();
  }

  GetAllEmployee(){
      this.service.getAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response);
      })
  }

  onLogout(){
    sessionStorage.clear();
    sessionStorage.removeItem("username");
      this.router.navigate(["/login"]);
  }

}
