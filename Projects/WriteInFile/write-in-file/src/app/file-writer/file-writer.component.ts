import { Component } from '@angular/core';

@Component({
  selector: 'app-file-writer',
  templateUrl: './file-writer.component.html',
  styleUrl: './file-writer.component.css'
})
export class FileWriterComponent {
  downloadFile() {
    const data = "This is the content of the file.";
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
