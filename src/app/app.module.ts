import { ValidationDirective } from './directives/validation.directive';
import { RequestInterceptor } from './services/request.interceptor';
import { PrivateRoutes } from './routes/private-routes.routing';
import { MainComponent } from './Layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PublicComponent } from './Layouts/public/public.component';
import { PublicRoutes } from './routes/public-routes.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'main-system',
        component: MainComponent,
        children: PrivateRoutes
      },
      {
        path: '',
        component: PublicComponent,
        children: PublicRoutes
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
