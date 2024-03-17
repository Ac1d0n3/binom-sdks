import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnUserStateService } from '@binom/sdk-user/core';
import { MatButtonModule } from '@angular/material/button';
import { DocCompComponent } from '../../../shared/doc-views/doc-comp/doc-comp.component';

@Component({
  selector: 'app-simulate-login-logout',
  standalone: true,
  imports: [CommonModule, MatButtonModule,DocCompComponent],
  templateUrl: './simulate-login-logout.component.html',
  styleUrl: './simulate-login-logout.component.scss'
})
export class SimulateLoginLogoutComponent {
  constructor(private userSvc:BnUserStateService){

  }
  toggle:boolean = false;
  loginSimulator(){
    this.toggle = !this.toggle;
   
    this.userSvc.setCurrentUserObject({
      id: '1',
      loginname: 'DemoUser',
      email: 'dummy@dummy.de'
    });
    this.userSvc.setIsAuthenticated(this.toggle)
  }
}
