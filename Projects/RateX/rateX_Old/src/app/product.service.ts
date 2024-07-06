import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private currentId = 1;

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(name: string, description: string, rating: number): void {
    const newProduct: Product = {
      id: this.currentId++,
      name,
      description,
      rating
    };
    this.products.push(newProduct);
  }

  addProductRating(id: number, rating: number, description: string): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.rating = rating;
      product.description = description;
    }
  }
}
