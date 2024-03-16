import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnButtonSetMoveComponent } from '@binom/sdk-forms/button-set-move';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-set-move',
  standalone: true,
  imports: [CommonModule,BnButtonSetMoveComponent,DocCompComponent],
  templateUrl: './demo-set-move.component.html',
  styleUrl: './demo-set-move.component.scss'
})
export class DemoSetMoveComponent {

}
