import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { SdkNavComponent } from '../../shared/sdk-nav/sdk-nav.component';
import { SdkHeaderComponent } from '../../shared/sdk-header/sdk-header.component';
import { BnCssGridModule } from '@binom/sdk-layout/css-grid';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { routerFadeIn } from '@binom/sdk-animation/animation-router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-picker-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule, CdkScrollable],
  templateUrl: './picker-main.component.html',
  styleUrl: './picker-main.component.scss',
  animations:[routerFadeIn],
})
export class PickerMainComponent {
  sidebar:boolean = true;
  routerFadeInValue: string = '';
  private router = inject(Router)
  ngAfterViewInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        this.routerFadeInValue = event.url;
      });
  }

  data = [

    {
      title: 'components',
      data: ['bn-color-picker','bn-emoji-picker','bn-specialchars-picker','bn-icon-picker']
    },
  ]
  sdk = 'sdk-picker';

}
