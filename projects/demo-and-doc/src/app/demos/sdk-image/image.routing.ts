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
        {
            path: 'components/image-stripe',
            loadComponent:  () => import('./image-stripe/image-stripe.component').then(m => m.ImageStripeComponent)
        },
        {
            path: 'components/image-bg-slider',
            loadComponent:  () => import('./image-bg-slider/image-bg-slider.component').then(m => m.ImageBgSliderComponent)
        },
        {
            path: 'components/image-box-slider',
            loadComponent:  () => import('./image-box-slider/image-box-slider.component').then(m => m.ImageBoxSliderComponent)
        },
        {
            path: 'components/image-info',
            loadComponent:  () => import('./image-info/image-info.component').then(m => m.ImageInfoComponent)
        },
        {
            path: 'directives/image-lazy',
            loadComponent:  () => import('./image-lazy/image-lazy.component').then(m => m.ImageLazyComponent)
        },
]}];
