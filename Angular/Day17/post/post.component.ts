import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetPost();
  }

  GetPost(){
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response)

      this.posts=(<any>response);

    },(error)=>{
      
      if(error.status>=400 && error.status<=499){
        alert("Error is Occured...===>  "+error.status);
      }else{
        alert("Error....... ");
      }
      
    })
  }

  OnSend(inputTitle,inputBody){

    let obj={
      title:inputTitle,
      body:inputBody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response)
    })
  }

  onEdit(item){
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  onDelete(id){

    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })

  }

}
