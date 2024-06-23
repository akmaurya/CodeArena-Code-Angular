import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  allCustomer: any; // Change the type according to your data structure
  customerLicenseNumber:any;
  customerName:any;
  customerAge:any;
  nationalIDNumber:any;
  addMessage:any;
  allCustomers: any;

  isAddCustomer:boolean=false;


  constructor(private dataService: CustomerService) { }
  private host = 'http://192.168.1.100:8080/';
  private addCustomerURL = this.host+'customer/add_customer'; // Replace with your API URL
  private get_all_customer = this.host+'customer/get_all_customer'; // Replace with your API URL


  ngOnInit(): void {
    
  }

  addCustomer():void{
    this.isAddCustomer=true;
  }
  
  getAllCustomer(): void {
    this.isAddCustomer=false;

    this.dataService.getData(this.get_all_customer).subscribe((response) => {
      this.allCustomers = response;
      console.log(this.allCustomers);
    });
  }
  add(): void {
    const custData = {
      licenseNumber: this.customerLicenseNumber,
      customerName: this.customerName, 
      customerAge: this.customerAge,
      nationalIDNumber: this.nationalIDNumber
    };

    this.dataService.postData(this.addCustomerURL, custData).subscribe((response) => {
      this.addMessage = response;
      console.log(response);
    });
  }
}
