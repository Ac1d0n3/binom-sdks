import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnRouterDataAndTitleService, BnRouterInfo } from '@binom/sdk-core/router';
import { Subscription } from 'rxjs';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-router-and-title-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './router-and-title-svc.component.html',
  styleUrl: './router-and-title-svc.component.scss'
})
export class RouterAndTitleSvcComponent implements OnInit,OnDestroy {

  subscriptions: Array<Subscription> = new Array<Subscription>();
  
  constructor(private routerSvc:BnRouterDataAndTitleService){

  }

  routerData:string = '';

  ngOnInit(): void {
    this.subscriptions.push( this.routerSvc.routerData$.subscribe( (data: any) => this.__onRouterChange(data) ) );
  }

  private __onRouterChange(data:any){

    this.routerData = JSON.stringify(data)
  }

  /*

    <li>updateRouteChacheParams(route:string, parent:string, index:number)</li>
    <li>getRouterParams()</li>
    <li>setAppTitle(title:string)</li>
    <li>setFragment(fragment:string, push:boolean=false)</li>
    <li>navigate(path:string, merge:boolean=false)</li>
    <li>getRoutes(): string[]</li>
    <li>getFragmentPartById(itemId:string)</li>
    <li>updateFragmentById(itemId:string, value:string)</li>
    <li>setRouterParams(values:any, fragment:string = 'null', force:boolean = true)</li>
    <li>checkParamChange(checkParams:string[])</li>

  */

  data = []

  ngOnDestroy(): void {
    
  }
}
