import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-linklist-demo',
  standalone: true,
  imports: [CommonModule,DocCompComponent],
  templateUrl: './linklist-demo.component.html',
  styleUrl: './linklist-demo.component.scss'
})
export class LinklistDemoComponent {

}
