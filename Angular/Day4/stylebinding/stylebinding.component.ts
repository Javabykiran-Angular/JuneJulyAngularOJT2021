import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:string='red';
  rating:number=21;

myjson={
  color:"blue",
  fontStyle:"italic",
  "font-family":"Cambria, Cochin, Georgia, Times, Times New Roman, serif"
}

  constructor() { }

  ngOnInit() {
  }

}
