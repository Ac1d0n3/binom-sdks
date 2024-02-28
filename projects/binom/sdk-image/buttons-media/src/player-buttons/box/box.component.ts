import { CommonModule } from '@angular/common';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'bn-player-buttons-box',
  templateUrl: './box.component.html',
  standalone:true,
  imports:[CommonModule, MatButtonModule, MatTooltipModule],
})
export class BoxComponent implements OnInit {
  @Output() action = new EventEmitter();
  @Input() enableToolTips: boolean = false;
  @Input() translateTag: string = '';
  @Input() style: string = 'round';

  @Input() subButtons: boolean = false;
  @Input() fullscreen: boolean = false;
  @Input() audioOff: boolean = false;
  @Input() paused: boolean = false;

  @Input() audioButton: boolean = true;
  @Input() fullscreenButton: boolean = true;
  @Input() gridButton: boolean = true;

  @Input() disableBackward: boolean = false;
  @Input() disableForward: boolean = false;
  @Input() disableFullscreen: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  fireAction(data:any){
    this.action.emit(data)
  }

}