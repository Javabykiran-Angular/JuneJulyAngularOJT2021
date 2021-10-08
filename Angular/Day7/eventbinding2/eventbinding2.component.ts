import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  result:number=0;
  name:string='';

  result1:number=0;

  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){
    console.log(num1+" & "+num2);
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
    // this.result=num1+num2;

  }

  onChange(myevent){
    console.log("Change Event Occur...");    
    myevent.style.background='red';
    myevent.style.color='white';

  }

  onKeyUp(){
    console.log("Key Up Event Occur...")
  }

  onKeydown(){
    console.log("Key Down Event Occur...");
  }

}
