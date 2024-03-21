import {  Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


import { CdkScrollable, CdkScrollableModule } from '@angular/cdk/scrolling';
import { BnAnimateOnScrollComponent, BnAnimateOnScrollService, BnAosViewPortDirective } from '@binom/sdk-animation/aos';

import { BnCssGridModule, BnGridConfigService } from '@binom/sdk-layout/css-grid';
import { BnLoggerService } from '@binom/sdk-core/logger';

import { BnSplitContentComponent, BnSplitContentItemDirective } from '@binom/sdk-layout/split-content';

import { BnThemeService, themes } from '@binom/sdk-theme/core';
import { BnThemeBackgroundComponent } from '@binom/sdk-theme/theme-background';
import { BnRouterDataAndTitleService } from '@binom/sdk-core/router'; 

import { AppHeaderComponent } from './main/app-header/app-header.component';
import { BnLayoutService } from '@binom/sdk-layout/core';
import { BnPrivacyService } from '@binom/sdk-privacy/core';
import { BnTagsService } from '@binom/sdk-tags-and-ratings/tags-svc';
import { BnUserStateService } from '@binom/sdk-user/core';
import { routerFadeIn } from '@binom/sdk-animation/animation-router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    BnAnimateOnScrollComponent, 
    BnAosViewPortDirective, 
    AppHeaderComponent,
    BnCssGridModule, 
    BnSplitContentComponent, 
    BnSplitContentItemDirective, 
    BnThemeBackgroundComponent,
    TranslateModule, 
    CdkScrollableModule, CdkScrollable,
  ],
  providers:[ 
    BnRouterDataAndTitleService, 
    BnThemeService, 
    BnAnimateOnScrollService,
    BnGridConfigService, 
    BnPrivacyService, 
    BnTagsService, 
    BnUserStateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[routerFadeIn]
})

export class AppComponent {

  themes:any = themes;
  
  private bnThemeSvc = inject(BnThemeService);
  private logger = inject(BnLoggerService);
  private translate = inject(TranslateService);
  private routerSvc = inject(BnRouterDataAndTitleService);

  private userSvc = inject(BnUserStateService);
  private layoutSvc = inject(BnLayoutService)

  constructor(){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'en-US' );
    this.logger.logLevel = -1;
    this.bnThemeSvc.registerThemes(this.themes);
    this.routerSvc.appTitle = 'BN-SDKS';

    this.routerSvc.routerData$.subscribe((data:any) => {
      console.log(data)
      this.calcHeights = data.activeRoute === '/home' ? false : true;
      this.preheader = data.breadcrumbs[0]?.data?.preheader? data.breadcrumbs[0].data.preheader:false;
    })

  
  }

  calcHeights:boolean = false;
  preheader:boolean = false;
  sidebarleft:boolean = false;
  sidebarright:boolean = false;
  toggleIconSidebar:boolean = false;
  precontent:boolean = true;
  footer:boolean = false;

  
}
