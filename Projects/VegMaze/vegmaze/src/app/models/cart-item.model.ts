// cart-item.model.ts

import { Category } from "./vegetable.model";

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
  
  export interface Cart {
    cartId: number;
    // Add other properties of Cart as needed
  }
  
  export interface CartItem {
    cartItemId?: number;          // Optional since it is auto-generated
    cart: Cart;                   // The cart to which this item belongs
    vegetable: Vegetable;         // The vegetable being added to the cart
    quantity: number;             // The quantity of the vegetable in the cart
    cartItemAmount: number;       // The total amount for this cart item
    createdAt: string;            // ISO 8601 format string
    updatedAt: string;            // ISO 8601 format string
  }
  