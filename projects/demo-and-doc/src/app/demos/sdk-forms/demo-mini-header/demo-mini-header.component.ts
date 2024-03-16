import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnMiniHeaderComponent } from '@binom/sdk-forms/mini-header';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-mini-header',
  standalone: true,
  imports: [CommonModule,BnMiniHeaderComponent,DocCompComponent],
  templateUrl: './demo-mini-header.component.html',
  styleUrl: './demo-mini-header.component.scss'
})
export class DemoMiniHeaderComponent {

}
