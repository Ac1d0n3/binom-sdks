import { Component } from '@angular/core';
import { BnIconsPickerComponent } from '@binom/sdk-picker/icons-picker';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-icon-picker',
  standalone: true,
  imports: [BnIconsPickerComponent,DocCompComponent],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.scss'
})
export class IconPickerComponent {

}
