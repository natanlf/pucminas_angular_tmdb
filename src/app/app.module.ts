import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ApplicationRouteModule } from './application-route/application-route.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/movies.reducers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ApplicationRouteModule,
    StoreModule.forRoot({ favorites: favoriteReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
