import { Routes } from '@angular/router';


export const themeRoutes: Routes = [ 
  {
    path: '',

    loadComponent:  () => import('./theme-main.component').then(m => m.ThemeMainComponent),
    children:[
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',

        },
        {
            path: 'home',
            loadComponent:  () => import('./theme-home/theme-home.component').then(m => m.ThemeHomeComponent)
        },
        {
            path: 'core/theme-svc',
            loadComponent:  () => import('./theme-svc/theme-svc.component').then(m => m.ThemeSvcComponent)
        },
        {
            path: 'core/theme-switch',
            loadComponent:  () => import('./theme-switch/theme-switch.component').then(m => m.ThemeSwitchComponent)
        },
        {
            path: 'core/theme-background',
            loadComponent:  () => import('./theme-background/theme-background.component').then(m => m.ThemeBackgroundComponent)
        },
    ]
  },
  ];
