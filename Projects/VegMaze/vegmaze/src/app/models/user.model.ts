// user.model.ts
export interface Address {
    addressId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    createdAt: string;  // ISO 8601 format string
    updatedAt: string;  // ISO 8601 format string
  }
  
  export interface User {
    userId: number;
    username: string;
    password: string; // Ideally, do not store password on the client side
    email: string;
    phoneNumber: string;
    address: Address;
    createdAt: string;  // ISO 8601 format string
    updatedAt: string;  // ISO 8601 format string
  }
  