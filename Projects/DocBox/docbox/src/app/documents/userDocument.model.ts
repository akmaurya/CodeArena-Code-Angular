// export class UserDocument {
//   id?: number;
//   userId?: number;
//   documentType?: string;
//   fields?: {
//     aadharNumber?: string;
//     name?: string;
//   };
//   images?: { imageUrl: string }[];

import { FormGroup } from "@angular/forms";

export interface UserDocument {
  id?: number;
  userId?: number;
  documentType: string;
  fields: { [key: string]: string };  // Adjusted type
  // images: { imageUrl: string }[];
  images?: { id: number; imageUrl: string | null; name: string; data: string }[]; // Adjusted type
  imagesFile: { imageFileUrl: File }[];
  
  expanded?: boolean;
  editing?: boolean;
  editForm?: FormGroup; // This will hold the form group used for editing the document
}

