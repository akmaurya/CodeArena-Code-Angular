import { Component } from '@angular/core';
import { VegetableService } from '../services/vegetable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: any[] = [];

  constructor(private vegetableService: VegetableService, private router: Router) {}

  ngOnInit(): void {
    this.loadVegetables();
  }

  loadVegetables(): void {
    this.vegetableService.getVegetables().subscribe(data => {
      this.vegetables = data;
    });
  }

  viewDetail(id: number): void {
    // Find the vegetable by its ID
  const vegetable = this.vegetables.find(v => v.vegetableId === id);
  if (vegetable) {
    // Navigate to the vegetable details route and pass the vegetable object
    this.router.navigate(['/vegetable', id], {
      state: { vegetable }
    });
  } else {
    console.error('Vegetable not found!');
  }
  }
}
