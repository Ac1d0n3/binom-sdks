import { Component } from '@angular/core';
import { SdkInfoComponent } from '../../../shared/sdk-info/sdk-info.component';

@Component({
  selector: 'app-forms-home',
  standalone: true,
  imports: [SdkInfoComponent],
  templateUrl: './forms-home.component.html',
  styleUrl: './forms-home.component.scss'
})
export class FormsHomeComponent {
  sdk="sdk-forms";
  assets = []
}
