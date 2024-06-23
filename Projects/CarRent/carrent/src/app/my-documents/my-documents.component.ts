import { Component } from '@angular/core';
import { MyDocumentService } from '../my-document.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrl: './my-documents.component.css'
})
export class MyDocumentsComponent {
  data: any; // Change the type according to your data structure

  constructor(private dataService: MyDocumentService) {}
  users: any[] = [];

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      this.users = this.data;

      console.log(this.data);
    });
  }
  hasSubInfo(info: any): boolean {
    return info.subInfo && info.subInfo.length > 0;
  }

}
