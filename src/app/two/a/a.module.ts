import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { AService } from './a.service';
import { SharedComponentService } from '../shared-component/shared-component.service';


@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    SharedComponentModule,
  ],
  providers: [
    {
      provide: SharedComponentService,
      useClass: AService
    }
  ]
})
export class AModule { }
