import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-content-demo',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './content-demo.component.html',
  styleUrl: './content-demo.component.scss'
})
export class ContentDemoComponent {

}
