import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  postUrl = 'http://localhost:3000/Employee/add';
  getUrl = 'http://localhost:3000/Employee/viewall';
  delUrl='http://localhost:3000/Employee/delete/';
  updUrl='http://localhost:3000/Employee/update/';
  getByidUrl='http://localhost:3000/Employee/view/';
  pageUrl='http://localhost:3000/Employee/customers/';
  constructor(private http: HttpClient) { }
  createEmployee(Employee){
    return this.http.post(this.postUrl,Employee);
  }
  getAllEmployee(): Observable<any>{
    return this.http.get(this.getUrl);
  }
  delAllEmployee(id): Observable<any>{
    console.log('test',id);
    return this.http.delete(this.delUrl+id);
  }
  updateAllEmployee(empid, user): Observable<any>{
    return this.http.put(this.updUrl+empid,user);
  }
  getByIdEmployee(id){
    return this.http.get(this.getByidUrl+id)
  }
  pagenation(pageNo,pageSize){
    return this.http.get(this.pageUrl+pageNo+pageSize)
  }
}
