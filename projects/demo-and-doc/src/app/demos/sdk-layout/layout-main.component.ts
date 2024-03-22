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
  selector: 'app-layout-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule, CdkScrollable],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
  animations:[routerFadeIn],
})
export class LayoutMainComponent implements AfterViewInit {
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
      title: 'core',
      data: ['layout-svc']
    },
    {
      title: 'cssgrid',
      data: ['grid-svc','module','layout-switch']
    },
    {
      title: 'directives',
      data: ['show-on','gridblock','split-content']
    },
  ]

  sdk = 'sdk-layout';
  version = '1.1.6';
  sidebar:boolean = true;
}
