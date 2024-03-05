
import { MatToolbarModule } from '@angular/material/toolbar'
import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { BnAnimateOnScrollComponent, BnAosViewPortDirective } from '@binom/sdk-animation/aos';
import { BnLayoutSwitchMenuComponent } from '@binom/sdk-layout/layout-switch';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, TranslateModule,
    BnAnimateOnScrollComponent, BnAosViewPortDirective, BnTranslateSwitchMenuComponent, 
    BnThemeSwitchMenuComponent, BnLayoutSwitchMenuComponent,
    MatButtonModule, MatToolbarModule,
    CdkScrollableModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
 
  
}
