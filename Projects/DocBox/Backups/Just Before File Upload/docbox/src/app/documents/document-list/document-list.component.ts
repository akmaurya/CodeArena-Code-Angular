import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { AuthService } from '../../auth/auth.service';
import { UserDocument } from '../userDocument.model';
import { UserDetails } from '../../auth/userdetails.model';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: UserDocument[] = [];
  userDetails: UserDetails = new UserDetails();

  showFormUpdate: boolean = false;
  showFormAdd: boolean = false;
  documentForm: FormGroup;
  documentDeletedMessage: string = '';
  addDocumentAdded: string = '';
  addDocumentUpdated: string = '';
  
  editMode: boolean = false;
  documentToEdit: UserDocument | null = null;

  menuType: number = 2;
  uploadingFileList: File[] = [];
  images: { imageSrc: string, name: string }[] = [];

  
  constructor(public dialog: MatDialog, private fb: FormBuilder, private documentService: DocumentService, private authService: AuthService, private router: Router) { 
    this.documentForm = this.fb.group({
      documentType: ['', Validators.required],
      fields: this.fb.array([]),
      images: ['', Validators.required],
      expanded: false
    });
  }
  
  onFileSelected(file: File) {
    this.uploadingFileList.push(file);
    alert("Reached here");
    console.log('File selected in parent component:');
    console.log(this.uploadingFileList);
    // You can now handle the file in the parent component
  }
  
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userDetails && this.userDetails.id) {
      this.loadDocumentsOld();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadDocumentsOld(): void {
    if (this.userDetails && this.userDetails.id) {
      this.documentService.getDocuments(this.userDetails.id).subscribe(
        data => {
          this.documents = data;
          console.log("New Doc Details");
          console.log(data);
        },
        error => console.error('Error fetching documents', error)
      );
      
    } else {
      this.router.navigate(['/login']);
    }
  }

  getBase64ImageData(base64: string, name: string): Blob {
    // Extract the base64 data part (without the data URL scheme)
    const base64Data = base64.split(',')[1];
    const contentType = 'image/jpeg'; // Adjust based on your image type
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }
  getBase64ImageData2(blob: Blob, fileName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async loadImages(imageData: { data: Blob, name: string }[]): Promise<void> {
    this.images = await Promise.all(imageData.map(async (img) => {
      const imageSrc = await this.getBase64ImageData2(img.data, img.name);
      return { imageSrc, name: img.name };
    }));
  }


  loadDocuments(): void {
    if (this.userDetails && this.userDetails.id) {
      this.documentService.getDocuments(this.userDetails.id).subscribe(
        data => {
          this.documents = data.map((doc: any) => ({
            ...doc,
            images: doc.images.map((img: any) => ({
              id: img.id,
              imageUrl: img.imageUrl,
              name: img.name,
              data: this.getBase64ImageData(img.data, img.name)
            })),
            imagesFile: [] // Initialize as empty or handle file conversion if needed
          }));
          console.log("New Doc Details");
          console.log(this.documents);

          // const imageData = [
          //   { data: new Blob(['imageData1'], { type: 'image/jpeg' }), name: 'image1.jpg' },
          //   { data: new Blob(['imageData2'], { type: 'image/jpeg' }), name: 'image2.jpg' }
          // ];
      
          // this.loadImages(this.documents);
        },
        error => console.error('Error fetching documents', error)
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  get fields(): FormArray {
    return this.documentForm.get('fields') as FormArray;
  }

  addField(): void {
    this.fields.push(this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    }));
  }

  removeField(index: number): void {
    this.fields.removeAt(index);
  }

  onSubmit(): void {
    const fields: { [key: string]: string } = {};
    this.fields.controls.forEach(group => {
      fields[group.get('key')?.value] = group.get('value')?.value;
    });

    const newDocument: UserDocument = {
      id: this.editMode && this.documentToEdit ? this.documentToEdit.id : undefined,
      userId: this.userDetails.id,
      documentType: this.documentForm.value.documentType,
      fields,
      images: this.documentForm.value.images!=null?this.documentForm.value.images.split(',').map((url: string) => ({ imageUrl: url.trim() })):null,
      imagesFile: this.uploadingFileList.map(file => ({ imageFileUrl: file }))
    };


    const formData: FormData = new FormData();
    formData.append('documentType', newDocument.documentType);
    formData.append('userId', newDocument.userId!.toString());
    formData.append('fields', JSON.stringify(newDocument.fields));

    // if (newDocument.images) {
    //   newDocument.images.forEach((img, index) => {
    //     formData.append(`images[${index}].imageUrl`, img.imageUrl);
    //   });
    // }

    if (newDocument.imagesFile) {
      newDocument.imagesFile.forEach((imgFile, index) => {
        formData.append(`files`, imgFile.imageFileUrl);
      });
    }



    if (this.editMode) {
      this.documentService.updateDocument(newDocument).subscribe(
        (data: UserDocument) => {
          const index = this.documents.findIndex(doc => doc.id === data.id);
          if (index !== -1) {
            this.documents[index] = data;
          }
          this.resetForm();
          this.addDocumentUpdated = 'Document updated successfully!';
        },
        error => console.error('Error updating document', error)
      );
    } else {
      this.documentService.addDocument(formData).subscribe(
        (data: UserDocument) => {
          this.documents.push(data);
          this.resetForm();
          this.addDocumentAdded = 'Document added successfully!';
        },
        error => console.error('Error adding document', error)
      );
    }

    setTimeout(() => this.addDocumentAdded = '', 5000); // Clear the message after 5 seconds
    setTimeout(() => this.addDocumentUpdated = '', 5000); // Clear the message after 5 seconds
  }

  toggleForm(type:number): void {
    if(type==1){
      this.documentForm.reset();
      this.fields.clear();
      this.editMode = false;
      this.documentToEdit = null;
      this.showFormAdd = !this.showFormAdd;
      this.showFormUpdate = false;
    }
    else if(type==2)
      this.showFormUpdate = !this.showFormUpdate;
  }

  editDocument(document: UserDocument): void {
    this.editMode = true;
    this.documentToEdit = document;
    console.log("Document to edit------");
    console.log(this.documentToEdit);
    
    this.documentForm.patchValue({
      documentType: document.documentType,
      images: (document.images || []).map(img => img.imageUrl).join(', ')
    });
    this.fields.clear();
    Object.keys(document.fields ?? {}).forEach(key => {
      this.fields.push(this.fb.group({
        key: [key, Validators.required],
        value: [document.fields?.[key] ?? '', Validators.required]
      }));
    });
    this.showFormUpdate = !this.showFormUpdate;
    this.showFormAdd = false;
  }

  delete(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documentService.deleteDocument(id).subscribe(
          (response) => {
            console.log("Response message of delete document");
            console.log(response);
            this.documents = this.documents.filter(doc => doc.id !== id);
            this.documentDeletedMessage = response;
            this.loadDocuments(); // Refresh the document list
            setTimeout(() => this.documentDeletedMessage = '', 5000); // Clear the message after 5 seconds
          },
          error => console.error('Error deleting document', error)
        );
      }
    });
    setTimeout(() => this.documentDeletedMessage = '', 5000); // Clear the message after 5 seconds
  }

  private resetForm(): void {
    this.documentForm.reset();
    this.fields.clear();
    this.editMode = false;
    this.documentToEdit = null;
    this.showFormAdd = false;
    this.showFormUpdate = false;
  }

  changeMenue(menuType:number){
    this.menuType = menuType;
  }
}
