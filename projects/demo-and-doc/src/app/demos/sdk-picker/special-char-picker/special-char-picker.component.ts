import { Component } from '@angular/core';
import { BnSpecialCharPickerComponent } from '@binom/sdk-picker/special-chars';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-special-char-picker',
  standalone: true,
  imports: [BnSpecialCharPickerComponent,DocCompComponent],
  templateUrl: './special-char-picker.component.html',
  styleUrl: './special-char-picker.component.scss'
})
export class SpecialCharPickerComponent {

}
