import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-picker-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './picker-home.component.html',
  styleUrl: './picker-home.component.scss'
})
export class PickerHomeComponent {
  sdk="sdk-picker";
  assets=['i18n/de-DE.json','i18n/en-US.json'];
}
