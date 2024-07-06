import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
