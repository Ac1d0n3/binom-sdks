import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSearchBoxComponent } from '@binom/sdk-core/search-box';
import { BnParamFilterMenuComponent, BnParamFilterService } from '@binom/sdk-core/router-param-filter';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnGridBlockDirective } from '@binom/sdk-layout/grid-block';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, BnSearchBoxComponent, BnParamFilterMenuComponent, DocCompComponent, BnGridBlockDirective],
  providers:[BnParamFilterService],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  searchfields:any[] = [{name:'alias'},{name:'descr'}];
  currentSearchFields:string[] = ['alias','descr'];
  infoData:any = [
    {
      name:'A', end: '', start: 'A',
    },
    {
      name:'B', end: '', start: 'A',
    }
  ]
}
