import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-val-access-content',
  standalone: true,
  imports: [CommonModule, DocCompComponent],
  templateUrl: './val-access-content.component.html',
  styleUrl: './val-access-content.component.scss'
})
export class ValAccessContentComponent {

}
