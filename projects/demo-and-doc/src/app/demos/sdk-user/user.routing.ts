import { Routes } from '@angular/router';
import { bnAuthGuard, bnNoAuthGuard } from '@binom/sdk-user/guards';

export const routesUser: Routes = [ 
    {
      path: '',
      loadComponent:  () => import('./user-main.component').then(m => m.UserMainComponent),
      children:[
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./user-home/user-home.component').then(m => m.UserHomeComponent)
    },
    {
        path: 'core/user-state-svc',
        loadComponent:  () => import('./svc/svc.component').then(m => m.SvcComponent)
    },
    {
        path: 'core/:id',
        loadComponent:  () => import('./directive-demo/directive-demo.component').then(m => m.DirectiveDemoComponent)
    },

    {
        path: 'guards/:id',
        canActivate: [bnAuthGuard('/home')],
        loadComponent:  () => import('./guard-demo/guard-demo.component').then(m => m.GuardDemoComponent)
    },

    {
        path: 'components/profile-image',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./profile-image/profile-image.component').then(m => m.ProfileImageComponent)
    },

    {
        path: 'components/login-menu',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'components/password',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./password/password.component').then(m => m.PasswordComponent)
    },
]}];
