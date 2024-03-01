
import { MatToolbarModule } from '@angular/material/toolbar'
import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { MatExpansionModule} from '@angular/material/expansion';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { BnAnimateOnScrollComponent, BnAosViewPortDirective } from '@binom/sdk-animation/aos';

import { BnCssGridModule } from '@binom/sdk-layout/css-grid';
import { BnLoggerService } from '@binom/sdk-core/logger';
import { BnLayoutSwitchMenuComponent } from '@binom/sdk-layout/layout-switch';
import { BnSplitContentComponent, BnSplitContentItemDirective } from '@binom/sdk-layout/split-content';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';

import { BnThemeBackgroundComponent } from '@binom/sdk-theme/theme-background';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule, MatToolbarModule, BnAnimateOnScrollComponent,BnAosViewPortDirective,
    BnTranslateSwitchMenuComponent, TranslateModule, MatSidenavModule, MatButtonModule, MatExpansionModule, BnLayoutSwitchMenuComponent,
    CdkScrollableModule, BnCssGridModule, BnSplitContentComponent, BnSplitContentItemDirective, BnThemeSwitchMenuComponent, BnThemeBackgroundComponent
  ],
  //providers:[ BnRouterDataAndTitleService,BnThemeService],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
 
}
