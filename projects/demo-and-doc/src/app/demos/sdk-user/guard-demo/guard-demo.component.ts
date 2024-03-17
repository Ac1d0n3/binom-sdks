import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-guard-demo',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './guard-demo.component.html',
  styleUrl: './guard-demo.component.scss'
})
export class GuardDemoComponent {

}
