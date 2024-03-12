import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-selection-and-caret-svc',
  standalone: true,
  imports: [CommonModule, DocSvcComponent],
  templateUrl: './selection-and-caret-svc.component.html',
  styleUrl: './selection-and-caret-svc.component.scss'
})
export class SelectionAndCaretSvcComponent {

  /*
   <br>
getSelection()<br>
getCaretPosition()<br>
getCaretIndex(editableDiv:HTMLElement) <br>
getCaretRange()<br>
getSelectionText()<br>
getSelectionParts(element:any, selection:any, range:any)<br>
getCaretInfo(editableDiv:HTMLElement)<br>
insertAfterElement(content:any, newNode:any, referenceNode:any) <br>
replaceElement(content:any, newNode:any, referenceNode:any)<br>
insertAfterSelection(newNode:any, caretInfo:any) <br>
  */
  data:any = [
    {
      name: 'async getSelectionAsync',
      params: []
    },
    {
      name: 'getCaretPosition',
      params: []
    },
    {
      name: 'getCaretIndex',
      params: [
        {
          name: 'editableDiv',
          type: 'HTMLElement'
        }
      ]
    },
    {
      name: 'getCaretInfo',
      params: [
        {
          name: 'editableDiv',
          type: 'HTMLElement'
        }
      ]
    },
    {
      name: 'getCaretRange',
      params: []
    },
    {
      name: 'getSelectionText',
      params: []
    },
    {
      name: 'getSelectionParts',
      params: [
        {
          name: 'element',
          type: 'any'
        },
        {
          name: 'selection',
          type: 'any'
        },
        {
          name: 'range',
          type: 'any'
        }
      ]
    },
    {
      name: 'insertAfterElement',
      params: [
        {
          name: 'content',
          type: 'any'
        },
        {
          name: 'newNode',
          type: 'any'
        },
        {
          name: 'referenceNode',
          type: 'any'
        }
      ]
    },
    {
      name: 'replaceElement',
      params: [
        {
          name: 'content',
          type: 'any'
        },
        {
          name: 'newNode',
          type: 'any'
        },
        {
          name: 'referenceNode',
          type: 'any'
        }
      ]
    },
    {
      name: 'insertAfterSelection',
      params: [
        {
          name: 'content',
          type: 'any'
        },
        {
          name: 'newNode',
          type: 'any'
        },
        {
          name: 'referenceNode',
          type: 'any'
        }
      ]
    },
  ]
}
