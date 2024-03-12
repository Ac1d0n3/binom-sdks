import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-router-reuse-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './router-reuse-svc.component.html',
  styleUrl: './router-reuse-svc.component.scss'
})
export class RouterReuseSvcComponent {
  data = []
}
