import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashUserComponent } from './trash-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TrashUserComponent }
    ])
  ],
  declarations: [TrashUserComponent]
})
export class TrashUserModule { }
