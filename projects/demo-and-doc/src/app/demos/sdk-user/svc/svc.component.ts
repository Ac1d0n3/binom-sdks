import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './svc.component.html',
  styleUrl: './svc.component.scss'
})
export class SvcComponent {

}
