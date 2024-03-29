import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatFormField, MatSelect,MatLabel, MatOption, FormsModule,ReactiveFormsModule, MatTabsModule, RouterLink,RouterLinkActive],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})
export class AppNavComponent {
  
  constructor(){
    
  }

  private router = inject(Router);
  cur = '';
  activeLinkIndex = -1; 
  data = [
    {
      label: 'home',
      url: 'home'
    },
    {
      label: 'sdk-core',
      url: 'sdk-core'
    },
    {
      label: 'sdk-layout',
      url: 'sdk-layout'
    },
    {
      label: 'sdk-theme',
      url: 'sdk-theme'
    },
    {
      label: 'sdk-user',
      url: 'sdk-user'
    },
    {
      label: 'sdk-privacy',
      url: 'sdk-privacy'
    },
    {
      label: 'sdk-tags-and-ratings',
      url: 'sdk-tags-and-ratings'
    },
    {
      label: 'sdk-forms',
      url: 'sdk-forms'
    },
    {
      label: 'sdk-picker',
      url: 'sdk-picker'
    },
    {
      label: 'sdk-image',
      url: 'sdk-image'
    },
    {
      label: 'sdk-calendar',
      url: 'sdk-calendar'
    },
   
  ];

  navigateTo(value:string){
    this.router.navigate([value]);
  }

}
