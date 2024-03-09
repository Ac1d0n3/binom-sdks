import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnIconComponent } from '@binom/sdk-core/icons';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnGridBlockDirective } from '@binom/sdk-layout/grid-block';

@Component({
  selector: 'app-bn-icon',
  standalone: true,
  imports: [CommonModule, BnIconComponent, DocCompComponent, BnGridBlockDirective],
  templateUrl: './bn-icon.component.html',
  styleUrl: './bn-icon.component.scss'
})
export class IconComponent {

}
