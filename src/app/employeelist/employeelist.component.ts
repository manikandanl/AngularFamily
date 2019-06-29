import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTab, MatTable, MatTableDataSource } from '@angular/material';
import { NgForm } from 'employee/node_modules/@angular/forms/forms';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'employeeName', 'employeeEmail','joinDate', 'employeeAddress', 'employeeSalary', 'actions', 'actionss',];
  private dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private empservice: EmpService, private routes: Router) {
    this.getAllEmployee();
  }
  ngOnInit() {
    //this.Employeelist()
  }
  pageSizeOptions(pageSize,pageNo){
    this.empservice.pagenation(pageSize,pageNo).subscribe((data)=>{
    console.log("////"+data)
    });
  }
  employee = {
    "employeeName": '',
    "employeeEmail": '',
    "employeeAddress": '',
    "employeeSalary": '',
    "joinDate": ''
  }
  EmployeeByid(id) {

    this.empservice.getByIdEmployee(id).subscribe((data) => {
      alert("display id" + id)
    });
  }

  getAllEmployee() {
    this.empservice.getAllEmployee().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  gotolistPage() {
    this.routes.navigate(['']);
  }
   Filter(filtervalues: string){
     console.log("==============", filtervalues);
     filtervalues=filtervalues.trim().toString();
     this.dataSource.filter=filtervalues;
     if(this.dataSource.paginator){
       this.dataSource.paginator.firstPage();
     }
   }
  deleteEmployee(empid) {
    console.log("////", empid);
    this.empservice.delAllEmployee(empid).subscribe((data) => {
      console.log("+++", data)
      //  this.deleteEmployee(empid);
      // this.routes.navigate(['list'])  
      window.location.reload();
      alert("update data")
    })
  }
  updateEmployee(data) {

    // this.empservice.updateAllEmployee(id).subscribe((data)=>{

      //console.log("/////"+id)
     
        this.empservice.createEmployee(this.employee);
        this.routes.navigate(['/emplist'], { state: { data } });
  }
}

