import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSvcComponent } from '../../../../shared/doc-views/doc-svc/doc-svc.component';

@Component({
  selector: 'app-html-svc',
  standalone: true,
  imports: [CommonModule,DocSvcComponent],
  templateUrl: './html-svc.component.html',
  styleUrl: './html-svc.component.scss'
})
export class HtmlSvcComponent {

  /*
makeHTMLSafe(htmlVal: string)<br>
escapeHTML(htmlVal: string)<br>
removeClasses(htmlVal: string, classNames: string[])<br>
removeEmptyTags(htmlVal: string)<br>
removeEmptySpansWithoutAttributes(htmlVal: string)<br>
removeScripts(htmlVal: string)<br>
cleanCodeBlocksString(content:string)<br>
cleanUp(htmlVal: string, removeScripts: boolean = false)<br>
cleanUpWithCodeBlocks(htmlVal: string, removeScripts: boolean = false)
  */

  data = []
}
