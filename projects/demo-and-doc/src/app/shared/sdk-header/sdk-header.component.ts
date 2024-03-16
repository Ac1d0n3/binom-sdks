import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BnAnimateOnScrollComponent } from '@binom/sdk-animation/aos';

@Component({
  selector: 'app-sdk-header',
  standalone: true,
  imports: [MatToolbarModule,BnAnimateOnScrollComponent],
  templateUrl: './sdk-header.component.html',
  styleUrl: './sdk-header.component.scss'
})
export class SdkHeaderComponent {
  @Input() sdk:string = ''
}
