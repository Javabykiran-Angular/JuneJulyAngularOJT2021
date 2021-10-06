import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {
  count:number=0;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    if(this.count==0){
      console.log("click event Occur...");
      this.count++;
    }
   
  }

  onImageClick(){
    console.log("on Image Click..");
  }

  onSend(myevent){
    console.log(myevent);
    console.log("Value is :: "+myevent.target.value);

  }

  onSendData(myinput){
    console.log(myinput);
    console.log("data is "+myinput.value)

  }

  onSendData1(myvalue){
    console.log("My value is "+myvalue);
  }


}
