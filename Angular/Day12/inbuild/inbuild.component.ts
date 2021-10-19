import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild',
  templateUrl: './inbuild.component.html',
  styleUrls: ['./inbuild.component.css']
})
export class InbuildComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In praesentium perferendis repellat consequatur officia qui ab, possimus iusto facilis consectetur, exercitationem alias numquam! Recusandae et dolorum sint incidunt? Dignissimos, inventore.";
  num2:number=65.67845689;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
