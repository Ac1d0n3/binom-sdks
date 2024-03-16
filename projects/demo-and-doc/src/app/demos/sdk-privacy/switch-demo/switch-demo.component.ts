import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacySwitchComponent } from '@binom/sdk-privacy/privacy-switch';
import { BnPrivacySwitchMenuComponent } from '@binom/sdk-privacy/privacy-switch-menu';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule,BnPrivacySwitchComponent,BnPrivacySwitchMenuComponent,DocCompComponent],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.scss'
})
export class SwitchDemoComponent {

}
