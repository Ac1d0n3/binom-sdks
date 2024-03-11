import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-selection-and-caret-svc',
  standalone: true,
  imports: [CommonModule, DocCompComponent],
  templateUrl: './selection-and-caret-svc.component.html',
  styleUrl: './selection-and-caret-svc.component.scss'
})
export class SelectionAndCaretSvcComponent {

}
