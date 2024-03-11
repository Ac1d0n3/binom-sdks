import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnHelpService, BnHelpSwitchComponent, BnHelpSwitchMenuComponent } from '@binom/sdk-core/help';
import { TranslateModule } from '@ngx-translate/core';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-bn-help-demo',
  standalone: true,
  imports: [CommonModule, BnHelpSwitchComponent, BnHelpSwitchMenuComponent, TranslateModule,DocCompComponent],
  templateUrl: './bn-help-demo.component.html',
  styleUrl: './bn-help-demo.component.scss'
})
export class BnHelpDemoComponent {
  constructor(private helpSvc:BnHelpService){}

}
