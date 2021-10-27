import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string='Sumit Raokhande';

  myjson={
    id:8,
    name:'sumit',
    status:'Active'
  }

  constructor() { }

  ngOnInit() {
  }

}
