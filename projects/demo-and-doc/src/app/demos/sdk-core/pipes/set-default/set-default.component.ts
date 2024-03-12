import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSetDefaultPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-set-default',
  standalone: true,
  imports: [CommonModule, BnSetDefaultPipe, FormsModule,  MatFormFieldModule, MatInputModule,DocCompComponent],
  templateUrl: './set-default.component.html',
  styleUrl: './set-default.component.scss'
})
export class SetDefaultComponent {
  inputValue: string = '';
}
