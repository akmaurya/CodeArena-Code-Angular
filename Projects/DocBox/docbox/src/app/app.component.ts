import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router, private statusService: StatusService) { }

  title = 'docbox';

  addDocumentAdded: string = '';
  addDocumentUpdated: string = '';
  documentDeletedMessage: string = '';
  profilePictureMessage: string = '';

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.statusService.status$.subscribe(status => {
      if (status) {
        if (status.type === 'success') {
          if(status.message === 'Document added successfully!')
            this.addDocumentAdded = status.message;
          else if(status.message === 'Document deleted successfully!')
            this.documentDeletedMessage = status.message;
          else if(status.message === 'Document updated successfully!')
            this.addDocumentUpdated = status.message;
          else if(status.message === 'Profile picture updated successfully. Will show in next login.')
            this.profilePictureMessage = status.message;
        } else if (status.type === 'error') {
          this.documentDeletedMessage = status.message;
        }
        this.clearMessages();
      }
    });
  }

  handleStatusChange(event: { type: string, message: string }) {
    if (event.type === 'success') {
      this.addDocumentAdded = event.message;
      // Optionally clear other messages
      this.clearMessages();
    } else if (event.type === 'error') {
      this.documentDeletedMessage = event.message;
      // Optionally clear other messages
      this.clearMessages();
    }
  }

  private clearMessages() {
    setTimeout(() => {
      this.addDocumentAdded = '';
      this.addDocumentUpdated = '';
      this.documentDeletedMessage = '';
    }, 5000); // Clear messages after 5 seconds
  }
}
