import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSafeHtmlPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-safe-html',
  standalone: true,
  imports: [CommonModule, BnSafeHtmlPipe, FormsModule,  MatFormFieldModule, MatInputModule, DocCompComponent],
  templateUrl: './safe-html.component.html',
  styleUrl: './safe-html.component.scss'
})
export class SafeHtmlComponent {
inputValue:string = '<h1>Hallo Welt<h1><script>alert()</script>';
}
