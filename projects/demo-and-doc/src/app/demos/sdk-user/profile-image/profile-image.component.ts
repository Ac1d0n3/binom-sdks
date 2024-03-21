import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnProfileImageComponent, BnProfileImageEditComponent, BnProfileImageShowComponent } from '@binom/sdk-user/profile-img';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule, BnProfileImageComponent, BnProfileImageEditComponent, BnProfileImageShowComponent,DocCompComponent],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {
  code1 = `<bn-profile-image id="a" [editMode]="true"></bn-profile-image>`;
  code2 = `<bn-profile-image-show id="b" imageUrl="./assets/test.jpeg" transform="translate(-20 -10) scale(1.5)"></bn-profile-image-show>`;
  code3 = `<bn-profile-image-edit id="c" imageUrl="./assets/test.jpeg"></bn-profile-image-edit>`;
}
