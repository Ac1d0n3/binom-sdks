import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnHoverClassDirective } from '@binom/sdk-core/hover';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-hover-class',
  standalone: true,
  imports: [CommonModule, BnHoverClassDirective, DocCompComponent],
  templateUrl: './hover-class.component.html',
  styleUrl: './hover-class.component.scss'
})
export class HoverClassComponent {

}
