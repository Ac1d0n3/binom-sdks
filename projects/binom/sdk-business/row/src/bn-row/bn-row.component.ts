import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnRowBasicComponent } from '../types/basic/basic.component';
import { BnRowDateComponent } from '../types/date/date.component';
import { BnRowIconLoopComponent } from '../types/icon-loop/icon-loop.component';
import { BnRowImageComponent } from '../types/image/image.component';
import { BnRowLinkComponent } from '../types/link/link.component';
import { BnRowLoopComponent } from '../types/loop/loop.component';
import { BnRowRatingComponent } from '../types/rating/rating.component';
import { BnRowSelectComponent } from '../types/select/select.component';
import { BnRowSwitchComponent } from '../types/switch/switch.component';
import { BnRowTagComponent } from '../types/tag/tag.component';

@Component({
  selector: 'bn-rows',
  templateUrl: './bn-row.component.html',
  standalone: true,
  imports:[BnRowBasicComponent, BnRowDateComponent,BnRowIconLoopComponent,BnRowImageComponent, BnRowLinkComponent,BnRowLoopComponent, BnRowRatingComponent, BnRowSelectComponent, BnRowSwitchComponent,BnRowTagComponent]
})
export class BnRowComponent implements OnInit {

  @Input() col:any;
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
