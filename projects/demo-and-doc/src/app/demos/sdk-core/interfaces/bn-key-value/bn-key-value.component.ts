import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-bn-key-value',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './bn-key-value.component.html',
  styleUrl: './bn-key-value.component.scss'
})
export class BnKeyValueComponent {

}
