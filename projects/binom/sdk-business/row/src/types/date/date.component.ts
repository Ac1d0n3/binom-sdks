import { Component, OnInit } from '@angular/core';
import { BnAuthDirective, BnRolesDirective } from '@binom/sdk-user/core';

@Component({
  selector: 'bn-row-date',
  templateUrl: './date.component.html',
  standalone: true,
  imports:[BnAuthDirective, BnRolesDirective]
})
export class BnRowDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
