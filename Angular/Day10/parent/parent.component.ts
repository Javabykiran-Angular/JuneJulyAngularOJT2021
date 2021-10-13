import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    strdata:string='Parent String data';

    jsonObj={
      id:9,
      name:'sumit',
      status:true

    }
    num:number;

  constructor() { }

  ngOnInit() {
  }

  OnSend(value){
    this.num=+value;
  }

}
