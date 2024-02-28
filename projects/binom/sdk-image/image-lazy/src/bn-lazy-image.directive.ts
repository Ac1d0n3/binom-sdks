import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { BnLazyImageService } from './bn-lazy-image.service';

@Directive({
  selector: '[bnLazyImage]',
  standalone: true
})
export class BnLazyImageDirective {

  @Input('lazyLoad') imageUrl!: string;

  constructor(private el: ElementRef, private lazyLoadImageService: BnLazyImageService) { }

  ngOnInit() {
    this.el.nativeElement.setAttribute('lazyLoad', this.imageUrl);
    this.lazyLoadImageService.load(this.imageUrl);
  }
}
