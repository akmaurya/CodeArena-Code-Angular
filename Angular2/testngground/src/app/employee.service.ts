import { Injectable } from '@angular/core';
import { HttpClient, RequestOptions } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService{
    private _url: string = "http://localhost:8080/messanger/webapi/employee/hello";

    options: RequestOptions;

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

    POST_REQUEST() {
        const req = this._http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
      }
}