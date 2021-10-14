import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

    ChildStrData:string='';
    ChildJsonData={};

    @Output() ParentNumberEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnSend(value){
    this.num=+value;
  }

  OnChildEvent(data){
    console.log(data);
    this.ParentNumberEvent.emit(data);
  }

}
