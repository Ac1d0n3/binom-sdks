import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-svc-demo',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './svc-demo.component.html',
  styleUrl: './svc-demo.component.scss'
})
export class SvcDemoComponent {

}
