import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatToolbar} from '@angular/material/toolbar';
import { BnAnimateOnScrollComponent } from '@binom/sdk-animation/aos';

@Component({
  selector: 'app-sdk-header',
  standalone: true,
  imports: [MatToolbar,BnAnimateOnScrollComponent, MatButton, MatIconButton],
  templateUrl: './sdk-header.component.html',
  styleUrl: './sdk-header.component.scss'
})
export class SdkHeaderComponent {
  @Input() sdk:string = '';
  @Output() sidebar = new EventEmitter<boolean>(true);
  visible:boolean = true;
  changeSide(){
    this.visible = !this.visible
    this.sidebar.emit(this.visible)
  }
}
