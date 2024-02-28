import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'bn-exif-info',
  templateUrl: './bn-exif-info.component.html',
  standalone:true,
  imports:[TranslateModule],
})
export class BnExifInfoComponent {
  @Input () exifData!:any;
}
