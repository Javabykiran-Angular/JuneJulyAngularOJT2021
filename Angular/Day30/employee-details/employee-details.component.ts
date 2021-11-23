import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;

  empobj=<Employee>{};

  constructor(private route:ActivatedRoute,
    private service:HttpService) { }

  ngOnInit() {
    this.GetAllDataFromURL();

  }

  GetAllDataFromURL(){
      this.route.paramMap
      .subscribe((param)=>{
        this.id=+param.get("id");
        console.log(this.id);

        this.GetParticularRecord(this.id)

      })
  }


  GetParticularRecord(id){
      this.service.getEMPByID(id)
      .subscribe((response)=>{
        console.log(response)
        this.empobj=(<Employee>response)
      })
  }


}
