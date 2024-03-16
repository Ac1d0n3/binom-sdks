import { Component } from '@angular/core';
import { BnEmojiDataService, BnEmojiPickerComponent } from '@binom/sdk-picker/emoji';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-emoji-picker',
  standalone: true,
  imports: [BnEmojiPickerComponent,DocCompComponent],
  providers:[BnEmojiDataService],
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss'
})
export class EmojiPickerComponent {

}
