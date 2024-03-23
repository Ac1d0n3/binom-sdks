import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BnRatingsComponent } from '@binom/sdk-tags-and-ratings/ratings';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';


@Component({
  selector: 'bn-row-rating',
  standalone: true,
  imports:[BnRatingsComponent, BnAuthDirective, BnRolesDirective],
  templateUrl: './bn-row-rating.component.html',
  styleUrl: './bn-row-rating.component.css'
})
export class BnRowRatingComponent  implements OnInit {
  @Input() disableAll: boolean = false;
  @Input() colConf:any;
  @Input() row:any;
  @Input() secureMode:string = 'auth'
  @Input() searchText:string = '';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableEdit: boolean = false;
  @Output() quickAction = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setAction( action:string,row:any,value:number){

    this.quickAction.emit({action:action, row:row, rating:value, source: 'rating'})
  }

}

