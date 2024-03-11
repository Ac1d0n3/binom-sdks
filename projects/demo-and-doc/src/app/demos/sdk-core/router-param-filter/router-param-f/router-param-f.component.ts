import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnParamFilterMenuComponent, BnParamFilterService } from '@binom/sdk-core/router-param-filter';
import { MatButtonModule } from '@angular/material/button';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-router-param-f',
  standalone: true,
  imports: [CommonModule, BnParamFilterMenuComponent, MatButtonModule, DocCompComponent],
  templateUrl: './router-param-f.component.html',
  styleUrl: './router-param-f.component.scss'
})
export class RouterParamFComponent {

  constructor(private filterSvc: BnParamFilterService){

  }

  addParam(){
    this.filterSvc.addFilter({
      label: 'test',
      clear: 'test',
      
    })
  }
}
