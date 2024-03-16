import { Component } from '@angular/core';
import { BnColorpickerComponent, BnColorpickerModule } from '@binom/sdk-picker/bn-colorpicker';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [BnColorpickerModule,DocCompComponent],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {

}
