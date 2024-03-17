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

}
