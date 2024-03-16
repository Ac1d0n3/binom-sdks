import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPickListComponent } from '@binom/sdk-forms/picklist';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-demo-picklist',
  standalone: true,
  imports: [CommonModule,BnPickListComponent,DocCompComponent],
  templateUrl: './demo-picklist.component.html',
  styleUrl: './demo-picklist.component.scss'
})
export class DemoPicklistComponent{
  pickListPossible = [
    { value: 'A', name: 'Item 1234'},
    { value: 'B', name: 'Item 5677'},
    { value: 'C', name: 'Item 12346'},
    { value: 'D', fontSet: 'fas',icon: 'fa-cog fa-fw', name: 'ItemwithlonglonglonglonglongEItemwithlonglonglonglonglongE'},
    { value: 'E', name: 'Item with long long long long long E'},
    { value: 'F', name: 'Item G', fontSet: 'fas',icon: 'fa-user fa-fw'}
  ]
  pickListSearchIn = [{name: 'name', value:'name'},{name: 'value', value:'value'}];
  pickListActive = ['name']

  pickListSelected = [
    { value: 'X', name: 'Item fff', fontSet: 'fas',icon: 'fa-home fa-fw'},
    { value: 'Z', name: 'Item ggg'}
  ]

  pickListeDataChange(data:any){
    //console.log(data)
    this.pickListPossible = [...data.possibleData];
    this.pickListSelected = [...data.selectedData];
  }

  code = `<bn-picklist
  [possibleData]="pickListPossible"
  [selectedData]="pickListSelected"
  [searchFields]="pickListSearchIn"
  [currentSelected]="pickListActive"
  [orderData]="pickListSearchIn"
  [dataLoaded]="true"
  [dataLoadedSelected]="true"
  [multiple]= "true"
  (pickListDataChange)="pickListeDataChange($event)"
  ></bn-picklist>`;
 
  code2 = ` <bn-picklist
  [searchFields]="pickListSearchIn"
  [currentSelected]="pickListActive"
  [withHeader]="false"
  [withSearch]="false"
  [possibleData]="pickListPossible"
  [selectedData]="pickListSelected"
  [dataLoaded]="true"
  [dataLoadedSelected]="true"
  (pickListDataChange)="pickListeDataChange($event)">

    <ng-template #picklistContent let-item>
      <h3 style="color:orange;">{{ item.name }}</h3>
      <p> with inside template</p>
      <div [hidden]="!item.icon">  </div>
    </ng-template>

  </bn-picklist>`
  

}
