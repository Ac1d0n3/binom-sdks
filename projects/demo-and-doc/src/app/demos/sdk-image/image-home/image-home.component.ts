import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-image-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './image-home.component.html',
  styleUrl: './image-home.component.scss'
})
export class ImageHomeComponent {

}
