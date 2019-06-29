import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmpeditComponent } from './empedit/empedit.component';
const routes: Routes = [
  {
path:'',
component: EmployeeComponent
  },{
    path:'list',
    component:EmployeelistComponent
  },{
  path:'emplist',
  component:EmpeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

