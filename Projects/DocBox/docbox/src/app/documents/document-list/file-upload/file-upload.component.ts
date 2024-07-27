import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  // selectedFile!: File;

  @Output() fileSelected = new EventEmitter<File>();

  constructor(private http: HttpClient) {}

  selectedFileName: string | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = null;
    }
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.fileSelected.emit(selectedFile);
    }
  }

  onFileSelectedOld(event: any) {
    // this.selectedFile = event.target.files[0];

    console.log("My form datas in selection");
    // console.log(this.selectedFile);
  }


  // onFileSelected(event: any) {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     this.fileSelected.emit(selectedFile);
  //   }
  // }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', this.selectedFile);
  //   console.log("My form datas");
  //   console.log(formData);
  //   console.log("formData");
  //   console.log(this.selectedFile);

  //   this.http.post('http://localhost:8080/documents/upload', formData)
  //     .subscribe(response => {
  //       console.log('Upload successful:', response);
  //     }, error => {
  //       console.error('Upload error:', error);
  //     });
  // }
}
