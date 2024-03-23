import { Component,
  Input, Output,
  OnInit, EventEmitter
} from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
@Component({
  selector: 'bn-row-image',
  templateUrl: './image.component.html', 
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective]
})
export class BnRowImageComponent implements OnInit {
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
