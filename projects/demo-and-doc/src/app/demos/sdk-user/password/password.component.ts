import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPasswordInputComponent } from '@binom/sdk-user/password';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, BnPasswordInputComponent,DocCompComponent],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

}
