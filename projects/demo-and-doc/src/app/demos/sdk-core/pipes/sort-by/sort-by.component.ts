import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSortbyPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { DocCompComponent } from '../../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-sort-by',
  standalone: true,
  imports: [CommonModule, BnSortbyPipe, FormsModule,DocCompComponent],
  templateUrl: './sort-by.component.html',
  styleUrl: './sort-by.component.scss'
})
export class SortByComponent {
  items: any[] = [
    { name: 'Item 3' },
    { name: 'Item 1' },
    { name: 'Item 2' },
  ];

  selectedOrder: 'asc' | 'desc' = 'asc';
}
