import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { BService } from './b.service';
import { SharedComponentService } from '../shared-component/shared-component.service';


@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    BRoutingModule,
    SharedComponentModule,
  ],
  providers: [
    {
      provide: SharedComponentService,
      useClass: BService
    }
  ]
})
export class BModule { }
