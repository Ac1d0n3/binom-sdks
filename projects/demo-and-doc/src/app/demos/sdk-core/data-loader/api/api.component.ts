import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnApiService } from '@binom/sdk-core/data-loader';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';
import { SvcMethods } from '../../../../shared/doc-views/doc-svc/svc-methods';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, DocSvcComponent],
  providers:[ BnApiService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  apiurl:string;
  constructor(private apiSvc:BnApiService){
    this.apiurl = this.apiSvc.getApiUrl()
  }
  
  data:any = [
    {
      name: 'setApiUrl',
      params: [
        {
          name: 'url',
          type: 'string'
        }
      ]
    },
    {
      name: 'setPhpPostMode',
      params: [
        {
          name: 'onOff',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'get',
      params: [
        {
          name: 'path',
          type: 'string'
        },
        {
          name: 'params',
          type: 'HttpParams = new HttpParams()'
        }
      ]
    },
    {
      name: 'put',
      params: [
        {
          name: 'path',
          type: 'string'
        },
        {
          name: 'body',
          type: 'array'
        }
      ]
    },
    {
      name: 'post',
      params: [
        {
          name: 'path',
          type: 'string'
        },
        {
          name: 'body',
          type: 'array'
        }
      ]
    },
    {
      name: 'delete',
      params: [
        {
          name: 'path',
          type: 'string'
        }
      ]
    }
  ]
}
