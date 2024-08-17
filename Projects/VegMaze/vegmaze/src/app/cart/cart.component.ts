import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const user = JSON.parse(localStorage.getItem('userDetails') || '{}');
    // Check if the user object is valid and contains a userId
    if (user && user.userId) {
    this.cartService.getCartItems(user.userId).subscribe(data => {
      this.cartItems = data;
      this.totalAmount = this.cartItems[0].cart.cart_Gross_amount;

      console.log("this.cartItems");
      console.log(this.cartItems);
    });
  }
  }

  placeOrder() {
    this.cartService.placeOrder().subscribe(() => {
      alert('Order placed successfully');
      this.cartItems = [];
      this.totalAmount = 0;
    });
  }
}

