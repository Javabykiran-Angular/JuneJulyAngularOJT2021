import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

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

  notificationData:string='';

  constructor(private route:ActivatedRoute,
      private notify:NotificationService
    ) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((param)=>{
      this.myjson.id=+param.get("id");
      this.myjson.name=param.get("name");
      this.myjson.status=param.get("status");
    })

    this.notify.notification
    .subscribe((data)=>{
      this.notificationData=(<string> data);
    })



  }

  onSend(strData){
     // console.log(strData);
      this.notify.SendNotification(strData);

  }




}
