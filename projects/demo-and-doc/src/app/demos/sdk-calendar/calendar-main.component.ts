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
  selector: 'app-calendar-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule, CdkScrollable],
  templateUrl: './calendar-main.component.html',
  styleUrl: './calendar-main.component.scss',
  animations:[routerFadeIn],
})
export class CalendarMainComponent implements AfterViewInit {
  routerFadeInValue: string = '';
  private router = inject(Router)
  ngAfterViewInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        this.routerFadeInValue = event.url;
      });
  }
  sidebar:boolean = true;
  data = [
    {
      title: 'components',
      data: []
    },
  ]

  sdk = 'sdk-calendar';
}