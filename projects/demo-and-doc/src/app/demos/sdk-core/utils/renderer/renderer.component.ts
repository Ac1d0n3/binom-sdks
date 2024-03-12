import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './renderer.component.html',
  styleUrl: './renderer.component.scss'
})
export class RendererComponent {
  /*
setStyle(sKey: string, sValue: string, important:boolean = false)<br>
removeStyle(styleName: string)<br>
removeStyles(removeList: string[])<br>
toggleStyle(toggle:Boolean, sKey: string, sValue: string)<br>
addClass(className: string)<br>
removeClasses(removeList: string[])<br>
addClasses(classNames: string[])<br>
removeClass(className: string)<br>
toggleClass(toggle:Boolean,className:string)<br>
toggleOnOff(toggle:Boolean, onClass:string, offClass:string)<br>
getParentNodeAttribute(attr:string) <br>
getElementSize():<br>
toggleShadow(toggle:Boolean, shadowLevel:number)<br>
toggleMaxWidth(toggle:Boolean, maxWidth:number) <br>
toggleMinWidth(toggle:Boolean, minWidth:number) <br>
toggleWidth(toggle:Boolean, width:string) <br>
toggleHeight(toggle: Boolean, height:string, def:string='auto')<br>
toggleVisible(visible:Boolean) <br>
toggleOverflow(toggle:Boolean) <br>
toggleZindex(toggle:Boolean, zIndex:string) <br>
setHeight(height:number)<br>
setBorder( color:string='black', width:string = '1px',  style:string='solid')<br>
toggleCenterView(centeredX:Boolean, centeredY:Boolean)<br>
centerView(centeredX:Boolean, centeredY:Boolean)<br>
unCenterView()<br>
addElementIdClasses(elTag:string ,id:string)<br>
insertBefore(insertEl:HTMLElement)<br>
  */

data = []
}
