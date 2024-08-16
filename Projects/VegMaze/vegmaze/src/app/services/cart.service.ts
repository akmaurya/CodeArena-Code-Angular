import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  addToCart(userId:number, vegetableid: number): Observable<any> {
    alert('In Add to cart');
    return this.http.post(`${this.cart}/additem/${userId}`, vegetableid); // Adjust the endpoint as needed
  }

  getCartItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cart/getitems`);
  }

  placeOrder(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/placeOrder`, {});
  }
}
