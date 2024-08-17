import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VegetableService } from '../services/vegetable.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
// import { StorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrl: './vegetable-detail.component.css'
})
export class VegetableDetailComponent {
  vegetable: any;
  user: any;
  quantity:number = 1;

  constructor(
    private route: ActivatedRoute,
    private vegetableService: VegetableService,
    private cartService: CartService,
    private router: Router
    // private storageService: StorageService
  ) {}

  ngOnInit() {
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


  addToCart(quantity:number) {

    // Retrieve the user details from local storage
    const user = JSON.parse(localStorage.getItem('userDetails') || '{}');

    // Check if the user object is valid and contains a userId
    if (user && user.userId) {
      // Create a CartItem object
      const cartItem: CartItem = {
        cartItemId: 0, // or leave undefined if it's auto-generated
        cart: { cartId: user.userId }, // Assuming cartId is same as userId; adjust if necessary
        vegetable: this.vegetable,
        quantity: quantity, // Set the desired quantity
        cartItemAmount: this.vegetable.price, // Assuming quantity is 1, otherwise multiply quantity by price
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Call the addToCart method in the CartService
      this.cartService.addToCart(user.userId, cartItem).subscribe(
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
