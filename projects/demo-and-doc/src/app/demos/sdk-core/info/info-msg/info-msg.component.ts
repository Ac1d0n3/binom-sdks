import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnInfoBoxComponent, BnInfoMsgComponent } from '@binom/sdk-core/info';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { BnPrismService } from '@binom/sdk-prism/core';

@Component({
  selector: 'app-info-msg',
  standalone: true,
  imports: [CommonModule, BnInfoMsgComponent, DocCompComponent, BnPrismBoxComponent],
  templateUrl: './info-msg.component.html',
  styleUrl: './info-msg.component.scss'
})
export class InfoMsgComponent {
  infoData:any = [];
  private prismSvc = inject(BnPrismService);
 
  constructor(){
    this.infoData.push({
      name:'First', end: 'World', start: 'Hello',
      icon: 'fa-fw fas fa-user', middle: 'first'
    });

    this.infoData.push({
      name:'Second', end: 'World', start: 'Hello',
      icon: 'fa-fw fas fa-times', middle: 'second'
    });

    this.code2 = JSON.stringify(this.infoData);
  }

  code = `<bn-info-msg [infos]="infoData"></bn-info-msg>`;
  code2 = '';
}
