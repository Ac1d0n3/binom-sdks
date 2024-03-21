import { Routes } from '@angular/router';

export const routesImage: Routes = [ 
    {
      path: '',
      loadComponent:  () => import('./image-main.component').then(m => m.ImageMainComponent),
      children:[
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            loadComponent:  () => import('./image-home/image-home.component').then(m => m.ImageHomeComponent)
        },
        {
            path: 'components/buttons-media',
            loadComponent:  () => import('./buttons-media/buttons-media.component').then(m => m.ButtonsMediaComponent)
        },
]}];
