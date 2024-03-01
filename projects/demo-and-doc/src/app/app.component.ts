import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { BnAnimateOnScrollComponent, BnAosViewPortDirective } from '@binom/sdk-animation/aos';

import { BnCssGridModule } from '@binom/sdk-layout/css-grid';
import { BnLoggerService } from '@binom/sdk-core/logger';

import { BnSplitContentComponent, BnSplitContentItemDirective } from '@binom/sdk-layout/split-content';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';
import { BnThemeService, themes } from '@binom/sdk-theme/core';
import { BnThemeBackgroundComponent } from '@binom/sdk-theme/theme-background';
import { BnRouterDataAndTitleService } from '@binom/sdk-core/router'; 

import { AppHeaderComponent } from './main/app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule, BnAnimateOnScrollComponent,BnAosViewPortDirective, AppHeaderComponent,
    TranslateModule, MatSidenavModule, MatExpansionModule, 
    CdkScrollableModule, BnCssGridModule, BnSplitContentComponent, BnSplitContentItemDirective, BnThemeSwitchMenuComponent, BnThemeBackgroundComponent
  ],
  providers:[ BnRouterDataAndTitleService,BnThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'test';
  themes:any = themes;
  constructor(){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'en-US' );
    this.logger.logLevel = -1;
    this.bnThemeSvc.registerThemes(this.themes);
  }
  router = inject(Router);
  private bnThemeSvc = inject(BnThemeService);
  private logger = inject(BnLoggerService);
  private translate = inject(TranslateService);

  preheader:boolean = true;
  sidebarleft:boolean = false;
  sidebarright:boolean = false;
  toggleIconSidebar:boolean = false;
  precontent:boolean = true;
  footer:boolean = true;

  
}
