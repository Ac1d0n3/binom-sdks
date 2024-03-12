import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-colors-utils-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './colors-utils-svc.component.html',
  styleUrl: './colors-utils-svc.component.scss'
})
export class ColorsUtilsSvcComponent {
  /*
  channelToHex(c:number)<br>
rgbToHex(r:number, g:number, b:number<br>
rgbToHsl(r:number, g:number, b:number)<br>
hue2rgbChannel(p:number, q:number, t:number)<br>
hslToRgb(h:number, s:number, l:number)<br>
hexToRgb(hex:string) <br>
setOutput(mode:string,values:any)<br>
allValsFromRgb(r:number,g:number,b:number,a:number=1,mode:string='rgba')<br>
allValuesFromHex(hexVal:string, a:number=1, mode:string='rgba')<br>
allValuesFromHsl(h:number,s:number,l:number, a:number=1, mode:string='rgba')<br>
getValuesFromValueString(valueStr:string)<br>
  */

data = []
}
