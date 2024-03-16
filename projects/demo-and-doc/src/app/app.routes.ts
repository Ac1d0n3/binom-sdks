import { Routes } from '@angular/router';


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
  },
  {
    path: 'sdk-core',
    data:{
      breadcrumb: 'breadcrumb.sdkcore'
    },
  // loadComponent: () => import('./demos/sdk-core/core-main.component').then(m => m.CoreMainComponent),
    loadChildren:  () => import('./demos/sdk-core/core-main.routes').then(m => m.sdkCoreRoutes),
   
  },
  {
    path: 'sdk-forms',
    data:{
      breadcrumb: 'breadcrumb.sdkcore'
    },
  // loadComponent: () => import('./demos/sdk-core/core-main.component').then(m => m.CoreMainComponent),
    loadChildren:  () => import('./demos/sdk-forms/forms.routes').then(m => m.routesForms),
   
  }
];
