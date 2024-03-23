import { Component,Input, Output,OnInit, EventEmitter } from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
@Component({
  selector: 'bn-row-link',
  standalone: true,
  imports: [],
  templateUrl: './bn-row-link.component.html',
  styleUrl: './bn-row-link.component.css'
})
export class BnRowLinkComponent  implements OnInit {
  @Input() colConf:any;
  @Input() row:any;
  @Input() secureMode:string = 'auth';
  @Input() searchText:string = '';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() disableEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
