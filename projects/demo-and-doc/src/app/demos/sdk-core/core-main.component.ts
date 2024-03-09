import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { sdkDemos } from './sdk-core-demos.data';
import { SdkNavComponent } from '../../shared/sdk-nav/sdk-nav.component';
import { SdkHeaderComponent } from '../../shared/sdk-header/sdk-header.component';
import { BnCssGridModule } from '@binom/sdk-layout/css-grid';


@Component({
  selector: 'app-core-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule],
  templateUrl: './core-main.component.html',
  styleUrl: './core-main.component.scss'
})
export class CoreMainComponent {

 
  data = sdkDemos;

}
