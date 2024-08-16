// vegetable.model.ts
export interface Category {
    id: number;
    name: string;
  }
  
  export interface Vegetable {
    vegetableId: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: Category;
    createdAt: string;  // ISO 8601 format string
    updatedAt: string;  // ISO 8601 format string
  }
  