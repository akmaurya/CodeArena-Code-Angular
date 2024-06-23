import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {
  private localStorageKey = 'visitCount';

  constructor() {
    if (this.isBrowser()) {
      this.incrementVisitCount();
    }
  }

  private incrementVisitCount() {
    if (this.isBrowser()) {
      let visitCount = Number(localStorage.getItem(this.localStorageKey)) || 0;
      visitCount++;
      localStorage.setItem(this.localStorageKey, visitCount.toString());
    }
  }

  getVisitCount(): number {
    if (this.isBrowser()) {
      return Number(localStorage.getItem(this.localStorageKey)) || 0;
    }
    return 0;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
