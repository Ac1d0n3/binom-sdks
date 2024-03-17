import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatFormField, MatSelect,MatLabel, MatOption, FormsModule,ReactiveFormsModule],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})
export class AppNavComponent {
  
  private router = inject(Router);
  cur = '';
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
    }
  ];

  navigateTo(value:string){
    this.router.navigate([value]);
  }

}
