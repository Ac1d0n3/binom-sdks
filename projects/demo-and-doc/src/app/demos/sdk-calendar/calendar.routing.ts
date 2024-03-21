import { Routes } from '@angular/router';

export const routesCalendar: Routes = [ 
    {
      path: '',
      loadComponent:  () => import('./calendar-main.component').then(m => m.CalendarMainComponent),
      children:[
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            loadComponent:  () => import('./calendar-home/calendar-home.component').then(m => m.CalendarHomeComponent)
        },
        
]}];
