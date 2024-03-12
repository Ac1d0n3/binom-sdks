import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [CommonModule, DocSvcComponent],
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss'
})
export class JsonComponent {
  data:any = [
    {
      name: 'getData',
      params: [
        {
          name: 'url',
          type: 'string'
        }
      ]
    },
  
  ]
}
