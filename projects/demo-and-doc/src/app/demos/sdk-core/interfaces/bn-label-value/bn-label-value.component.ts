import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-bn-label-value',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './bn-label-value.component.html',
  styleUrl: './bn-label-value.component.scss'
})
export class BnLabelValueComponent {

}
