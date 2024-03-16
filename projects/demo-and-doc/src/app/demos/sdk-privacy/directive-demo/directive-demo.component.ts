import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrivacyDirective, BnPrivacyService } from '@binom/sdk-privacy/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,MatButtonModule,BnPrivacyDirective,DocCompComponent],

  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent {
  toggle:boolean = false;
}
