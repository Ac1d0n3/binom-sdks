import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnRowBasicComponent } from '../types/bn-row-basic/bn-row-basic.component';

import { BnRowIconLoopComponent } from '../types/bn-row-icon-loop/bn-row-icon-loop.component';
import { BnRowImageComponent } from '../types/bn-row-image/bn-row-image.component';
import { BnRowLinkComponent } from '../types/bn-row-link/bn-row-link.component';
import { BnRowLoopComponent } from '../types/bn-row-loop/bn-row-loop.component';
import { BnRowRatingComponent } from '../types/bn-row-rating/bn-row-rating.component';
import { BnRowSelectComponent } from '../types/bn-row-select/bn-row-select.component';
import { BnRowSwitchComponent } from '../types/bn-row-switch/bn-row-switch.component';
import { BnRowTagComponent } from '../types/bn-row-tag/bn-row-tag.component';

@Component({
  selector: 'bn-row',
  standalone: true,
  imports:[BnRowBasicComponent, BnRowIconLoopComponent, BnRowImageComponent, BnRowLinkComponent,BnRowLoopComponent, BnRowRatingComponent, BnRowSelectComponent, BnRowSwitchComponent,BnRowTagComponent],
  templateUrl: './bn-row.component.html',
  styleUrl: './bn-row.component.css'
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