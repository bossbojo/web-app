import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashComponent } from './trash.component';
import { TrashRoutes } from './trash-route.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrashComponent,
        children : TrashRoutes
      }
    ])
  ],
  declarations: [TrashComponent]
})
export class TrashModule { }
