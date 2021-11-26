import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../models/employee';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Username:string="";
  EmpData:any[]=[];
  isRadioClick:boolean=false;

  modalRef: BsModalRef; 
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  empobj=<Employee>{};

  p:number=1;

  constructor(private router:Router,
              private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService) { }

  ngOnInit() {
      this.Username=sessionStorage.getItem("username");
      this.GetAllEmployee();
  }

  GetAllEmployee(){
      this.service.getAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response);
      })
  }

  onLogout(){
    sessionStorage.clear();
    sessionStorage.removeItem("username");
      this.router.navigate(["/login"]);
  }

  onRadioClick(item){
    console.log(item);
    this.empobj=item;
    this.isRadioClick=true;
  }

  RadioClickCheck(){
    if(this.isRadioClick==true){
      return true;
    }else{
      return false;
    }
  }

  onEdit(popup: TemplateRef<any>){
    if(this.RadioClickCheck()){
      //Perform a logic
        this.modalRef=this.modalservice.show(popup,this.config)
    }else{
      alert("Please Select Employee to Update")
    }
  }

  onDelete(){
    if(this.RadioClickCheck()){
      //Perform a logic

        this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>{
          console.log(res);
          if(res){
            //Delete the record..
              
            }else{
            //Don't delete the record
            }
        })

    }else{
      alert("Please Select Employee to Delete")
    }
  }
  

}
