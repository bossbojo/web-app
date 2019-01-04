import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPasswordComponent } from './user-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserPasswordComponent }
    ])
  ],
  declarations: [UserPasswordComponent]
})
export class UserPasswordModule { }
