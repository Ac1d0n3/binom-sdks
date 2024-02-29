import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { BnAnimateOnScrollComponent, BnAosViewPortDirective } from '@binom/sdk-animation/aos';
import { BnLayoutAppWrapperDirective } from '../../../binom/sdk-layout/css-grid';
import { BnCssGridModule } from '@binom/sdk-layout/css-grid';
import { BnLoggerService } from '@binom/sdk-core/logger';
import { BnLayoutSwitchMenuComponent } from '@binom/sdk-layout/layout-switch';
import { BnSplitContentComponent, BnSplitContentItemDirective } from '@binom/sdk-layout/split-content';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';
import { BnThemeService, themes } from '@binom/sdk-theme/core';
import { BnThemeBackgroundComponent } from '@binom/sdk-theme/theme-background';
import { BnRouterDataAndTitleService } from '@binom/sdk-core/router'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule, MatToolbarModule, BnAnimateOnScrollComponent,BnAosViewPortDirective,
    BnTranslateSwitchMenuComponent, TranslateModule, MatSidenavModule, MatButtonModule, MatExpansionModule, BnLayoutSwitchMenuComponent,
    CdkScrollableModule, BnCssGridModule, BnSplitContentComponent, BnSplitContentItemDirective, BnThemeSwitchMenuComponent, BnThemeBackgroundComponent
  ],
  providers:[ BnRouterDataAndTitleService,BnThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  themes:any = themes;
  constructor(private translate:TranslateService, private bnThemeSvc: BnThemeService){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'en-US' );
    this.data.sort((a:any, b:any) => a.title.localeCompare(b.title));
    this.data.forEach((item:any) => {
      item.data.sort();
    });
    this.logger.logLevel = -1;
    this.bnThemeSvc.registerThemes(this.themes);
  }
  router = inject(Router);

  private logger = inject(BnLoggerService)

  

  data = [

    {
      title: 'animation',
      data: ['effects', 'in', 'out']
    },
    {
      title: 'aos',
      data: ['svc', 'directive']
    },
  
  ]

  preheader:boolean = true;
  sidebarleft:boolean = false;
  sidebarright:boolean = false;
  toggleIconSidebar:boolean = false;
  precontent:boolean = true;
  footer:boolean = true;

  
}
