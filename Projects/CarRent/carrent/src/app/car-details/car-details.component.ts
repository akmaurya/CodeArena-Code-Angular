import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  allCars: any; // Change the type according to your data structure
  allAvailableCars: any; // Change the type according to your data structure
  carByBrand: any; // Change the type according to your data structure
  aCarDetails: any;
  plateNo: any;
  selectedBrand: string = "";

  customerLicenseNumber: string = "";
  carPlateNumber: string = "";
  isRentCarForm: boolean = false;

  bookedMessage: any;


  constructor(private dataService: CarService) { }
  users: any[] = [];
  private host = 'http://192.168.1.100:8080/';
  private Working = "https://catfact.ninja/fact";
  private get_all_car = this.host+'car/get_all_car'; // Replace with your API URL
  private available_cars = this.host+'car/available_cars'; // Replace with your API URL
  private get_a_car_details = this.host+'car/get_a_car_details?plateNumber='; // Replace with your API URL
  private brand = this.host+'car/brand/'; // Replace with your API URL
  private rent_car = this.host+'rent/rent_car'; // Replace with your API URL


  ngOnInit(): void {
    // this.dataService.getData(this.Working).subscribe((response) => {
    //   this.data = response;
    //   this.users = this.data;

    //   console.log(this.data);
    // });
  }
  hasSubInfo(info: any): boolean {
    return info.subInfo && info.subInfo.length > 0;
  }
  getAllCars(): void {
    this.dataService.getData(this.get_all_car).subscribe((response) => {
      this.allCars = response;
    });
    this.allAvailableCars = null;
    this.carByBrand = null;
  }
  getAvailableCars(): void {
    this.dataService.getData(this.available_cars).subscribe((response) => {
      this.allAvailableCars = response;
    });
    this.allCars = null;
    this.carByBrand = null;
  }

  getCarsByBrand(): void {
    this.dataService.getData(this.brand + this.selectedBrand).subscribe((response) => {
      this.carByBrand = response;
    });
    this.allAvailableCars = null;
    this.allCars = null;
  }

  getDetail1(index: any): void {
    this.plateNo = this.allCars[index].plateNumber;
    this.dataService.getData(this.get_a_car_details + this.plateNo).subscribe((response) => {
      this.aCarDetails = response;
    });
    this.isRentCarForm = false;
  }
  getDetail2(index: any): void {
    this.plateNo = this.allAvailableCars[index].plateNumber;
    this.dataService.getData(this.get_a_car_details + this.plateNo).subscribe((response) => {
      this.aCarDetails = response;
    });
    this.isRentCarForm = false;
  }
  getDetail3(index: any): void {
    this.plateNo = this.carByBrand[index].plateNumber;
    this.dataService.getData(this.get_a_car_details + this.plateNo).subscribe((response) => {
      this.aCarDetails = response;
    });
    this.isRentCarForm = false;
  }

  rentCarForm(index: any) {
    this.aCarDetails = null;
    this.customerLicenseNumber = "";
    this.isRentCarForm = true;
    this.carPlateNumber = this.allAvailableCars[index].plateNumber;
  }


  bookNow(): void {
    const bookData = {
      customerLicenseNumber: this.customerLicenseNumber,
      carPlateNumber: this.carPlateNumber
    };

    this.dataService.postData(this.rent_car, bookData).subscribe((response) => {
      this.bookedMessage = response;
      console.log(response);
    });
  }
}
