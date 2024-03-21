import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacyDirective, BnPrivacyService } from '@binom/sdk-privacy/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,MatButtonModule,BnPrivacyDirective,DocCompComponent],

  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent {
  toggle:boolean = false;

  code1 = `<iframe  bnPrivacy="videos" src="" width="560" height="315"  data-src="https://youtube-nocookie.com/embed/v2q4xJB4zSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  code2 = `<button mat-button (click)="toggle=!toggle">Toggle</button>
  <div *ngIf="toggle">
  <iframe  bnPrivacy="videos" src="" width="560" height="315"  data-src="https://youtube-nocookie.com/embed/v2q4xJB4zSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>`;
  code3 = ` <img bnPrivacy="images" data-src="https://www.waipu.tv/app/uploads/2019/10/1-desktop.jpg"   src="" width="560" height="315" />`;
  code4 = `Test für einen Link ...<a mat-button href="" bnPrivacy="links" data-src="https://www.waipu.tv/app/uploads/2019/10/1-desktop.jpg">Ein Link</a> in einem Text`;

}
