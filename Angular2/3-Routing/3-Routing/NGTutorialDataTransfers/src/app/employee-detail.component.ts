import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-detail',
    templateUrl: 'employee-detail.component.html'
})

export class EmployeeDetailComponent implements OnInit{
    employees;

    constructor(private _employeeService: EmployeeService){}

    ngOnInit(){
        this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);

    }
}