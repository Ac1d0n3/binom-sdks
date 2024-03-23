import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';

@Component({
  selector: 'bn-row-loop',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective],
  templateUrl: './bn-row-loop.component.html',
  styleUrl: './bn-row-loop.component.css'
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
