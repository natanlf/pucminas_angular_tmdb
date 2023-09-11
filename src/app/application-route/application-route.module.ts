import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CustomPreloadingModuleService } from '../config/CustomPreloadingModuleService';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingModuleService })
  ]
})
export class ApplicationRouteModule { }
