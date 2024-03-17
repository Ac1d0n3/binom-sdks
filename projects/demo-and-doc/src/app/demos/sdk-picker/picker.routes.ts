import { Routes } from '@angular/router';

export const pickerRoutes: Routes = [ 
    {
      path: '',
  
      loadComponent:  () => import('./picker-main.component').then(m => m.PickerMainComponent),
      children:[
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./picker-home/picker-home.component').then(m => m.PickerHomeComponent)
    },
    {
        path: 'components/bn-color-picker',
        loadComponent:  () => import('./color-picker/color-picker.component').then(m => m.ColorPickerComponent)
    },
    {
        path: 'components/bn-emoji-picker',
        loadComponent:  () => import('./emoji-picker/emoji-picker.component').then(m => m.EmojiPickerComponent)
    },
    {
        path: 'components/bn-specialchars-picker',
        loadComponent:  () => import('./special-char-picker/special-char-picker.component').then(m => m.SpecialCharPickerComponent)
    },
    {
        path: 'components/bn-icon-picker',
        loadComponent:  () => import('./icon-picker/icon-picker.component').then(m => m.IconPickerComponent)
    }
]}];
