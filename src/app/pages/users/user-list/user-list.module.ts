import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent }
    ])
  ],
  declarations: [
    UserListComponent,
    PaginationComponent,
    FilterComponent
  ]
})
export class UserListModule { }
