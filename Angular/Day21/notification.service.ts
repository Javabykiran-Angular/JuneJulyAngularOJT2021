import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //Subject => class is present in rxjx lib.
  // notification=new Subject();
  notification=new BehaviorSubject("Welcome");

  constructor() { }

    SendNotification(data:string){
      this.notification.next(data);
    }


}
