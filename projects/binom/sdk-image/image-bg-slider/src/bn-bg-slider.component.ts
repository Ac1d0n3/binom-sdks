import { Component, OnInit, Input, HostBinding, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { Subscription,combineLatest,interval} from "rxjs";
import {
  AnimationType,scaleIn,scaleOut,fadeIn,fadeOut,
  flipIn,flipOut,jackIn,jackOut
} from "./animations";
import { BnThemeService } from '@binom/sdk-theme/core';
import { BnLayoutService } from '@binom/sdk-layout/core';
import { CommonModule } from '@angular/common';
import { BnPlayerButtonsComponent } from '@binom/sdk-image/buttons-media';
import { BnImageStripeComponent } from '@binom/sdk-image/image-stripe';
import { BnExifInfoComponent } from '@binom/sdk-image/image-info';

@Component({
  selector: 'bn-bg-slider',
  templateUrl: './bn-bg-slider.component.html',
  standalone:true,
  imports:[CommonModule,BnPlayerButtonsComponent, BnImageStripeComponent, BnExifInfoComponent],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "2500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "2500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "1500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "2500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "1200ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "1200ms" } })
      ])
    ])
  ]
})
export class BnBgSliderComponent implements OnInit, OnDestroy {
  themeVars:any;
  leftVal:string = '';
  scrollInfo:any;
  curindex: number = 0;
  numImages: number = 4;
  imagesLoaded: number = 0;
  loading: boolean = true;
  toogleStripe: boolean = false;
  sub!: Subscription;
  subscriptions: Array<Subscription> = new Array<Subscription>();
  fullscreen: boolean = true;


  @Input() paused: boolean =false;
  @Input() startStopOnScroll: boolean = true;
  @Input() fullScreenOnScroll: boolean = true;
  @Input() buttonStyle: string = 'round';
  @Input() buttonColor: any = '';
  @Input() animationType = AnimationType.Fade;
  @HostBinding('class') class: string = 'bnBgSlider';
  @Input() imageData = [{
    url: '',
    title: '',
    descr: ''
  }];

  disableBackward:boolean = false;
  disableForward:boolean = false;

  constructor(
    private themeService:BnThemeService ,
    private hostElement: ElementRef,
    private bnLayoutService: BnLayoutService ,
    private zone:NgZone
  ) { }

  ngOnInit(): void {

    if(this.imageData.length > 0){
      this.numImages = this.imageData.length;
      this.imageData.forEach((x, index) => {
       const image = new Image();
       image.onload = () => {
         this.imagesLoaded++;
         this.loading = this.imagesLoaded != this.numImages;
       };
       image.src = x.url;
     });
    }


    this.startStop(false);

    let sub1 = combineLatest(
      [this.themeService.themeVars$,
      this.bnLayoutService.scrollInfo$,
      this.bnLayoutService.layoutEvent$]).subscribe((vars:any) => {
        this.themeVars = vars[0]
        this.fixLeft()
    
        if(vars[1].source == 'bn-layout-app-wrapper'){
          this.scrollInfo = vars[1];
         
          this.fireStartStopOnScroll();
          this.fireFullScreenOnScroll();
        }
      });
    this.subscriptions.push(sub1)
  }

  private startStopIntervall(){
    if(this.sub) this.sub.unsubscribe();

    if(!this.paused){
      this.sub = interval(24000).subscribe(() => {
        if (!this.loading)
        this.curindex = (this.curindex + 1) % this.numImages;
       
      });
    }
  }

  selectImage(event:any){
    this.curindex = this.imageData.findIndex((obj:any) => obj === event)
  }

  backwardSlide(){
    if(this.curindex >= this.numImages && this.curindex != 0){
      this.curindex --;
      this.startStopIntervall()
    }
  }

  forwardSlide(){
    if(this.curindex != this.numImages && this.curindex <=  this.numImages  ){
      this.curindex ++;
      this.startStopIntervall()
    }
  }


  startStop(stop:boolean){
    this.fixLeft();
    if(stop=== true) {
      this.paused = true;
    } else {
      this.paused = false;
    }
    this.startStopIntervall();
  }

  fixLeft(){
    this.zone.run(() => {
      setTimeout(() => {
        this.leftVal =  '-' + this.hostElement.nativeElement.getBoundingClientRect().left +'px';
      },500);
    })

  }

  fireStartStopOnScroll(){
    if(this.startStopOnScroll){
      if(this.scrollInfo.y > 0){
        this.startStop(true);
      } else {
        this.startStop(false);
      }
    }
  }

  fireFullScreenOnScroll(){
    if(this.fullScreenOnScroll){
      if(this.scrollInfo.y > 0){
        this.fullscreen = false;
      } else {
        this.fullscreen = true;
      }
    }
  }

  fireAction(data:any){
    if(data === 'grid') this.toogleStripe = !this.toogleStripe
    else if(data === 'pause') this.startStop(true)
    else if(data === 'play') this.startStop(false)
    else if(data === 'forward-step' )this.forwardSlide();
    else if(data === 'backward-step' )this.backwardSlide();
    else if(data === 'collapse' ) this.fullscreen = false;
    else if(data === 'expand') this.fullscreen = true;
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    if(this.sub) this.sub.unsubscribe();
  }


}
