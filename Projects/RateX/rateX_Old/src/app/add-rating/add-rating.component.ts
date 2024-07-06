import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent {
  name!: string;
  description!: string;
  rating!: number;

  constructor(private productService: ProductService) { }

  addProduct(): void {
    this.productService.addProduct(this.name, this.description, this.rating);
    this.name = '';
    this.description = '';
    this.rating = 0;
  }
}
