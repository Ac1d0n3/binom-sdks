import { CommonModule } from '@angular/common';
import { Component, Input, ContentChild, AfterViewInit, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { BnPrismService } from '@binom/sdk-prism/core';
import { UseSvc } from './use-svc';
import { Inputs } from './inputs';
import { Outputs } from './outputs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';


@Component({
  selector: 'app-doc-comp',
  standalone: true,
  imports: [CommonModule, BnPrismBoxComponent, MatToolbar ],
  templateUrl: './doc-comp.component.html',
  styleUrl: './doc-comp.component.scss',
})
export class DocCompComponent implements AfterViewInit {
  language:string = 'typescript';
  @Input() title:string = '';
 
  @Input() descr:string[] = [];

  @Input() useSvc:UseSvc = [];
  @Input() inputs:Inputs = [];
  @Input() outputs:Outputs = [];

  @Input() height:number=0;

  @Input() code:string = '';

  private _noEncode: boolean = false; get noEncode(): boolean { return this._noEncode;}
  @Input() set noEncode(val: BooleanInput) { this._noEncode = coerceBooleanProperty(val); }

  private _useInner: boolean = false; get useInner(): boolean { return this._useInner;}
  @Input() set useInner(val: BooleanInput) { this._useInner = coerceBooleanProperty(val); }

  private _isSub: boolean = false; get isSub(): boolean { return this._isSub;}
  @Input() set isSub(val: BooleanInput) { this._isSub = coerceBooleanProperty(val); }

  private cdrf = inject(ChangeDetectorRef);
  private prismSvc = inject(BnPrismService)

  @ViewChild('projected', { static: false }) projectedContent!:any;
  
  ngAfterViewInit() {

    if(this.code === ''){

      if(!this.noEncode){
        const original = this.projectedContent.nativeElement as HTMLElement;
        let val = original.innerHTML; 
        if(!this.useInner){
          const inner = original.firstChild as HTMLElement;
          let inStr = ''
          if(inner){ inStr = inner.innerHTML.toString() }
          val = val.replace(inStr,'');
        }
       
        this.code = this.prismSvc.ngCodePrepare(val );
      } 
      
      this.cdrf.detectChanges()
    }
   
    console.log(this.isSub)

  }

  
}
