import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bn-bn-theme-bg-gradient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-theme-bg-gradient.component.html',
  styleUrls: ['./bn-theme-bg-gradient.component.css', '../bn-theme-background.component.css']
})
export class BnThemeBgGradientComponent {

  private  _color1: string = '#424242';
  get color1():string{ return this._color1}
  @Input() set color1(val:string){
    this._color1 = val;
    this.setStyle();
  }
  
  private  _color2: string = '#090A0F';
  get color2():string{ return this._color2}
  @Input() set color2(val:string){
    this._color2 = val;
    this.setStyle();
  }

  style:string = '';
  bgStyle: string = ''
  constructor() { }

  ngOnInit(): void {
    this.setStyle();
   
  }

  setStyle(){
    this.style= 'background:linear-gradient(0deg, '+ this.color1 +' 20%, '+ this.color2 +' 100%);z-index:-100;'
  }
}
