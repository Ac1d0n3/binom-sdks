import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { sdkDemos } from './sdk-core-demos.data';
import { SdkNavComponent } from '../../shared/sdk-nav/sdk-nav.component';
import { SdkHeaderComponent } from '../../shared/sdk-header/sdk-header.component';
import { BnCssGridModule } from '@binom/sdk-layout/css-grid';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { routerFadeIn } from '@binom/sdk-animation/animation-router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-core-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule, CdkScrollable],
  templateUrl: './core-main.component.html',
  styleUrl: './core-main.component.scss',
  animations:[routerFadeIn],
})
export class CoreMainComponent implements AfterViewInit {
  routerFadeInValue: string = '';
  private router = inject(Router)
  ngAfterViewInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        this.routerFadeInValue = event.url;
      });
  }

  data = sdkDemos;
  sdk = 'sdk-core';
  sidebar:boolean = true;
}
