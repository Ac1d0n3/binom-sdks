import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BnLazyImageService {
  constructor() { }

  async loadSequentially(imageUrls: string[]) {
    for (const imageUrl of imageUrls) {
      await this.load(imageUrl);
    }
  }

  load(imageUrl: string): Promise<void> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const lazyLoadImg = document.querySelector(`[lazyLoad="${imageUrl}"]`);
        if (lazyLoadImg) {
          lazyLoadImg.setAttribute('src', imageUrl);
        }
        resolve();
      };
    });
  }
}