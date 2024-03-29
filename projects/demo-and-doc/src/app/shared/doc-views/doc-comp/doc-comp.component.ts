import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { BnPrismService } from '@binom/sdk-prism/core';
import { UseSvc } from './use-svc';
import { Inputs } from './inputs';
import { Outputs } from './outputs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { BnAnimateOnScrollComponent } from '@binom/sdk-animation/aos';


@Component({
  selector: 'app-doc-comp',
  standalone: true,
  imports: [CommonModule, BnPrismBoxComponent, BnAnimateOnScrollComponent ],
  templateUrl: './doc-comp.component.html',
  styleUrl: './doc-comp.component.scss',
})
export class DocCompComponent implements AfterViewInit {
  language:string = 'typescript';
  @Input() title:string = '';
  @Input() descr:string = '';
  @Input() useSvc:UseSvc[] = [] as any;
  @Input() inputs:Inputs[] = [] as any;
  @Input() outputs:Outputs[] = [] as any;
  @Input() height:number=0;

  private _code:string = '';
  get code(){return this._code}
  @Input() set code(code:string){
    if(!this.noEncode)
    this._code = this.prismSvc.encodeVal(code )
    else this._code = code; 
   
  }

  private _sampleData:string = '';
  get sampleData(){return this._sampleData}
  @Input() set sampleData(sampleData:string){
    this._sampleData = this.prismSvc.encodeVal(sampleData)
  }

  private _hiddenContent: boolean = false; get hiddenContent(): boolean { return this._hiddenContent;}
  @Input() set hiddenContent(val: BooleanInput) { this._hiddenContent = coerceBooleanProperty(val); }

  private _noEncode: boolean = false; get noEncode(): boolean { return this._noEncode;}
  @Input() set noEncode(val: BooleanInput) { this._noEncode = coerceBooleanProperty(val); }

  private _useInner: boolean = false; get useInner(): boolean { return this._useInner;}
  @Input() set useInner(val: BooleanInput) { this._useInner = coerceBooleanProperty(val); }

  private _isSub: boolean = false; get isSub(): boolean { return this._isSub;}
  @Input() set isSub(val: BooleanInput) { this._isSub = coerceBooleanProperty(val); }

  private cdrf = inject(ChangeDetectorRef);
  private prismSvc = inject(BnPrismService)

  @ViewChild('projected', { static: false }) projectedContent!:any;

  private _noWhitespaces: boolean = false
  get noWhitespaces():boolean {return this._noWhitespaces}
  @Input() set noWhitespaces(value:BooleanInput){ this._noWhitespaces = coerceBooleanProperty(value); }
  
  ngAfterViewInit() {

    if(this.code === ''){

      if(!this.noEncode && !this.hiddenContent){
        const original = this.projectedContent.nativeElement as HTMLElement;
        let val = original.innerHTML; 
        if(!this.useInner){
          const inner = original.firstChild as HTMLElement;
          let inStr = ''
          if(inner){ inStr = inner.innerHTML.toString() }
          val = val.replace(inStr,'');
        }
       
        this._code = this.prismSvc.ngCodePrepare(val );
      } 
      
      this.cdrf.detectChanges()
    }

  }
}
