import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApplicationRouteModule } from './application-route/application-route.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    HttpClientModule,
    RouterModule,
    ApplicationRouteModule
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
