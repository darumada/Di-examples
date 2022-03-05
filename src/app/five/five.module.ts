import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveRoutingModule } from './five-routing.module';
import { FiveComponent } from './five.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [
    FiveComponent,
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    FiveRoutingModule
  ]
})
export class FiveModule { }
