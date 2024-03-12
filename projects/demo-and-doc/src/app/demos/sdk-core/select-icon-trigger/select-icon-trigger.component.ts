import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSelectIconTriggerComponent } from '@binom/sdk-core/select-icon-trigger';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-select-icon-trigger',
  standalone: true,
  imports: [CommonModule,BnSelectIconTriggerComponent,DocCompComponent],
  templateUrl: './select-icon-trigger.component.html',
  styleUrl: './select-icon-trigger.component.scss'
})
export class SelectIconTriggerComponent {
  data = [
    {
      name: 'Field A'
    },
    {
      name: 'Field B'
    }
  ]
}
