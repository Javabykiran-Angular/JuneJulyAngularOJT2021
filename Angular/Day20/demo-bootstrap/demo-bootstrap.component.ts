import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  arrObj=[
    {
      name:"Dell",
      price:44000,
      model:'i3 2.4GHz 8GB'
    },
    {
      name:"Hp",
      price:40000,
      model:'i3 2.4GHz 8GB'
    },
    {
      name:"Acer",
      price:38000,
      model:'i3 2.1GHz 4GB'
    },
    {
      name:"Apple",
      price:94000,
      model:'i7 3.2 GHz 12GB'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
