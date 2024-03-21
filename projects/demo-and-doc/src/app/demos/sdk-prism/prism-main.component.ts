import { Component } from '@angular/core';

@Component({
  selector: 'app-prism-main',
  standalone: true,
  imports: [],
  templateUrl: './prism-main.component.html',
  styleUrl: './prism-main.component.scss'
})
export class PrismMainComponent {
  sidebar:boolean = true;
}
