import { Routes } from '@angular/router';

export const TrashRoutes: Routes = [
  {
    path: 'trash-user',
    loadChildren: './trash-user/trash-user.module#TrashUserModule'
  },
  {
    path: '**',
    redirectTo: 'trash-user',
    pathMatch: 'full'
  }
];
