export interface Admin {
    adminId?: number; // Optional if it's auto-generated
    username: string;
    password: string;
    email?: string;
    createdAt?: Date; // Optional
    updatedAt?: Date; // Optional
  }
  