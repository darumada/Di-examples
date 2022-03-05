import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { API_TOKEN } from '../api.token';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    {
      provide: API_TOKEN,
      useValue: 'api/v2'
    }
  ]
})
export class LazyModule { }
