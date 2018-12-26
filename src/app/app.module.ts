import { MaterialModule } from './material-module';
import { MainComponent } from './Layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PublicComponent } from './Layouts/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        loadChildren: './pages/users/users.module#UsersModule'
      },
      {
        path: 'login',
        component: PublicComponent,
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
