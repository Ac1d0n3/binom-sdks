import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-router-param-filter-svc',
  standalone: true,
  imports: [CommonModule, DocSvcComponent],
  templateUrl: './router-param-filter-svc.component.html',
  styleUrl: './router-param-filter-svc.component.scss'
})
export class RouterParamFilterSvcComponent {
data=[]
}
