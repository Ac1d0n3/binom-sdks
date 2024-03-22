import { Routes } from '@angular/router';


export const layoutRoutes: Routes = [ 
  {
    path: '',

    loadComponent:  () => import('./layout-main.component').then(m => m.LayoutMainComponent),
    children:[
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',

        },
        {
            path: 'home',
            loadComponent:  () => import('./layout-home/layout-home.component').then(m => m.LayoutHomeComponent)
        },
        {
            path: 'cssgrid/modul',
            loadComponent:  () => import('./css-grid/css-grid.component').then(m => m.CssGridComponent)
        },
        {
            path: 'cssgrid/svc',
            loadComponent:  () => import('./css-grid-svc/css-grid-svc.component').then(m => m.CssGridSvcComponent)
        },
        {
            path: 'cssgrid/layout-switch',
            loadComponent:  () => import('./layout-switch/layout-switch.component').then(m => m.LayoutSwitchComponent)
        },
        {
            path: 'directives/gridblock',
            loadComponent:  () => import('./css-grid-svc/css-grid-svc.component').then(m => m.CssGridSvcComponent)
        },
        {
            path: 'directives/splitcontent',
            loadComponent:  () => import('./split-content/split-content.component').then(m => m.SplitContentComponent)
        },
        {
            path: 'directives/showon',
            loadComponent:  () => import('./show-on/show-on.component').then(m => m.ShowOnComponent)
        },
        {
            path: 'core/layout-svc',
            loadComponent:  () => import('./layout-svc/layout-svc.component').then(m => m.LayoutSvcComponent)
        },
    ]
  },
  ];
