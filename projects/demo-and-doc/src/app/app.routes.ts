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
        breadcrumb: 'breadcrumb.home',
        preheader: true
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
    loadChildren:  () => import('./demos/sdk-privacy/privacy.routes').then(m => m.routesPrivacy),
  },
  {
    path: 'sdk-tags-and-ratings',
    data:{
      breadcrumb: 'breadcrumb.sdktagsandratings'
    },
    loadChildren:  () => import('./demos/sdk-tags-and-ratings/tags-and-ratings.routing').then(m => m.routesTagsAndRatings),
  },
  {
    path: 'sdk-user',
    data:{
      breadcrumb: 'breadcrumb.sdkuser'
    },
    loadChildren:  () => import('./demos/sdk-user/user.routing').then(m => m.routesUser),
  },
  {
    path: 'sdk-image',
    data:{
      breadcrumb: 'breadcrumb.sdkimage'
    },
    loadChildren:  () => import('./demos/sdk-image/image.routing').then(m => m.routesImage),
   
  },
  {
    path: 'sdk-calendar',
    data:{
      breadcrumb: 'breadcrumb.sdkcalendar'
    },
    loadChildren:  () => import('./demos/sdk-calendar/calendar.routing').then(m => m.routesCalendar),
   
  }

  
];
