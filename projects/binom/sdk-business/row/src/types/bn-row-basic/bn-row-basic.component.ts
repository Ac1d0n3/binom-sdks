import { Component,
  Input, Output,
  OnInit, EventEmitter,HostBinding
} from '@angular/core';
import { BnRowsService } from '../../svc/bn-rows.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BnHighlightPipe } from '@binom/sdk-core/pipes';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'bn-row-basic',
  standalone: true,
  imports:[CommonModule, MatFormFieldModule,BnAuthDirective, BnRolesDirective, TranslateModule, FormsModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatTooltipModule, BnHighlightPipe],
  templateUrl: './bn-row-basic.component.html',
  styleUrl: './bn-row-basic.component.css'
})
export class BnRowBasicComponent implements OnInit {

  @Input() colConf:any;
  @Input() row:any;
  @Input() searchText:string = '';
  @HostBinding('class') class:string = "row-basic";
  @Input() secureMode:string = 'auth'
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() disableEdit: boolean = false;
  constructor(private rowService: BnRowsService, public translate:TranslateService) { }

  ngOnInit(): void {
    
  }

  resolve(path:any, obj:any) {
      let retVal = path.split('.').reduce(function(prev:any, curr:any) {
          return prev ? prev[curr] : null
      }, obj || self)

      return retVal
  }

  validate(row:any){
    this.rowService.validateRow(row,[this.colConf])
  }

  @Output() quickAction = new EventEmitter()

  setAction(row:any, action:string){

    this.quickAction.emit({action:action, row:row, source: 'colSwitch'})
  }
}
