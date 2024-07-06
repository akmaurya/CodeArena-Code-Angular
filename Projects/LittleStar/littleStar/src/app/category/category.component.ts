import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
