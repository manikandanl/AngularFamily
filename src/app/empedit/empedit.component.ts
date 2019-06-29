import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material';
@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {
  update = false;

  constructor(private empService: EmpService, private router: Router) { }

  ngOnInit() {
    console.log('mani', this.empService, history.state)
    if (history && history.state && history.state.data) {
      this.employee = {
        "employeeName": history.state.data.employeeName,
        "employeeEmail": history.state.data.employeeEmail,
        "employeeAddress": history.state.data.employeeAddress,
        "employeeSalary": history.state.data.employeeSalary,
        "joinDate": history.state.data.joinDate
      }
      this.update = true
    }
  }
  employee = {
    "employeeName": '',
    "employeeEmail": '',
    "employeeAddress": '',
    "employeeSalary": '',
    "joinDate": ''
  }
  onUpdate() {
    if (this.update) {
      this.empService.updateAllEmployee(history.state.data.id, this.employee).subscribe((data) => {
        this.router.navigate(['list']);
      })
    } else {
      this.empService.createEmployee(this.employee).subscribe((data) => {
        this.router.navigate(['list']);
      }
      );
    }
    console.log("Employee----->", this.ngOnInit());
  }
  gotolistPage() {
    this.router.navigate(['']);
  }
}
