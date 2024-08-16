// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {
//   private platformId: Object;

//   constructor(@Inject(PLATFORM_ID) platformId: Object) {
//     this.platformId = platformId;
//   }

//   setItem(key: string, value: string): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.setItem(key, value);
//     }
//   }

//   getItem(key: string): string | null {
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem(key);
//     }
//     return null;
//   }

//   removeItem(key: string): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.removeItem(key);
//     }
//   }
// }
