// src/app/models/address.model.ts
export interface Address {
    addressId: number;
    addressLine1: string;
    addressLine2?: string; // Optional property
    city: string;
    state: string;
    postalCode: string;
    country: string;
    createdAt: string;  // ISO 8601 format string
    updatedAt: string;  // ISO 8601 format string
  }
  