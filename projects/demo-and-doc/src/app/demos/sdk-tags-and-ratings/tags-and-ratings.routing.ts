import { Routes } from '@angular/router';

export const routesTagsAndRatings: Routes = [ 
    {
      path: '',
      loadComponent:  () => import('./tags-and-ratings-main.component').then(m => m.TagsAndRatingsMainComponent),
      children:[
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        data:{
            breadcrumb:'home'
        },
        loadComponent:  () => import('./tags-and-ratings-home/tags-and-ratings-home.component').then(m => m.TagsAndRatingsHomeComponent)
    },
    {
        path: 'demo/tags',
        data:{
            breadcrumb:'tags'
        },
        loadComponent:  () => import('./tags/tags.component').then(m => m.TagsComponent)
    },
    {
        path: 'demo/ratings',
        data:{
            breadcrumb:'tags'
        },
        loadComponent:  () => import('./ratings/ratings.component').then(m => m.RatingsComponent)
    },
]}];
