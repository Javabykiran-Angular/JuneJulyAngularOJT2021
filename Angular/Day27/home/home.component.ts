import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Username:string="";
  constructor(private router:Router) { }

  ngOnInit() {
      this.Username=sessionStorage.getItem("username");
  }

  onLogout(){
    sessionStorage.clear();
    sessionStorage.removeItem("username");
      this.router.navigate(["/login"]);
  }

}
