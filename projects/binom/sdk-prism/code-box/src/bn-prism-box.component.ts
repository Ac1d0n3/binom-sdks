import { ChangeDetectionStrategy, ChangeDetectorRef, Component,Input } from '@angular/core';
import { BooleanInput,coerceBooleanProperty } from '@angular/cdk/coercion';
import { BnPrismDirective, BnPrismService } from '@binom/sdk-prism/core';

import { Subscription } from 'rxjs';

import { BnRouterDataAndTitleService } from '@binom/sdk-core/router';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnHighlightPipe } from '@binom/sdk-core/pipes';
import { BnFullScreenDirective } from '@binom/sdk-core/screen';
import { BnIconComponent } from '@binom/sdk-core/icons';
import {ClipboardModule} from '@angular/cdk/clipboard';
@Component({
  selector: 'bn-prism-box',
  templateUrl: './bn-prism-box.component.html',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatToolbarModule,MatTooltipModule,TranslateModule,MatInputModule,FormsModule, ReactiveFormsModule,BnHighlightPipe,BnFullScreenDirective,BnIconComponent, BnPrismDirective,ClipboardModule]
})
export class BnPrismBoxComponent {
  private sub!: Subscription;
  @Input() language: string = 'javascript';
  
  @Input() value:string = '';
  @Input() highlightLine:any = '';
  @Input() tooltipTag:string = '';
  @Input() searchText:string = 'if';
  @Input() title:string = '';
  @Input() itemId:string = '';

  private _toggle: boolean = true;
  get toggle():boolean {return this._toggle}
  @Input() set toggle(value:BooleanInput){
    if(this.toggle !==  coerceBooleanProperty(value)){
      this._toggle = coerceBooleanProperty(value);

    } else this._toggle = coerceBooleanProperty(value);
  }

  private _code:string = '';
  get code():string {return this._code} 
  @Input() set code(value: string){
    this._code = value;
  } 
  
  private _addLineNumbers: boolean = true;
  get addLineNumbers():boolean {return this._addLineNumbers}
  @Input() set addLineNumbers(value:BooleanInput){ this._addLineNumbers = coerceBooleanProperty(value);}

  private _allowFullScreen: boolean = false;
  get allowFullScreen():boolean {return this._allowFullScreen}
  @Input() set allowFullScreen(value:BooleanInput){ this._allowFullScreen = coerceBooleanProperty(value);}

  private _hidden: boolean = false;
  get hidden():boolean {return this._hidden}
  @Input() set hidden(value:BooleanInput){ this._hidden = coerceBooleanProperty(value); }

  private _copyToClipBoard: boolean = true;
  get  copyToClipBoard():boolean {return this._copyToClipBoard}
  @Input() set  copyToClipBoard(value:BooleanInput){ this._copyToClipBoard = coerceBooleanProperty(value);}

  private _showHideButton: boolean = false;
  get  showHideButton():boolean {return this._showHideButton}
  @Input() set  showHideButton(value:BooleanInput){ this._showHideButton = coerceBooleanProperty(value);}

  private _linkableLineNumbers: boolean = false
  get  linkableLineNumbers():boolean {return this._linkableLineNumbers}
  @Input() set  linkableLineNumbers(value:BooleanInput){ this._linkableLineNumbers = coerceBooleanProperty(value);}

  private _enableToolTips: boolean = false
  get enableToolTips():boolean {return this._enableToolTips}
  @Input() set enableToolTips(value:BooleanInput){ this._enableToolTips = coerceBooleanProperty(value); }

  private _highlightInput: boolean = false
  get highlightInput():boolean {return this._highlightInput}
  @Input() set highlightInput(value:BooleanInput){ this._highlightInput = coerceBooleanProperty(value); }

  private _showLanguage: boolean = false
  get showLanguage():boolean {return this._showLanguage}
  @Input() set showLanguage(value:BooleanInput){ this._showLanguage = coerceBooleanProperty(value); }
  
  private _noWhitespaces: boolean = false
  get noWhitespaces():boolean {return this._noWhitespaces}
  @Input() set noWhitespaces(value:BooleanInput){ this._noWhitespaces = coerceBooleanProperty(value); }
  

  curLinesValue:string='';
  fs:boolean = false;

  constructor(
    private highlightSvc: BnPrismService,
    //private translateService: TranslateService,
    private routerData:BnRouterDataAndTitleService,
    private cdrf: ChangeDetectorRef
  ) { }

  doCopy:string = '';

  ngOnInit(): void {

  this.sub = this.routerData.routerData$.subscribe( (data: any) => {
      if(data.activeHash !==''){
        this.highlightLine = this.routerData.getFragmentPartById(this.itemId)
        setTimeout(() => {
          this.highlightSvc.highlightAll();
          console.log('??')
        }, 10);
      }
   });

   //console.log(this.code)
  }

  

  change(){
    this.routerData.updateFragmentById(this.itemId, this.highlightLine)
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}
