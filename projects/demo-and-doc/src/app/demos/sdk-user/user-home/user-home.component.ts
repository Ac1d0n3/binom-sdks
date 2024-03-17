import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {
  sdk="sdk-user";
  assets=['i18n/de-DE.json','i18n/en-US.json'];
}
