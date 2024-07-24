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

  constructor(public dialog: MatDialog, private fb: FormBuilder, private documentService: DocumentService, private authService: AuthService, private router: Router) { 
    this.documentForm = this.fb.group({
      documentType: ['', Validators.required],
      fields: this.fb.array([]),
      images: ['', Validators.required],
      expanded: false
    });
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userDetails && this.userDetails.id) {
      this.loadDocuments();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadDocuments(): void {
    if (this.userDetails && this.userDetails.id) {
      this.documentService.getDocuments(this.userDetails.id).subscribe(
        data => this.documents = data,
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
      images: this.documentForm.value.images.split(',').map((url: string) => ({ imageUrl: url.trim() }))
    };

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
      this.documentService.addDocument(newDocument).subscribe(
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
}
