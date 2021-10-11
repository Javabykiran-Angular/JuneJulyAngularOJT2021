import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue JS','Embber Js','JSP'];

  ProductArr:any[]=[
    {
      name:"Motorola",
      price:30000,
      quantity:1
    },
    {
      name:"Samsung",
      price:20000,
      quantity:1
    },
    {
      name:"Realme",
      price:15000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:35000,
      quantity:1
    },
    {
      name:"Vivo",
      price:21000,
      quantity:1
    }
  ];
  

  selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse Over Event Occur....");
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("======= Mouse Out Event Occur...======");
    this.selected='';
  }

}
