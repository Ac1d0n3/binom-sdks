import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnWordcountPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-wordcount',
  standalone: true,
  imports: [CommonModule, BnWordcountPipe, FormsModule,  MatFormFieldModule, MatInputModule,DocCompComponent],
  templateUrl: './wordcount.component.html',
  styleUrl: './wordcount.component.scss'
})
export class WordcountComponent {
  inputValue: string = 'This is a sample text with multiple words.';
}
