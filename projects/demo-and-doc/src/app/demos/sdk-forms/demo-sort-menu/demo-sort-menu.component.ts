import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSortMenuComponent } from '@binom/sdk-forms/sort-menu';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-sort-menu',
  standalone: true,
  imports: [CommonModule,BnSortMenuComponent,DocCompComponent],
  templateUrl: './demo-sort-menu.component.html',
  styleUrl: './demo-sort-menu.component.scss'
})
export class DemoSortMenuComponent {
  orderData=[ {
    name:'Feld A', reverse:false
  },
  {
    name:'langer Feldname mit Tabelle', reverse:false
  }]
  code = '<bn-sort-menu [orderData]="orderData"></bn-sort-menu>'
  sd:any;
  constructor() {
    this.sd = JSON.stringify(this.orderData)
  }
}
