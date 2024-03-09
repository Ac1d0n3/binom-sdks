import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sdk-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './sdk-header.component.html',
  styleUrl: './sdk-header.component.scss'
})
export class SdkHeaderComponent {

}
