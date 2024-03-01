import { Routes } from '@angular/router';
import { BnThemeService } from '@binom/sdk-theme/core';

export const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: 'home',
      data:{
        breadcrumb: 'breadcrumb.home'
      },
      loadComponent:  () => import('./home/home.component').then(m => m.HomeComponent)
  }];
