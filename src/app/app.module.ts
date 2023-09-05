import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ApplicationRouteModule } from './application-route/application-route.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { MoviesModule } from './movies/movies.module';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/movies.reducers';
import { FavoritesComponent } from './favorites/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
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
