import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnInfoBoxComponent } from '@binom/sdk-core/info';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnGridBlockDirective } from '@binom/sdk-layout/grid-block';
import { BnAnimateOnScrollComponent, BnAosViewPortDirective } from '@binom/sdk-animation/aos';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule,BnInfoBoxComponent, DocCompComponent, BnGridBlockDirective, BnAnimateOnScrollComponent],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
 code = ` <bn-info-box translateKey="" icon="">
 <img style="height:100px" src="./assets/error-page-svgrepo-com.svg" />
</bn-info-box>`;
}
