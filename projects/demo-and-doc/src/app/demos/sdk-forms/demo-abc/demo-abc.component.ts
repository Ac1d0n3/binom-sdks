import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnAbcButtonsComponent } from '@binom/sdk-forms/abc-buttons';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-abc',
  standalone: true,
  imports: [CommonModule, BnAbcButtonsComponent, DocCompComponent],
  templateUrl: './demo-abc.component.html',
  styleUrl: './demo-abc.component.scss'
})
export class DemoAbcComponent {
  cur:string = '';
  clicked(val:string){
    this.cur = val
  }
  code = ' <bn-abc-buttons (clickedOn)="clicked($event)"></bn-abc-buttons>'
}
