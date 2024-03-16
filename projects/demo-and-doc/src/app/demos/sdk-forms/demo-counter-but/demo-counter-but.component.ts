import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnCounterButtonComponent } from '@binom/sdk-forms/counter-button';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-counter-but',
  standalone: true,
  imports: [CommonModule, BnCounterButtonComponent,DocCompComponent],
  templateUrl: './demo-counter-but.component.html',
  styleUrl: './demo-counter-but.component.scss'
})
export class DemoCounterButComponent {
 code = '<bn-counter-button [count]="10" [countOnClick]="false"></bn-counter-button>'
}
