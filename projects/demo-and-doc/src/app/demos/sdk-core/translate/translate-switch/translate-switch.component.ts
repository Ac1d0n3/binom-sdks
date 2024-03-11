import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnTranslateSwitchComponent, BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-translate-switch',
  standalone: true,
  imports: [CommonModule, BnTranslateSwitchComponent, BnTranslateSwitchMenuComponent, DocCompComponent],
  templateUrl: './translate-switch.component.html',
  styleUrl: './translate-switch.component.scss'
})
export class TranslateSwitchComponent {

}
