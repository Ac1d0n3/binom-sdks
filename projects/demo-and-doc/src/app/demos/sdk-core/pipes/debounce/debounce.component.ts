import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnDebouncePipe } from '@binom/sdk-core/pipes';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';
@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [CommonModule, BnDebouncePipe, FormsModule,  MatFormFieldModule, MatInputModule, DocCompComponent],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss'
})
export class DebounceComponent {
  inputValue: string = '';
}
