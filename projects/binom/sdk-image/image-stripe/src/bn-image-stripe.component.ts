import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output,EventEmitter } from '@angular/core';
import { BnLayoutService } from '@binom/sdk-layout/core';


import { Subscription } from "rxjs";

@Component({
  selector: 'bn-image-stripe',
  templateUrl: './bn-image-stripe.component.html',
  standalone:true,
  imports:[],
})
export class BnImageStripeComponent implements OnInit,AfterViewInit,OnDestroy {
  @Input() enableToolTips: boolean = false;
  @Input() translateTag: string = '';
  @HostBinding('class') class: string = 'bnImageStripe';
  @ViewChild('imageStripe', { read: ElementRef }) public imageStripe!: ElementRef<any>;
  @Output() selectedImage = new EventEmitter();

  subscriptions: Array<Subscription> = new Array<Subscription>();
  curIndex:number = 0;
  imageSize:number = 200;
  margin:number = 10;
  fullShownInStripe:number = 0;
  imageHeight: number = 0;
  scrollWidth:number = 0;
  stripeWidth:number = 0;
  disableLeft:boolean = true;
  disableRight:boolean = false;
  maxSteps: number = 0;
  currStep: number = 0;

  @Input() imageData = [
      {
        url: '',
        title: '',
        descr: ''
      }
  ];

  @Input() activeImage: number = 0;

  constructor( 
    private bnLayoutService: BnLayoutService
  ) { }

  ngOnInit(): void {
    this.imageHeight = Math.round(this.imageSize * 2 / 3);
  }

  ngAfterViewInit(): void{
    this.setStripeValues();
    let sub2 = this.bnLayoutService.layoutInfo$.subscribe((data:any)=>this.setStripeValues());
    this.subscriptions.push(sub2)
  }

  
  fireAction(action:string){
    if(action == 'forward' && this.currStep <= this.maxSteps){
      this.currStep++;
      this.imageStripe.nativeElement.scrollTo({ left: (this.imageStripe.nativeElement.scrollLeft + this.scrollWidth ), behavior: 'smooth' });
    }
    if(action == 'backward'){
      this.currStep--;
      this.imageStripe.nativeElement.scrollTo({ left: (this.imageStripe.nativeElement.scrollLeft - this.scrollWidth), behavior: 'smooth' });
    }
    this.disableLeft = this.currStep == 0 ? true : false;
    this.disableRight = this.currStep >= this.maxSteps ? true : false;
  }

  setStripeValues(){
    this.currStep = 0;
    this.imageStripe.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
    this.stripeWidth = this.imageStripe.nativeElement.offsetWidth
    this.fullShownInStripe = Math.round(this.stripeWidth / (this.imageSize + this.margin));
    this.maxSteps = Math.round(this.imageData.length / this.fullShownInStripe) -1;
    this.scrollWidth = (this.imageSize + this.margin) * this.fullShownInStripe;
  }

  
  selectImage(data:any){
    this.selectedImage.emit(data)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
