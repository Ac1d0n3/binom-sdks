import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sdk-nav',
  standalone: true,
  imports: [ RouterModule, TranslateModule, MatButtonModule, MatExpansionModule],
  templateUrl: './sdk-nav.component.html',
  styleUrl: './sdk-nav.component.scss'
})
export class SdkNavComponent {

  sortData(){
    this.data.sort((a:any, b:any) => a.title.localeCompare(b.title));
    this.data.forEach((item:any) => {
      item.data.sort();
    });
  }

  constructor(){}

  private _data:any = [];
  get data( ) { return this._data }
  @Input() set data(val:any){
    this._data = val;
    this.sortData();
  }

}
