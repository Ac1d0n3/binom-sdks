import { Component,
  Input, Output,
  OnInit, EventEmitter
} from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';


@Component({
  selector: 'bn-row-loop',
  templateUrl: './loop.component.html',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective]
})
export class BnRowLoopComponent implements OnInit {
  @Input() disableAll: boolean = false;
  @Input() colConf:any;
  @Input() row:any;
  @Input() secureMode:string = 'auth'
  @Input() searchText:string = '';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
