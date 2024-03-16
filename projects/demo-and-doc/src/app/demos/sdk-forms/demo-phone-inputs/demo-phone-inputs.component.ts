import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPhoneInputComponent } from '@binom/sdk-forms/phone-inputs';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-phone-inputs',
  standalone: true,
  imports: [CommonModule,BnPhoneInputComponent,DocCompComponent],
  templateUrl: './demo-phone-inputs.component.html',
  styleUrl: './demo-phone-inputs.component.scss'
})
export class DemoPhoneInputsComponent {

}
