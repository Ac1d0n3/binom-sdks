import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'bn-small-image-slider',
  templateUrl: './bn-small-image-slider.component.html',
  standalone:true,
  imports:[CommonModule],
})
export class BnSmallImageSliderComponent {
  @Input() images:any = [];
  activeIndex:number = 0;
  imagesLoaded: boolean = false;
  showFull:boolean = false;
  @Input() title:string = '';
  showFullImages(){
    this.showFull = true
  }

  closeFullImages(){
    this.showFull = false
  }

}
