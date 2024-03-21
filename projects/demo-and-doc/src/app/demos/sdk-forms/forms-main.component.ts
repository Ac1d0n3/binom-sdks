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
  selector: 'app-forms-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SdkNavComponent,SdkHeaderComponent, BnCssGridModule, CdkScrollable],
  templateUrl: './forms-main.component.html',
  styleUrl: './forms-main.component.scss',
  animations:[routerFadeIn],
})
export class FormsMainComponent implements AfterViewInit {
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
      data: ['abc-buttons','buttonset-move', 'buttonset-sort','counter-button','mini-header','picklist','sort-menu']
    },
  ]
  sdk = 'sdk-forms';
}
