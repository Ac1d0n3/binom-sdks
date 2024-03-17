import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-tags-and-ratings-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './tags-and-ratings-home.component.html',
  styleUrl: './tags-and-ratings-home.component.scss'
})
export class TagsAndRatingsHomeComponent {
  sdk="sdk-tags-and-ratings";
  assets=['i18n/de-DE.json','i18n/en-US.json'];
}
