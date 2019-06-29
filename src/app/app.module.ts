import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { MatInputModule } from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { MatPaginatorModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    FooterComponent,
    EmpeditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
