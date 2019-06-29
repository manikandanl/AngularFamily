import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  constructor(private empService:EmpService,private router: Router) { }

  ngOnInit() {
    
  }
  
  employee= {
    "employeeName":'',
    "employeeEmail": '',
    "employeeAddress": '',
    "employeeSalary": '',
    "joinDate": ''
}
onSubmit() {
  
  
  this.empService.createEmployee(this.employee).subscribe((data)=>
  console.log("Employee----->",this.date)
 // alert("Add")
  );
  // alert("Ok")
  
}
gotolistPage(){
  this.router.navigate(['list']);
}
}
