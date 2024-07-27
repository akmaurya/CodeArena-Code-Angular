import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDocument } from './userDocument.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = environment.apiUrl;
  private getDocumentsUrl = this.apiUrl+'/documents/user';
  private documentsUrl = this.apiUrl+'/documents';

  constructor(private http: HttpClient) { }

  getDocuments(userid: number): Observable<any> {
    // alert("token---"+localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.getDocumentsUrl}/${userid}`, { headers });
  }

  addDocument(document: FormData): Observable<UserDocument> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<UserDocument>(`${this.documentsUrl}`, document, {headers});
  }


  // Method to update an existing document
  updateDocument(document: FormData, docId:number): Observable<UserDocument> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<UserDocument>(`${this.documentsUrl}/${docId}`, document, {headers});
  }

  // Method to delete a document by ID
  deleteDocument(id: number): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<string>(`${this.documentsUrl}/${id}`, {headers, responseType: 'text' as 'json'});
  }
}
