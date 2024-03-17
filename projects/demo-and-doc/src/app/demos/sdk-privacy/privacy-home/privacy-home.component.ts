import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-privacy-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './privacy-home.component.html',
  styleUrl: './privacy-home.component.scss'
})
export class PrivacyHomeComponent {
  sdk="sdk-privacy";
  assets=['i18n/de-DE.json','i18n/en-US.json'];
}
