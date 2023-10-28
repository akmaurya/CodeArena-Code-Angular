import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService{
    private _url: string = "assets/employeedata.json";
    constructor(private _http: HttpClient){}
    getEmployees(){
        return this._http.get(this._url)
        .map((response:Response) => response)
        .catch(this._errorHandler);

    }
    _errorHandler(error: Response){

        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}