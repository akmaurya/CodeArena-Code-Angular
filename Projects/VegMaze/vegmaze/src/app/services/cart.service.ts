import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080';
  private cart = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) { }

  addItemToCart(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart/additem`, item);
  }

  addToCart(userId:number, cartItem: CartItem): Observable<any> {
    return this.http.post(`${this.cart}/additem/${userId}`, cartItem); // Adjust the endpoint as needed
  }

  getCartItems(userId:number): Observable<any> {
    return this.http.get(`${this.cart}/getitems/${userId}`);
  }

  placeOrder(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/placeOrder`, {});
  }
}
