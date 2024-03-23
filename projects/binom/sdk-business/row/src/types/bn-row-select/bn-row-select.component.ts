import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bn-row-select',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective, MatSelectModule, MatFormFieldModule, MatTooltipModule, TranslateModule,FormsModule, ReactiveFormsModule],
  templateUrl: './bn-row-select.component.html',
  styleUrl: './bn-row-select.component.css'
})
export class BnRowSelectComponent implements OnInit {
  @Input() disableAll: boolean = false;
  @Input() colConf:any;
  @Input() row:any;
  @Input() searchText:string = '';
  @Input() secureMode:string = 'auth';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableEdit: boolean = false;
  @Output() quickAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  openedChange(action:string, data:any, row:any){
    this.quickAction.emit({action:action, row:row, selectData:data, source: 'select'})
  }

  compareFn( optionOne:any, optionTwo:any ) : boolean {
    if(optionOne !== null && optionTwo !== null && optionOne !== undefined && optionTwo !== undefined)
      if(optionOne.id === optionTwo.id )
        return true
      else return false
    else return false
  }

  resolve(path:any, obj:any) {
      let retVal = path.split('.').reduce(function(prev:any, curr:any) {
          return prev ? prev[curr] : null
      }, obj || self)
      return retVal
  }

  setAction(row:any, action:string){

  }

}
