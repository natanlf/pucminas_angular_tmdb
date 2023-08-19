import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApplicationRouteModule } from './application-route/application-route.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ApplicationRouteModule
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
