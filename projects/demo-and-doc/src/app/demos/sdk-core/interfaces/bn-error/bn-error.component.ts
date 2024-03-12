import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-bn-error',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './bn-error.component.html',
  styleUrl: './bn-error.component.scss'
})
export class BnErrorComponent {

}
