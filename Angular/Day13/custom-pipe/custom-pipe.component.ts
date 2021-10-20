import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse doloremque assumenda fugiat accusamus. Aliquid pariatur, ullam nam, obcaecati sed neque, officiis unde dolores voluptatibus laudantium quidem quas reiciendis architecto!";
  
  constructor() { }

  ngOnInit() {
  }

}
