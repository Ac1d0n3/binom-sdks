import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-bn-help-svc',
  standalone: true,
  imports: [CommonModule, DocSvcComponent],
  templateUrl: './bn-help-svc.component.html',
  styleUrl: './bn-help-svc.component.scss'
})
export class BnHelpSvcComponent {
  data:any = [
   
  
  ]
}
