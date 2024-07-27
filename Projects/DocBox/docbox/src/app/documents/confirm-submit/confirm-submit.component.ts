import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-submit',
  templateUrl: './confirm-submit.component.html',
  styleUrl: './confirm-submit.component.css'
})
export class ConfirmSubmitComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmSubmitComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
