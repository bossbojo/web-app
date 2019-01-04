import { Routes } from '@angular/router';

export const PrivateRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
  },
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
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
    // canActivateChild: [RoleGuard],
    // data: {
    //  title: 'จัดการลูกค้า',
    //  roles: ['admin', 'supervisor', 'operator']
    // }
