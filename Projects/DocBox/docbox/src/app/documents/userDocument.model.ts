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

  // constructor(
  //   id?: number,
  //   userId?: number,
  //   documentType?: string,
  //   fields?: any,
  //   images?: string[]
  // ) {
  //   this.id = id;
  //   this.userId = userId;
  //   this.documentType = documentType;
  //   this.fields = fields;
  //   this.images = images;
  // }
// }

export interface UserDocument {
  id?: number;
  userId?: number;
  documentType: string;
  fields: { [key: string]: string };  // Adjusted type
  images: { imageUrl: string }[];
  
  expanded?: boolean;
  editing?: boolean;
  editForm?: FormGroup; // This will hold the form group used for editing the document
}

