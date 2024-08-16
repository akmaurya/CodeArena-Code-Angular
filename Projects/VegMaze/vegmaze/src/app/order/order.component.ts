import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;
  paymentOptions = [
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'PayPal' }
  ];
  selectedPaymentMethod: string = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data: any) => {
      this.cartItems = data.items;
      this.totalAmount = data.totalAmount;
    });
  }

  placeOrder(): void {
    const order = {
      items: this.cartItems,
      paymentMethod: this.selectedPaymentMethod,
      totalAmount: this.totalAmount
    };

    this.orderService.placeOrder(order).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
