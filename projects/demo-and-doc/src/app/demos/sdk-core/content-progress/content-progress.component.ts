import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnProgressContentComponent } from '@binom/sdk-core/progress-content';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';
import { SvcMethods } from '../../../shared/doc-views/doc-svc/svc-methods';

@Component({
  selector: 'app-content-progress',
  standalone: true,
  imports: [CommonModule, BnProgressContentComponent, DocCompComponent],
  templateUrl: './content-progress.component.html',
  styleUrl: './content-progress.component.scss'
})
export class ContentProgressComponent {
 
}
