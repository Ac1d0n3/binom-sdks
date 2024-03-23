import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
import { BnRowComponent } from '../bn-row/bn-row.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'bn-detailed-row',
  templateUrl: './detailed-row.component.html',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective, BnRowComponent, TranslateModule]
})
export class DetailedRowComponent implements OnInit {


  @Input() config:any;
  @Input() columns:any;
  @Input() row:any;
  @Input() searchText:string = '';
  

  @Input() secureMode:string = 'auth'
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() disableEdit: boolean = false;
  @Input() tagStyleDisabled: boolean = true;
  @Output() quickAction = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setAction(data:any){

    this.quickAction.emit(data)
  }

}
