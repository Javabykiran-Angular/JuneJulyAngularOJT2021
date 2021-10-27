import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent implements OnInit {

  myjson={
    id:0,
    name:'',
    status:''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((param)=>{
      this.myjson.id=+param.get("id");
      this.myjson.name=param.get("name");
      this.myjson.status=param.get("status");
    })
  }

}
