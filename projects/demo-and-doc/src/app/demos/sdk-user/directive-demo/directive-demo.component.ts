import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateLoginLogoutComponent } from '../simulate-login-logout/simulate-login-logout.component';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';
import { BnAuthDirective, BnNoRolesDirective } from '@binom/sdk-user/core';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,SimulateLoginLogoutComponent,DocCompComponent,BnAuthDirective, BnNoRolesDirective],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent {

}
