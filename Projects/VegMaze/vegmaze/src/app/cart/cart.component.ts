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
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  placeOrder() {
    this.cartService.placeOrder().subscribe(() => {
      alert('Order placed successfully');
      this.cartItems = [];
      this.totalAmount = 0;
    });
  }
}
