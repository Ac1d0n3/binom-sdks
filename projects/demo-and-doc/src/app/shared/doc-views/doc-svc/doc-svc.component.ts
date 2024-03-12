import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { SvcMethods } from './svc-methods';

@Component({
  selector: 'app-doc-svc',
  standalone: true,
  imports: [CommonModule,BnPrismBoxComponent, MatToolbar],
  templateUrl: './doc-svc.component.html',
  styleUrl: './doc-svc.component.scss'
})
export class DocSvcComponent {
  @Input() title:string = '';
  @Input() descr:string[] = [];
  @Input() methods:SvcMethods[] = [] as any;

  @Input() rootSvc:boolean = true;

}
