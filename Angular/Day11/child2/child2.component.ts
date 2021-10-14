import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() ChildStrEvent=new EventEmitter();

  @Output() ChildJsonEvent=new EventEmitter();

  strData:string="Data From Child..";

  myjson={
    id:9,
    name:'Sumit',
    status:true
  }

  constructor() { }

  ngOnInit() {
  }
  onSend(){
    this.ChildStrEvent.emit(this.strData);
    this.ChildJsonEvent.emit(this.myjson);
  }

}
