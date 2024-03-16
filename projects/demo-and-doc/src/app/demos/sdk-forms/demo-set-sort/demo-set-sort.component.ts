import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnButtonSetSortComponent } from '@binom/sdk-forms/button-set-sort';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-set-sort',
  standalone: true,
  imports: [CommonModule, BnButtonSetSortComponent,DocCompComponent],
  templateUrl: './demo-set-sort.component.html',
  styleUrl: './demo-set-sort.component.scss'
})
export class DemoSetSortComponent {

}
