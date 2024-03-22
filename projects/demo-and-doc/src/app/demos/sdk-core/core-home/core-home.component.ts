import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-core-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './core-home.component.html',
  styleUrl: './core-home.component.scss'
})
export class CoreHomeComponent {
  assets=['i18n/de-DE.json','i18n/en-US.json','core.css'];
  version = '1.1.6'
}
