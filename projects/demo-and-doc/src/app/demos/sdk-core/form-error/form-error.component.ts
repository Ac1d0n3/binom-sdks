import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule, DocCompComponent],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent {

}
