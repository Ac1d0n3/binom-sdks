import { Component,
  Input, Output,
  OnInit, EventEmitter
} from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
@Component({
  selector: 'bn-row-link',
  templateUrl: './link.component.html',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective]
})
export class BnRowLinkComponent implements OnInit {
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
