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
    loadChildren:  () => import('./demos/sdk-core/core-main.routes').then(m => m.sdkCoreRoutes),
   
  },
  {
    path: 'sdk-forms',
    data:{
      breadcrumb: 'breadcrumb.sdkforms'
    },
    loadChildren:  () => import('./demos/sdk-forms/forms.routes').then(m => m.routesForms),
   
  },
  {
    path: 'sdk-picker',
    data:{
      breadcrumb: 'breadcrumb.sdkpicker'
    },
    loadChildren:  () => import('./demos/sdk-picker/picker.routes').then(m => m.pickerRoutes),
   
  },
  {
    path: 'sdk-privacy',
    data:{
      breadcrumb: 'breadcrumb.sdkprivacy'
    },
  // loadComponent: () => import('./demos/sdk-core/core-main.component').then(m => m.CoreMainComponent),
    loadChildren:  () => import('./demos/sdk-privacy/privacy.routes').then(m => m.routesPrivacy),
   
  },
  {
    path: 'sdk-tags-and-ratings',
    data:{
      breadcrumb: 'breadcrumb.sdktagsandratings'
    },
  // loadComponent: () => import('./demos/sdk-core/core-main.component').then(m => m.CoreMainComponent),
    loadChildren:  () => import('./demos/sdk-tags-and-ratings/tags-and-ratings.routing').then(m => m.routesTagsAndRatings),
   
  }

  
];
