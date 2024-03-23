import { CommonModule } from '@angular/common';
import { Component,Input, OnInit, OnDestroy} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BnThemeService } from '@binom/sdk-theme/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from "rxjs";

 
@Component({
  selector: 'bn-row-icon-loop',
  standalone: true,
  imports:[CommonModule, MatTooltipModule, TranslateModule, BnRolesDirective, BnAuthDirective],
  templateUrl: './bn-row-icon-loop.component.html',
  styleUrl: './bn-row-icon-loop.component.css'
})
export class BnRowIconLoopComponent implements OnInit, OnDestroy {

  @Input() colConf:any;
  @Input() row:any;
  @Input() secureMode:string = 'auth';
  @Input() searchText:string = '';
  @Input() enableToolTips:boolean = true;
  @Input() translateTag:string = '';
  @Input() disableAll: boolean = false;
  @Input() disableEdit: boolean = false;
  subscriptions: Array<Subscription> = new Array<Subscription>();
  //dynSubcriptions: Array<Subscription> = new Array<Subscription>();
  constructor(
      private themeService:BnThemeService,
  ) { }

  ngOnInit(): void {
    let sub1$ = this.themeService.darkMode$.subscribe((data:any) =>{
      this.colConf.darkMode = data

    }); this.subscriptions.push(sub1$)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    //this.dynSubcriptions.forEach(subscription => subscription.unsubscribe());
  }
}
