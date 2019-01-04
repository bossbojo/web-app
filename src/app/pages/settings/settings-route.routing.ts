import { Routes } from '@angular/router';

export const SettingsRoutes: Routes = [
  {
    path: 'user-profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule'
  },
  {
    path: 'user-password',
    loadChildren: './user-password/user-password.module#UserPasswordModule'
  },
  {
    path: '**',
    redirectTo: 'user-profile',
    pathMatch: 'full'
  }
];
