import { Routes, RouterModule } from '@angular/router';

export const UserRoute: Routes = [
  {
    path: 'list',
    loadChildren: './user-list/user-list.module#UserListModule'
  },
  {
    path: 'create',
    loadChildren: './user-create/user-create.module#UserCreateModule'
  },
  {
    path: 'edit',
    loadChildren: './user-edit/user-edit.module#UserEditModule'
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
