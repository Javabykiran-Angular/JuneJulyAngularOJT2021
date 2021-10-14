import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

   @Output() ChildNumberEvent=new EventEmitter();

  mynumber:number=8;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
      this.ChildNumberEvent.emit(this.mynumber);
  }

}
