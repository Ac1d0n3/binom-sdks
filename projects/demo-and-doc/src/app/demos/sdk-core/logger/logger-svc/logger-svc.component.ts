import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-logger-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './logger-svc.component.html',
  styleUrl: './logger-svc.component.scss'
})
export class LoggerSvcComponent {

}
