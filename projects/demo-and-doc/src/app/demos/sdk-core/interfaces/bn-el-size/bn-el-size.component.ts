import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-bn-el-size',
  standalone: true,
  imports: [CommonModule, DocCompComponent],
  templateUrl: './bn-el-size.component.html',
  styleUrl: './bn-el-size.component.scss'
})
export class BnElSizeComponent {

}
