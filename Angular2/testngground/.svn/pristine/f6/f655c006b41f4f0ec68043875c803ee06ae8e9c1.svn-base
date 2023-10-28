import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTransferComponent } from './datatransfer.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './employee.service';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DataTransferComponent,
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'emplist', component: EmployeeListComponent},
      {path: 'empdetail', component: EmployeeDetailComponent}
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
