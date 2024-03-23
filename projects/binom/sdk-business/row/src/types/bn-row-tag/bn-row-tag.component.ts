import { Component, Input, OnInit } from '@angular/core';
import { BnTagsEditComponent } from '@binom/sdk-tags-and-ratings/tags-edit';
import { BnTagsShowComponent } from '@binom/sdk-tags-and-ratings/tags-show';
import { BnTagsShowEditComponent } from '@binom/sdk-tags-and-ratings/tags-show-edit';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';

@Component({
  selector: 'bn-row-tag',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective,BnTagsShowComponent, BnTagsEditComponent],
  templateUrl: './bn-row-tag.component.html',
  styleUrl: './bn-row-tag.component.css'
})
export class BnRowTagComponent implements OnInit {

  @Input() colConf:any;
  @Input() row:any;
  @Input() searchText:string = '';
  @Input() disableEdit: boolean = false;
  @Input() secureMode:string = 'auth'
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() styleDisabled:boolean = true
  constructor() { }
  ngOnInit(): void { }

}