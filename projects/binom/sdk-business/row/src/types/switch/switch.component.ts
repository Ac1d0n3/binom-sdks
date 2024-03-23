import { Component,
  Input, Output,
  OnInit, EventEmitter
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';

@Component({
  selector: 'bn-row-switch',
  templateUrl: './switch.component.html',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective, MatButtonModule]
})
export class BnRowSwitchComponent implements OnInit {
  @Input() colConf:any;
  @Input() row:any;
  @Input() searchText:string = '';
  @Input() secureMode:string = 'auth';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() disableEdit: boolean = false;

  @Output() quickAction = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setAction(row:any, action:string, colName:string){
    row[colName] = !row[colName];
    //if(!row.edit)
    this.quickAction.emit({action:action, row:row, source: 'colSwitch'})

  }
}
