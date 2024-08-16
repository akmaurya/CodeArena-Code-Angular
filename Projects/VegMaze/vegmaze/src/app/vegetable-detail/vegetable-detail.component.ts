import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VegetableService } from '../services/vegetable.service';
import { CartService } from '../services/cart.service';
// import { StorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrl: './vegetable-detail.component.css'
})
export class VegetableDetailComponent {
  vegetable: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private vegetableService: VegetableService,
    private cartService: CartService,
    private router: Router
    // private storageService: StorageService
  ) {}

  ngOnInit() {
  //   const idString = this.route.snapshot.paramMap.get('id'); // id can be string or null

  // if (idString !== null) {
  //   const id = parseInt(idString, 10); // Convert the string to a number

  //   if (!isNaN(id)) {
  //     this.vegetableService.getVegetable(id).subscribe(data => {
  //       this.vegetable = data;
  //     });
  //   } else {
  //     // Handle the case where idString is not a valid number
  //     console.error('Invalid ID format:', idString);
  //   }
  // } else {
  //   // Handle the case where idString is null
  //   console.error('ID parameter is missing');
  // }
  this.loadItemDetails();
  }

  loadItemDetails(){
    // Try to get the vegetable from the navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation) {
      this.vegetable = navigation.extras.state?.['vegetable'];
    }

    // If vegetable is not available in state, fallback to fetching it by ID
    if (!this.vegetable) {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.vegetableService.getVegetable(id).subscribe(data => {
        this.vegetable = data;
      });
    }
  }


  addToCart() {

    // Retrieve the user details from local storage
    const user = JSON.parse(localStorage.getItem('userDetails') || '{}');
    alert('user---'+user);

    // Check if the user object is valid and contains a userId
    if (user && user.userId) {
      // Call the addToCart method in the CartService
      this.cartService.addToCart(user.userId, this.vegetable.vegetableId).subscribe(
        () => {
          // Handle successful addition to cart
          alert('Item added to cart');
        },
        (error) => {
          // Handle any errors that occur during the API call
          console.error('Error adding item to cart:', error);
          alert('Failed to add item to cart');
        }
      );
    } else {
      // Handle the case where user details are missing or invalid
      alert('User not found. Please log in again.');
    }
  }
}
