import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSuffixInfoComponent } from '@binom/sdk-core/info';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { BnPrismService } from '@binom/sdk-prism/core';
@Component({
  selector: 'app-suffix-info',
  standalone: true,
  imports: [CommonModule, BnSuffixInfoComponent, MatButtonModule, MatInputModule,MatFormFieldModule, DocCompComponent, BnPrismBoxComponent],
  templateUrl: './suffix-info.component.html',
  styleUrl: './suffix-info.component.scss'
})
export class SuffixInfoComponent {
  infoData:any = [];
  private prismSvc = inject(BnPrismService);
  constructor(){
    this.infoData.push({
      name:'Help', end: 'End', start: 'start',
      prefixIconClass: 'warn-color fa-fw fas fa-times', middle: 'msg-middle'
    });

    this.infoData.push({
      name:'Help2', end: 'End', start: 'start',
      prefixIconClass: 'warn-color fa-fw fas fa-times', middle: 'msg-middle'
    });
    this.code2 = JSON.stringify(this.infoData);
    
  }

  code = ` <mat-form-field class="example-full-width">
  <mat-label>Favorite food</mat-label>
  <input matInput placeholder="Ex. Pizza" value="Sushi">
  <bn-suffix-info matSuffix iconType="fas" icon="fa-key" [infoData]="infoData"></bn-suffix-info>
  </mat-form-field>`;
  code2 = '';
}

