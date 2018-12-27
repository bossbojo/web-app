import { Routes } from '@angular/router';

export const PrivateRoutes: Routes = [
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule',
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule',
  },
  {
    path: 'trash',
    loadChildren: './pages/trash/trash.module#TrashModule',
  }
];
    // canActivateChild: [RoleGuard],
    // data: {
    //  title: 'จัดการลูกค้า',
    //  roles: ['admin', 'supervisor', 'operator']
    // }
