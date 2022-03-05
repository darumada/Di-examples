import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';


@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
