import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  private statusSubject = new Subject<{ type: string, message: string }>();
  status$ = this.statusSubject.asObservable();

  setStatus(type: string, message: string) {
    this.statusSubject.next({ type, message });
  }
}
